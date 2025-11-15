function Intro() {


    // eslint-disable-next-line no-unused-vars
    const specs = [
        { value: '6.3', label: 'Display Super Retina XDR', color: 'text-blue-600' },
        { value: 'A18 Pro', label: 'Chip mais Rápida', color: 'text-orange-500' },
        { value: '48MP', label: 'Sistema de câmera', color: 'text-blue-600' },
        { value: '29h', label: 'Bateria', color: 'text-orange-500' },
    ];

    return (

        <section>
            <div>
                <h1>iPhone 17 Pro</h1>
                <p>Titânio. Tão Forte. Tão leve. Tão Pro. </p>
                <p>O design mais refinado que já criamos. Titânio de grau aeroespascial. Chip A18 Pro.</p>
            </div>

            <div>
                <button>Compre agora</button>
                <button>Saiba mais</button>
            </div>
        </section>

    )
}

export default Intro