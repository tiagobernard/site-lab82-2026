import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Fields = {
  nome: string;
  whatsapp: string;
  email: string;
  assunto: string;
  mensagem: string;
};

type Touched = Partial<Record<keyof Fields, boolean>>;
export type Status = "idle" | "loading" | "success" | "error";

interface ContactState {
  fields: Fields;
  touched: Touched;
  status: Status;
  errorMessage: string;
}

const initialState: ContactState = {
  fields: { nome: "", whatsapp: "", email: "", assunto: "", mensagem: "" },
  touched: {},
  status: "idle",
  errorMessage: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setField(state, action: PayloadAction<{ field: keyof Fields; value: string }>) {
      state.fields[action.payload.field] = action.payload.value;
    },
    setTouched(state, action: PayloadAction<keyof Fields>) {
      state.touched[action.payload] = true;
    },
    setStatus(
      state,
      action: PayloadAction<{ status: Status; errorMessage?: string }>
    ) {
      state.status = action.payload.status;
      state.errorMessage = action.payload.errorMessage ?? "";
    },
    resetForm(state) {
      state.fields = initialState.fields;
      state.touched = {};
      state.errorMessage = "";
    },
  },
});

export const { setField, setTouched, setStatus, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
