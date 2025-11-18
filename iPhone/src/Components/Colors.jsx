/* eslint-disable no-unused-vars */

import { useState } from 'react';


function Colors() {

    /// cores ///

const colors = [
    { id: 'blue', name: 'Titânio Azul', Image: '../../public/Img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
    { id: 'silver', name: 'Titânio Natural', Image: '../../public/Img/iphone-silver.jpg', colorClass: 'bg-gray-300' },
    { id: 'orange', name: 'Titânio Laranja', Image: '../../public/Img/iphone-orange.jpg', colorClass: 'bg-orange-500' },
];


     const [selectedColor, setSelectedColor] = useState('blue');

const models = [
    { name:'Pro Max', screen:'6.9 polegadas', storage:'2566GB, 512GB ou 1TB', battery:'33h de vídeo', weight:'221g'},
    { name:'Pro', screen:'6.3 polegadas', storage:'128GB, 256GB ou 512GB', battery:'29h de vídeo', weight:'199g'},
];




    return (
        <section id="colors" className="bg-black py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4"> Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio lindos para voce escolher</p>
                </div>

                <div className='flex justify-center mb-12'>
                    <div className='relative w-full max-w-3xl'>
                        <div className=' relative flex items-center justify-center min-h-[500px]'>
                            <img src={colors.find( color => color.id === selectedColor).Image}
                            alt='iphone 17' className='max-w-full max-h-[600px] max-auto'></img>
                        </div>

                            <div className='absolute bottom-8 left-0 right-0 text-center'>
                                <div className='px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block'>
                                    <h3 className='text-2xl font-semibold'>{colors.find( color => color.id === selectedColor).name}</h3>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-4'>
                    {colors.map( color => (
                        <button className={`relative transition-all duration-300`} key={color.id} onClick={() => setSelectedColor(color.id)}>
                            <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedColor === color.id ? 'border-white' : 'border-gray-600 cursor-pointer'}`}></div>
                        </button>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Colors