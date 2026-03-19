export default function FinalModal({ fotos }: any) {
  async function enviar() {
    console.log("Enviar para imgbb:", fotos);

    // aqui você faz upload
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 ">
      <div className="w-75 bg-white p-5 rounded flex items-center justify-center flex-col gap-5">
        <h2 className="mb-4 text-violet-700 font-bold text-xl">Finalizar</h2>

        <div className="flex gap-1 max-w-75  flex-wrap">
          {fotos.map((item: any, index: number) => (
            <img className="w-15 rounded-xl"
              key={index}
              src={item.preview} />)
          )}
        </div>


        <button
          onClick={enviar}
          className="bg-blue-700 text-white px-4 py-2 mt-4 rounded hover:px-5 hover:py-3 cursor-pointer hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_blue]"
        >
          Enviar
        </button>
      </div>

    </div>
  );
}