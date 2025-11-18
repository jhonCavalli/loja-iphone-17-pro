

function Footer () {


    const sections = [
        {
            title:'Comprar e Saber Mais',
            links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comprar modelos', 'Acessórios']
        },
        {
            title:'Específicações',
            links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']
        },
        {
            title:'Suporte',
            links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 19', 'Contato']
        },
        {
            title:'Apple',
            links: ['Sobre a Apple', 'Newroom', 'Privacidade', 'Carreiras']
        }
    ];

        const buttonLinks = ['Política de Privacidade', 'Termos de Uso', ' Vendas'];

    return (

        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="hover:text-white cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>  
                    ))}
                </div>  
                   
            </div>

            <div className=" broder-t border-gray-800 pt-6 px-6 pb-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500">Copyright © 2025 Apple Inc.Todos os direitos reservados.</p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        {buttonLinks.map((btnLink, btnIndex) => (
                            <a href="#" key={btnIndex} className="text-sm text-gray-400 hover:text-white mx-2 cursor-pointer">{btnLink}</a>
                        ))}
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-6 text-center">Site criado para fins educacionais - Aula Dev Club</p>
            </div>
        </footer>
    )
}

export default Footer
