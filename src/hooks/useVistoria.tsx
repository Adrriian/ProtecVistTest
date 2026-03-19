import { useState } from "react";

export type Etapa = "intro" | "tipo" | "guia" | "final";

export type Foto = {
  file: File;
  preview: string;
  nome: string;
};

export function useVistoria() {
  const [etapa, setEtapa] = useState<Etapa>("intro");
  const [tipoVeiculo, setTipoVeiculo] = useState<"carro" | "moto" | null>(null);
  const [tipoVistoria, setTipoVistoria] = useState<string | null>(null);
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [fotoAtual, setFotoAtual] = useState(0);

  function adicionarFoto(foto: Foto) {
    setFotos((prev) => [...prev, foto]);
  }

  function proximaFoto() {
    setFotoAtual((prev) => prev + 1);
  }

  return {
    etapa,
    setEtapa,
    tipoVeiculo,
    setTipoVeiculo,
    tipoVistoria,
    setTipoVistoria,
    fotos,
    adicionarFoto,
    fotoAtual,
    proximaFoto,
  };
}