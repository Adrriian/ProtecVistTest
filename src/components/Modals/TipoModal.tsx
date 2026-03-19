export default function TipoModal({
  setEtapa,
  setTipoVeiculo,
}: any) {
  return (
    <div className="p-5 text-center">
      <h2 className="mb-4">Escolha o veículo</h2>

      <button
        onClick={() => {
          setTipoVeiculo("carro");
          setEtapa("guia");
        }}
        className="bg-green-500 text-white px-4 py-2 m-2"
      >
        Carro
      </button>

      <button
        onClick={() => {
          setTipoVeiculo("moto");
          setEtapa("guia");
        }}
        className="bg-yellow-500 text-white px-4 py-2 m-2"
      >
        Moto
      </button>
    </div>
  );
}