
const Card = ({ titulo, preco, imagem }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#f3e3dc] bg-white shadow-[0_8px_25px_rgba(96,68,56,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#e9b5c4] hover:shadow-[0_18px_35px_rgba(96,68,56,0.15)]">

      {/* Imagem do produto */}
      <div className="relative overflow-hidden bg-[#fff0f3]">
        <img
          src={imagem}
          alt={titulo}
          className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#bd6b82] shadow-sm backdrop-blur-sm">
           Especial da casa
        </span>
      </div>

      {/* Informações do produto */}
      <article className="p-5 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d28a9e]">
          Feito com carinho
        </p>

        <h2 className="mb-3 text-xl font-extrabold uppercase tracking-wide text-[#604438] transition-colors duration-300 group-hover:text-[#ce718b]">
          {titulo}
        </h2>

        <div className="mb-5">
          <p className="mb-1 text-xs text-[#a99589]">
            Experimente por apenas
          </p>
          <p className="text-3xl font-extrabold tracking-tight text-[#bf6c83]">
            {preco}
          </p>
        </div>

        <button
          type="button"
          className="w-full rounded-2xl bg-gradient-to-r from-[#e995ac] to-[#d66f91] px-5 py-3.5 font-bold text-white shadow-md shadow-[#d66f91]/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#d97896] hover:to-[#c85b7d] hover:shadow-lg hover:shadow-[#d66f91]/30 active:translate-y-0 active:scale-[0.98]"
        >
           Comprar agora
        </button>
      </article>

    </div>
  )
}

export default Card
