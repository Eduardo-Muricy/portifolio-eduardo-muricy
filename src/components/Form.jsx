import React from 'react'

const Form = () => {
  return (
    <div className=' '>

        <div>
          <h2 className='text-[#FFFFFF]'>Vamos trabalhar juntos</h2>
          <h4 className='text-[#BFBFC4]'>Totalmente aberto para trabalhos remotos e Freelances</h4>
        </div>
      <form 
  action="https://formsubmit.co/Eduardo-Muricy@hotmail.com"
  method="POST"
  className="flex flex-col gap-4 "
>
  <input className='border-1 rounded-full' type="text" name="name" placeholder="Seu nome" required />
  <input className='border-1 rounded-full' type="email" name="email" placeholder="Seu e-mail" required />
  <input className='border-1 rounded-full' type="tel" name="phone" placeholder="Seu telefone/ WhatsApp" id="" required/>
  
  
 
  
  <button type="submit">Enviar</button>
</form>
<div>
  <p className='text-[#BFBFC4]'>Mas se quiser, tambem pode me chamar diretamente no WhatsApp</p>
  <button>Entrar em contato</button>
</div>
    </div>
  )
}

export default Form