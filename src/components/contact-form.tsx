"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircleCheck, ChevronDown } from "lucide-react";
import { setField, setTouched, setStatus, resetForm } from "@/store/contactSlice";
import type { RootState, AppDispatch } from "@/store";
import type { Fields } from "@/store/contactSlice";

const glass: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(22, 45, 80, 0.5), rgba(17, 34, 64, 0.6))",
  border: "1px solid rgba(77, 157, 224, 0.18)",
  borderRadius: 16,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
};

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(17, 34, 64, 0.6)",
  borderRadius: 10,
  padding: "12px 16px",
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  color: "#CDD6E4",
  outline: "none",
  boxSizing: "border-box",
};

const subjects = [
  "WordPress",
  "Hospedagem",
  "Manutenção",
  "E-commerce",
  "Landing Page",
  "Outro",
];

function isValidField(field: keyof Fields, value: string): boolean {
  switch (field) {
    case "nome":
      return value.trim().length >= 2;
    case "whatsapp": {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 11;
    }
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case "assunto":
      return value !== "";
    case "mensagem":
      return value.trim().length >= 10;
  }
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ContactForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { fields, touched, status, errorMessage } = useSelector(
    (state: RootState) => state.contact
  );
  const [focusedField, setFocusedField] = useState<keyof Fields | null>(null);

  const allValid = (Object.keys(fields) as (keyof Fields)[]).every((f) =>
    isValidField(f, fields[f])
  );

  function getFieldClass(field: keyof Fields): string {
    if (focusedField !== field) return "";
    return isValidField(field, fields[field]) ? "field-valid" : "field-invalid";
  }

  function showIcon(field: keyof Fields): boolean {
    return focusedField === field && isValidField(field, fields[field]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const allTouched = (Object.keys(fields) as (keyof Fields)[]).every((f) =>
      isValidField(f, fields[f])
    );
    if (!allTouched) {
      (Object.keys(fields) as (keyof Fields)[]).forEach((f) =>
        dispatch(setTouched(f))
      );
      return;
    }

    dispatch(setStatus({ status: "loading" }));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();

      if (res.ok) {
        dispatch(setStatus({ status: "success" }));
        dispatch(resetForm());
      } else {
        dispatch(
          setStatus({
            status: "error",
            errorMessage: data.error ?? "Erro ao enviar. Tente novamente.",
          })
        );
      }
    } catch {
      dispatch(
        setStatus({
          status: "error",
          errorMessage: "Erro de conexão. Verifique sua internet e tente novamente.",
        })
      );
    }
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: "#8FA0BA",
    marginBottom: 8,
    letterSpacing: "0.06em",
  };

  const required = <span style={{ color: "#4D9DE0", marginLeft: 3 }}>*</span>;

  return (
    <div style={{ ...glass, padding: 36 }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 18 }}
      >
        {/* Nome */}
        <div>
          <label style={labelStyle}>nome{required}</label>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={fields.nome}
              className={getFieldClass("nome")}
              style={{ ...inputBase, border: "1px solid rgba(77, 157, 224, 0.2)" }}
              onChange={(e) => dispatch(setField({ field: "nome", value: e.target.value }))}
              onFocus={() => setFocusedField("nome")}
              onBlur={() => {
                dispatch(setTouched("nome"));
                setFocusedField(null);
              }}
            />
            {showIcon("nome") && (
              <CircleCheck
                size={16}
                color="#B7E4C7"
                style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
            )}
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <label style={labelStyle}>whatsapp{required}</label>
          <div style={{ position: "relative" }}>
            <input
              type="tel"
              placeholder="31 99999-9999"
              value={fields.whatsapp}
              className={getFieldClass("whatsapp")}
              style={{ ...inputBase, border: "1px solid rgba(77, 157, 224, 0.2)" }}
              onChange={(e) => dispatch(setField({ field: "whatsapp", value: e.target.value }))}
              onFocus={() => setFocusedField("whatsapp")}
              onBlur={() => {
                dispatch(setTouched("whatsapp"));
                setFocusedField(null);
              }}
            />
            {showIcon("whatsapp") && (
              <CircleCheck
                size={16}
                color="#B7E4C7"
                style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
            )}
          </div>
        </div>

        {/* E-mail */}
        <div>
          <label style={labelStyle}>e-mail{required}</label>
          <div style={{ position: "relative" }}>
            <input
              type="email"
              placeholder="seu@email.com"
              value={fields.email}
              className={getFieldClass("email")}
              style={{ ...inputBase, border: "1px solid rgba(77, 157, 224, 0.2)" }}
              onChange={(e) => dispatch(setField({ field: "email", value: e.target.value }))}
              onFocus={() => setFocusedField("email")}
              onBlur={() => {
                dispatch(setTouched("email"));
                setFocusedField(null);
              }}
            />
            {showIcon("email") && (
              <CircleCheck
                size={16}
                color="#B7E4C7"
                style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
            )}
          </div>
        </div>

        {/* Assunto */}
        <div>
          <label style={labelStyle}>assunto{required}</label>
          <div style={{ position: "relative" }}>
            <select
              value={fields.assunto}
              className={getFieldClass("assunto")}
              style={{
                ...inputBase,
                border: "1px solid rgba(77, 157, 224, 0.2)",
                appearance: "none",
                paddingRight: 36,
              }}
              onChange={(e) => dispatch(setField({ field: "assunto", value: e.target.value }))}
              onFocus={() => setFocusedField("assunto")}
              onBlur={() => {
                dispatch(setTouched("assunto"));
                setFocusedField(null);
              }}
            >
              <option value="" style={{ background: "#112240" }}>Selecione um assunto</option>
              {subjects.map((s) => (
                <option key={s} value={s} style={{ background: "#112240" }}>{s}</option>
              ))}
            </select>
            <ChevronDown
              size={15}
              color="#4D9DE0"
              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
            />
            {showIcon("assunto") && (
              <CircleCheck
                size={16}
                color="#B7E4C7"
                style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
              />
            )}
          </div>
        </div>

        {/* Mensagem */}
        <div>
          <label style={labelStyle}>mensagem{required}</label>
          <div style={{ position: "relative" }}>
            <textarea
              rows={5}
              placeholder="Conte-nos sobre seu projeto..."
              value={fields.mensagem}
              className={getFieldClass("mensagem")}
              style={{
                ...inputBase,
                border: "1px solid rgba(77, 157, 224, 0.2)",
                resize: "vertical",
              }}
              onChange={(e) => dispatch(setField({ field: "mensagem", value: e.target.value }))}
              onFocus={() => setFocusedField("mensagem")}
              onBlur={() => {
                dispatch(setTouched("mensagem"));
                setFocusedField(null);
              }}
            />
            {showIcon("mensagem") && (
              <CircleCheck
                size={16}
                color="#B7E4C7"
                style={{ position: "absolute", right: 12, top: 14, pointerEvents: "none" }}
              />
            )}
          </div>
        </div>

        {/* Feedback */}
        {status === "success" && (
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 13, color: "#B7E4C7", textAlign: "center" }}>
            Mensagem enviada com sucesso! Retornaremos em breve.
          </p>
        )}
        {status === "error" && (
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 13, color: "#DC4C4C", textAlign: "center" }}>
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={!allValid || status === "loading"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: !allValid || status === "loading" ? "rgba(77, 157, 224, 0.3)" : "#4D9DE0",
            color: !allValid || status === "loading" ? "rgba(10, 22, 40, 0.5)" : "#0A1628",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            fontWeight: 700,
            padding: "14px",
            borderRadius: 10,
            border: "none",
            cursor: !allValid || status === "loading" ? "not-allowed" : "pointer",
            transition: "background 0.2s, color 0.2s",
            letterSpacing: "0.04em",
          }}
        >
          {status === "loading" ? "enviando..." : <>enviar mensagem <ArrowIcon /></>}
        </button>
      </form>
    </div>
  );
}
