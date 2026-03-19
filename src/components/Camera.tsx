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

    // 🔥 aqui você pode salvar a foto pra usar no app
    console.log("Arquivo capturado:", file);

    mostrarMensagem("✅ Foto capturada com sucesso!");

    // 🔥 se quiser voltar automaticamente
    // setTimeout(() => {
    //   window.history.back();
    // }, 1500);
  }

  return (
    <div style={styles.container}>
      <h2>Tirar Foto</h2>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <button onClick={abrirCamera} style={styles.button}>
        📸 Abrir Câmera
      </button>

      <p style={styles.mensagem}>{mensagem}</p>

      {preview && (
        <img src={preview} alt="preview" style={styles.image} />
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "#111",
    color: "#fff",
    textAlign: "center" as const,
    padding: "20px",
    minHeight: "100vh",
  },
  button: {
    padding: "15px 25px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    background: "#00c853",
    color: "#fff",
    cursor: "pointer",
  },
  mensagem: {
    marginTop: "15px",
    fontWeight: "bold",
    minHeight: "20px",
  },
  image: {
    marginTop: "20px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "10px",
  },
};