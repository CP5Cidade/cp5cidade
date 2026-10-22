
import Card from '../components/Card'
import morangoImg from '../assets/morango.png'
import baunilhaImg from '../assets/baunilha.png'
import chocolateImg from '../assets/chocolate.png'
import pistacheImg from '../assets/pistache.png'

const Home = () => {
  const toys = [
    {
      id: 1,
      titulo: "Morango Cremoso",
      preco: "R$ 12,00",
      imagem: morangoImg,
      descricao: "Doce, suave e cheio de sabor.",
      etiqueta: "MAIS VENDIDO"
    },
    {
      id: 2,
      titulo: "Baunilha Especial",
      preco: "R$ 10,00",
      imagem: baunilhaImg,
      descricao: "Clássico, leve e irresistível.",
      etiqueta: "CLÁSSICO"
    },
    {
      id: 3,
      titulo: "Chocolate Belga",
      preco: "R$ 15,00",
      imagem: chocolateImg,
      descricao: "Intenso e super cremoso.",
      etiqueta: "FAVORITO"
    },
    {
      id: 4,
      titulo: "Delícia de Pistache",
      preco: "R$ 18,00",
      imagem: pistacheImg,
      descricao: "Um toque sofisticado e especial.",
      etiqueta: "ESPECIAL"
    }
  ]

  return (
    <main className="min-h-screen grow bg-[#fffaf5] px-[5%] py-12 md:py-16">

      <header className="mb-12 text-center">
        <span className="inline-block rounded-full border border-[#f3d5dc] bg-[#fff0f3] px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#bd6b82]">
           GELATO ARTESANAL
        </span>

        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#604438] md:text-5xl">
          Um mundo de{" "}
          <span className="text-[#df8299]">sabores</span>
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#967f71] md:text-lg">
          Pequenos momentos, grandes sabores.
          Encontre seu novo sorvete favorito!
        </p>

        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#edc4ce]" />
          <span className="h-px w-12 bg-[#edc4ce]" />
        </div>
      </header>

      <section className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {toys.map((sorvete) => (
          <Card
            key={sorvete.id}
            titulo={sorvete.titulo}
            preco={sorvete.preco}
            imagem={sorvete.imagem}
            descricao={sorvete.descricao}
            etiqueta={sorvete.etiqueta}
          />
        ))}
      </section>

      <footer className="mt-16 border-t border-[#f0e2d8] pt-8 text-center">
        <p className="text-sm font-medium text-[#967f71]">
          Feito com carinho, servido com felicidade. 
        </p>
      </footer>

    </main>
  )
}

export default Home
