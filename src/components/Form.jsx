import { FaWhatsapp } from 'react-icons/fa';

const Form = () => {


  return (
    <div className=' flex flex-col  items-center  py-14'>

      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-[#FFFFFF] text-4xl '>Vamos trabalhar juntos</h2>
        <h4 className='text-[#BFBFC4] px-6 text-sm '>Totalmente aberto para trabalhos remotos e Freelances.</h4>
      </div>
      
      <form  
        action="https://formsubmit.co/Eduardo-Muricy@hotmail.com"
        method="POST"
        className="flex flex-col gap-6 py-12 md:w-[25%] w-[80%]  "
      >
        <input type="hidden" name="_captcha" value="false"></input>
         <input type="hidden" name="_next" value="http://localhost:5173/" />

         
        <input className='border-1 rounded-full py-2 px-4 text-[#BFBFC4] focus:outline-[#00CFFF] ' type="text" name="name" placeholder="Seu nome" required />
        <input className='border-1 rounded-full py-2 px-4 text-[#BFBFC4] focus:outline-[#00CFFF]' placeholder="Seu e-mail" required />
        <input className='border-1 rounded-full py-2 px-4 text-[#BFBFC4] focus:outline-[#00CFFF]' type="tel" name="phone" placeholder="Seu telefone/ WhatsApp" id="" required />
         <textarea  className='border-1 rounded-md py-2 px-4 text-[#BFBFC4] form-control focus:outline-[#00CFFF]'  placeholder="Digite sua mensagem"  name="message" rows="10" required/>




        <button className='md:w-[30%] text-[#0B0C1A] bg-[#00CFFF] hover:text-[#ffffff] outline-1 px-2 py-1 rounded-full transition-colors duration-500 cursor-pointer' type="submit">Enviar</button>
      </form>
      <div className='flex flex-col justify-center items-center gap-3'>
        <h4 className='text-[#BFBFC4] text-xl md:text-2xl text-center md:w-[70%]'>Mas se quiser, tambem pode me chamar diretamente no WhatsApp.</h4>
        <div className='flex flex-row text-[#ffffff] cursor-pointer bg-green-700 items-center gap-4 py-2 px-4 rounded-full'>
          <FaWhatsapp className='cursor-pointer'/>
          <button className='cursor-pointer'>Entrar em contato</button>
        </div>
        
      </div>
    </div>
  )
}

export default Form