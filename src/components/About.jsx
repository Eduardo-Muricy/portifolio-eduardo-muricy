import MarqueeComponent from './MarqueeComponent';
import { BiTagAlt } from 'react-icons/bi';
const About = () => {
    return (
        <div className='  flex flex-col items-center  '>
            <div className='flex flex-col items-center pt-24'>
                <h1 className='text-[#FFFFFF] text-4xl bold'>
                    Desenvolvedor Web
                </h1>
                <h4 className='text-[#BFBFC4] text-center pt-1  px-6'>{`{Javascript, CSS, React.js, Next.js, Tailwindcss, Node.js... }`}</h4>

                <p className='text-[#FFFFFF] pt-5 text-center px-5'>Dou vida a projetos web com minha especialidade em React.js e Next.js. </p>
            </div>
            <div className='p-3'>
                <button className='text-[#0B0C1A] bg-[#00CFFF] px-2 py-1 rounded-full'>
                    Ver projetos
                </button>
            </div>

            <div className='pt-12 '>
                <h1 className='text-[#FFFFFF] text-4xl bold text-center' >{`<programador/> solucionador de problemas`}</h1>

            </div>

            <div className='flex flex-col items-center justify-center pl-8 p-3'>
                <div className='flex flex-col justify-center px-3 '>
                    <BiTagAlt className='text-[#BFBFC4] hidden md:block ' /><p className='text-[#FFFFFF] '>Especialidade em React e Next.js.<span className='text-[#BFBFC4]'> Eu constantimente trabalho com essas tecnologias.</span></p>
                </div>
                <div className='flex flex-col p-3'>
                    <BiTagAlt className='text-[#BFBFC4] hidden md:block' />
                    <p className='text-[#FFFFFF]'>Trabalho em equipe.<span className='text-[#BFBFC4]'> Uma das coisas que eu mais gosto no trabalho, é  trabalhar em equipe. Mas eu tambem trabalho sozinho, no meu canto.</span></p>
                </div>
            </div>


            <div >
                <h2 className='text-center text-[#FFFFFF] text-4xl bold p-3'>Habilidades</h2>
               
            </div>
<MarqueeComponent/>


        </div>
    )
}

export default About