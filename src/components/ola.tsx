type Props = {
  etapa: string;
  onNext: () => void;
};

export function ModalGuia({ etapa, onNext }: Props) {
  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl">
      <h2 className="text-lg font-bold mb-2">
        Tire a foto: {etapa}
      </h2>

      <button
        onClick={onNext}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Abrir câmera
      </button>
    </div>
  );
}