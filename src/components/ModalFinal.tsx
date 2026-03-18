type Props = {
  fotos: Record<string, string>;
};

export function ModalFinal({ fotos }: Props) {

  function enviarWhatsApp() {
    const mensagem = `Vistoria concluída:\n${JSON.stringify(fotos, null, 2)}`;

    const url = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  }

  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl">
      <h2 className="text-lg font-bold mb-4">
        Vistoria finalizada
      </h2>

      <button
        onClick={enviarWhatsApp}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Enviar para WhatsApp
      </button>
    </div>
  );
}