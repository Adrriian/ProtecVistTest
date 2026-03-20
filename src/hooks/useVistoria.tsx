import { useState } from "react";

export type Etapa =
  | "intro"
  | "tipo"
  | "tipoVist"
  | "selecionarFotos"
  | "guia"
  | "final";

export type Foto = {
  file: File;
  preview: string;
  nome: string;
};

const FOTOS_CARRO = [
  "Frente",
  "Frente Lado Direito",
  "Pneu Frente Lado Direito",
  "Farol Frente Lado Direito",
  "Parabrisa",
  "Frente Lado Esquerdo",
  "Pneu Frente Lado Esquerdo",
  "Farol Frente Lado Esquerdo",
  "Traseira",
  "Traseira Lado Direito",
  "Pneu Traseiro Lado Direito",
  "Farol Traseiro Lado Direito",
  "Traseira Lado Esquerdo",
  "Pneu Traseiro Lado Esquerdo",
  "Farol Traseiro Lado Esquerdo",
  "Kilometragem",
  "Motor",
  "Chassi",
];

const FOTOS_MOTO = [
  "frente",
  "Frente Lado Direito",
  "Frente Lado Esquerdo",
  "Pneu Frente",
  "Traseira",
  "Traseira Lado Direito",
  "Traseira Lado Esquerdo",
  "Pneu Traseiro",
  "Kilometragem",
  "Placa",
  "Chassi",
];

export function useVistoria() {
  const [etapa, setEtapa] = useState<Etapa>("intro");
  const [tipoVeiculo, setTipoVeiculo] = useState<"carro" | "moto" | null>(null);
  const [tipoVistoria, setTipoVistoria] = useState<"completa" | "parcial" | null>(null);

  const [fotosSelecionadas, setFotosSelecionadas] = useState<string[]>([]);
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [fotoAtual, setFotoAtual] = useState(0);

  const fotoAtualNome = fotosSelecionadas[fotoAtual];

  function voltar() {
    if (etapa === "tipoVist") {
      setEtapa("tipo");
      return;
    }

    if (etapa === "selecionarFotos") {
      setEtapa("tipoVist");
      return;
    }

    if (etapa === "guia") {
      if (tipoVistoria === "parcial") {
        setEtapa("selecionarFotos");
      } else {
        setEtapa("tipoVist");
      }
      return;
    }
  }

  function getListaFotos() {
    if (tipoVeiculo === "moto") return FOTOS_MOTO;
    return FOTOS_CARRO;
  }

  function escolherTipoVistoria(tipoOne: "completa" | "parcial") {
    setTipoVistoria(tipoOne);

    const lista = getListaFotos();

    if (tipoOne === "completa") {
      setFotosSelecionadas(lista);
      setEtapa("guia");
    } else {
      setEtapa("selecionarFotos");
    }
  }

  function adicionarFoto(foto: Foto) {
    const nome = fotosSelecionadas[fotoAtual];

    setFotos((prev) => [
      ...prev,
      {
        ...foto,
        nome,
      },
    ]);
  }

  function proximaFoto() {
    setFotoAtual((prev) => {
      const next = prev + 1;

      if (next >= fotosSelecionadas.length) {
        setEtapa("final");
        return prev;
      }

      return next;
    });
  }

  return {
    etapa,
    setEtapa,

    tipoVeiculo,
    setTipoVeiculo,

    tipoVistoria,
    escolherTipoVistoria,

    fotosSelecionadas,
    setFotosSelecionadas,

    getListaFotos,

    fotos,
    adicionarFoto,

    fotoAtual,
    fotoAtualNome,
    proximaFoto,

    voltar, // 👈 MUITO IMPORTANTE EXPORTAR
  };
}