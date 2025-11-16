function Highlights() {
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design Revolucionario</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para proporcionar uma experiência incrível.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/Img/titanium-design.jpg"
              alt="iphone-tatanio"
            ></img>
            <h3 className="font-bold mb-2 text-3xl">Tatânio Premium</h3>
            <p className="text-gray-300">
              {" "}
              Estrutura de titanio de grau aeroespacial. O Smartphone mais forte
              e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/Img/ios-features.jpg "
              alt="ios-futuro"
            ></img>
            <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
            <p className="text-gray-300">
              {" "}
              O sistema operacional mais avançado do mundo com IA integrada.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performace">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
          <p className="text-gray-300 mb-5">O chip mais poderoso em um Smartphone</p>
          <img
            className="w-full rounded-2xl mb-4"
            src="../../public/Img/chip-a18-pro.jpg"
            alt="a18-iphone"
          ></img>

          <ul className="space-y-3 text-gray-300">
            <li>CPU 20% mais rápido</li>
            <li>GPU 25% mais efieciente</li>
            <li>Neural Engine com 16 Núcleos</li>
            <li>Ray trancing acelerado por hardware</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
