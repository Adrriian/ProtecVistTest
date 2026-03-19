import { useState } from "react";
import CameraComponent from "../../components/Modals/Camera";

export default function GuiaFotoModal({
  adicionarFoto,
  proximaFoto,
  fotoAtual,
  setEtapa,
}: any) {
  const [fotoTemp, setFotoTemp] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  function handleCapture(file: File) {
    const url = URL.createObjectURL(file);
    setFotoTemp(file);
    setPreview(url);
  }

  function refazer() {
    setFotoTemp(null);
    setPreview(null);
  }

  function salvarGaleria(file: File) {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vistoria_${Date.now()}.jpg`;
    a.click();
  }

  function confirmar() {
    if (!fotoTemp || !preview) return;

    adicionarFoto({
      file: fotoTemp,
      preview,
      nome: `foto_${Date.now()}`,
    });

    salvarGaleria(fotoTemp);

    setFotoTemp(null);
    setPreview(null);

    if (fotoAtual >= 4) {
      setEtapa("final");
    } else {
      proximaFoto();
    }
  }

  return (
    <div className="p-5 text-center">
      <h2 className="mb-4">Foto {fotoAtual + 1}</h2>

      {!preview && <CameraComponent onCapture={handleCapture} />}

      {preview && (
        <>
          <img
            src={preview}
            className="w-full max-w-md mx-auto mt-4 rounded"
          />

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={refazer}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Refazer
            </button>

            <button
              onClick={confirmar}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Confirmar
            </button>
          </div>
        </>
      )}
    </div>
  );
}