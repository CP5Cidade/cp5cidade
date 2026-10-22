
import Card from '../components/Card'

import bananaImg from '../assets/banana.jpg'
import baunilhaImg from '../assets/baunilha.png'
import chocolateImg from '../assets/chocolate.png'
import flocosImg from '../assets/flocos.jpg'
import limaoImg from '../assets/limao.jpg'
import milhoImg from '../assets/milho.jpg'
import morangoImg from '../assets/morango.png'
import ovomaltineImg from '../assets/ovomaltine.jpg'
import passasImg from '../assets/passas.jpg'
import pistacheImg from '../assets/pistache.png'
import tuttiFruttiImg from '../assets/tuttifruti.jpg'

const Produtos = () => {
  const produtos = [
    {
      id: 1,
      titulo: "Banana Cremosa",
      preco: "R$ 12,00",
      imagem: bananaImg
    },
    {
      id: 2,
      titulo: "Baunilha Especial",
      preco: "R$ 10,00",
      imagem: baunilhaImg
    },
    {
      id: 3,
      titulo: "Chocolate Belga",
      preco: "R$ 15,00",
      imagem: chocolateImg
    },
    {
      id: 4,
      titulo: "Flocos Crocantes",
      preco: "R$ 13,00",
      imagem: flocosImg
    },
    {
      id: 5,
      titulo: "Limão Siciliano",
      preco: "R$ 11,00",
      imagem: limaoImg
    },
    {
      id: 6,
      titulo: "Milho Verde",
      preco: "R$ 12,00",
      imagem: milhoImg
    },
    {
      id: 7,
      titulo: "Morango Cremoso",
      preco: "R$ 12,00",
      imagem: morangoImg
    },
    {
      id: 8,
      titulo: "Ovomaltine",
      preco: "R$ 16,00",
      imagem: ovomaltineImg
    },
    {
      id: 9,
      titulo: "Rum com Passas",
      preco: "R$ 14,00",
      imagem: passasImg
    },
    {
      id: 10,
      titulo: "Delícia de Pistache",
      preco: "R$ 18,00",
      imagem: pistacheImg
    },
    {
      id: 11,
      titulo: "Tutti-Frutti",
      preco: "R$ 13,00",
      imagem: tuttiFruttiImg
    }
  ]

  return (
    <main>
      <header>
        <h1>
          Nosso <span>Cardápio</span>
        </h1>

        <p>
          Explore nossos sabores e escolha seu sorvete favorito!
        </p>
      </header>

      <section>
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            titulo={produto.titulo}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Produtos
