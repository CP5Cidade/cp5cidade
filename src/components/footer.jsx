#
function Footer() {
  return (
    <footer className="bg-[#3ACFF2] text-white p-8">
      <div className="flex flex-wrap justify-around gap-8">

        <div>
          <h3 className="font-bold text-xl mb-3">
            Sorveteria
          </h3>
          <p>O Melhor Sorvete da FIAP!!!</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Links</h3>
          <p>Início</p>
          <p>Produtos</p>
          <p>Sobre nós</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contato</h3>
          <p>Email: sorveteria@FIAP.com.br</p>
          <p>Telefone: (11) 94715-9307</p>
        </div>

      </div>

      <div className="text-center mt-8 border-t pt-4">
        <p>© 2026 Sorveteria.</p>
      </div>
    </footer>
  );
}

export default Footer;
