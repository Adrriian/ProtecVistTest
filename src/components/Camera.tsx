

export function Camera() {
  const input:any = document.getElementById("cameraInput")  as HTMLInputElement;
  const preview:any = document.getElementById("preview") as HTMLImageElement;
  const mensagem:any = document.getElementById("mensagem") as HTMLParagraphElement;

  function abrirCamera() {
    mensagem.innerText = "";
    input.click();
  }

  input.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) {
      mostrarMensagem("❌ Foto cancelada");
      return;
    }

    const url = URL.createObjectURL(file);
    preview.src = url;
    preview.style.display = "block";

    mostrarMensagem("✅ Foto capturada com sucesso!");
  });

  function mostrarMensagem(texto:string) {
    mensagem.innerText = texto;

    setTimeout(() => {
      mensagem.innerText = "";
    }, 3000);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h2>Tirar Foto</h2>

     
      <input
        type="file"
        accept="image/*"
        capture="environment"
        id="cameraInput"
        className="hidden"
      />

       
        <button onClick={abrirCamera}>📸 Abrir Câmera</button>

     
        <p id="mensagem"></p>

  
        <img id="preview" />
    </div>
  );
}