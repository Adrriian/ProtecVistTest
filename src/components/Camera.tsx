import { useRef, useState } from "react";

export function CameraComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState("");

  function abrirCamera() {
    setMensagem("Abrindo câmera...");
    inputRef.current?.click();
  }

  function mostrarMensagem(texto: string) {
    setMensagem(texto);

    setTimeout(() => {
      setMensagem("");
    }, 3000);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) {
      mostrarMensagem("❌ Foto cancelada");
      return;
    }

    // limpa memória anterior
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    console.log("Arquivo capturado:", file);

    mostrarMensagem("✅ Foto capturada com sucesso!");
  }

  return (
    <div className="bg-zinc-900 text-white text-center p-5 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-5">Tirar Foto</h2>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        onClick={abrirCamera}
        className="px-6 py-4 text-lg rounded-xl bg-green-500 hover:bg-green-600 transition"
      >
        📸 Abrir Câmera
      </button>

      <p className="mt-4 font-semibold min-h-[20px]">
        {mensagem}
      </p>

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="mt-5 w-full max-w-md rounded-xl"
        />
      )}
    </div>
  );
}