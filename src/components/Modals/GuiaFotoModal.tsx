
import { useState } from "react";
import CameraComponent from "../../components/Modals/Camera";

// 🔥 Arrays de fotos
const FOTOS_CARRO = [
  "Placa",
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

type Props = {
  adicionarFoto: Function;
  proximaFoto: Function;
  fotoAtual: number;
  setEtapa: Function;

  tipo: "carro" | "moto" | null;
  fotosSelecionadas: string[];
};

export function GuiaFotoModals({
  adicionarFoto,
  proximaFoto,
  fotoAtual,
  setEtapa,
  tipo,
  fotosSelecionadas,
}: Props) {
 
  const [fotoTemp, setFotoTemp] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // 🔥 define lista ativa
  const listaFotos =
    fotosSelecionadas && fotosSelecionadas.length > 0
      ? fotosSelecionadas
      : tipo === "carro"
      ? FOTOS_CARRO
      : FOTOS_MOTO;

  // 🔥 foto atual
  const nomeFotoAtual = listaFotos[fotoAtual];

  // 🔥 caminho correto (Vite/public)
const nomeArquivo = nomeFotoAtual.replace(/\s/g, "-").toLowerCase();
console.log(nomeArquivo)
console.log("TIPO:", tipo);
const caminhoReferencia = `${process.env.PUBLIC_URL}/fotos/${tipo}/${nomeArquivo}.jpeg`;
  console.log(caminhoReferencia);

  function handleCapture(file: File) {
    const url = URL.createObjectURL(file);
    setFotoTemp(file);
    setPreview(url);
  }

  function refazer() {
    setFotoTemp(null);
    setPreview(null);
  }

  function salvarGaleria(file: File, nome: string) {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${nome}.jpg`;
    a.click();
  }

  function confirmar() {
    if (!fotoTemp || !preview) return;

    const nomeArquivo = `${nomeFotoAtual
      .replace(/\s/g, "_")
      .toLowerCase()}_${Date.now()}`;

    adicionarFoto({
      file: fotoTemp,
      preview,
      nome: nomeArquivo,
    });

    salvarGaleria(fotoTemp, nomeArquivo);

    setFotoTemp(null);
    setPreview(null);

    // 🔥 finalização correta
    if (fotoAtual >= listaFotos.length - 1) {
      setEtapa("final");
    } else {
      proximaFoto();
    }
  }
   if (!tipo) {
   return <div>Erro: tipo não definido</div>;
}
  return (
    <div className="insent-0 min-h-screen flex items-center justify-center">
      <div className="p-5 text-center bg-white rounded w-75 flex flex-col gap-5">

        {/* 🔥 título dinâmico + progresso */}
        <div className="flex flex-col items-center">
          <h2 className="mb-2 text-violet-700 font-bold text-xl">
            {nomeFotoAtual}
          </h2>

          <span className="text-sm text-gray-500">
            {fotoAtual + 1} de {listaFotos.length}
          </span>

          {/* 🔥 imagem de referência dinâmica */}
          <img
            src={caminhoReferencia}
            className="w-[80%] rounded-2xl mt-2"
          />
        </div>

        {/* 📸 câmera */}
        {!preview && <CameraComponent onCapture={handleCapture} />}

        {/* ✅ preview + ações */}
        {preview && (
          <>
            <img
              src={preview}
              className="w-[80%] max-w-md mx-auto mt-4 rounded-2xl"
            />

            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={refazer}
                className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:px-5 hover:py-3 hover:bg-red-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_red]"
              >
                Refazer
              </button>

              <button
                onClick={confirmar}
                className="bg-blue-700 cursor-pointer text-white px-4 py-2 rounded hover:px-5 hover:py-3 hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_blue]"
              >
                Confirmar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

