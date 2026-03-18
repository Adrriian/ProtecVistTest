import { useState } from "react";

const etapas = [
  "frente",
  "frente_lado_direito",
  "traseira",
  "motor"
];

export function useVistoria() {
  const [step, setStep] = useState(0);

  const [fotos, setFotos] = useState<Record<string, string>>({});

  const etapaAtual = etapas[step];

  function salvarFoto(img: string) {
    setFotos(prev => ({
      ...prev,
      [etapaAtual]: img
    }));
  }

  function proximo() {
    setStep(prev => prev + 1);
  }

  function voltar() {
    setStep(prev => prev - 1);
  }

  function finalizado() {
    return step >= etapas.length;
  }

  return {
    step,
    etapaAtual,
    fotos,
    salvarFoto,
    proximo,
    voltar,
    finalizado
  };
}