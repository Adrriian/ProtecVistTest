import '../style.css'

export const vist = function goVist(){
  return`
<div class="flex flex-col gap-4 items-center">

      <label
        for="camera"
        class="px-6 py-3 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition"
      >
        Abrir câmera
      </label>

      <input
        id="camera"
        type="file"
        accept="image/*"
        capture="environment"
        class="hidden"
      />

      <img id="preview" class="w-64 rounded-lg hidden" />
    </div>`
  }