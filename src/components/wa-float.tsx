import WhatsappIcon from "./whatsapp-icon";

const WA_LINK = "https://wa.me/5531998407238";

export default function WaFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      style={{
        position: "fixed",
        right: 28,
        bottom: 28,
        zIndex: 60,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #128C7E, #075E54)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
        boxShadow: "0 4px 24px rgba(18, 140, 126, 0.4)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      {/* Pulse ring */}
      <span
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          border: "2px solid rgba(18, 140, 126, 0.5)",
          animation: "ring-wa 1.8s ease-out infinite",
          pointerEvents: "none",
        }}
      />
      <WhatsappIcon size={28} />
    </a>
  );
}
