"use client";

import dynamic from "next/dynamic";

// Carrega o canvas animado só no cliente. Como a página é um Server Component,
// o `ssr: false` precisa ficar num Client Component (regra do Next 16).
// Assim o JS pesado do canvas sai do caminho crítico de renderização e o <h1>
// do hero passa a ser o elemento de LCP, sem bloquear a thread principal.
const NeuralCanvas = dynamic(() => import("./neural-canvas"), {
  ssr: false,
  loading: () => null,
});

export default function NeuralCanvasLoader() {
  return <NeuralCanvas />;
}
