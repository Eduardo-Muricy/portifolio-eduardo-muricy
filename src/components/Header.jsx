import { useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import InteractiveBackground from './BgInteractive.jsx';
import { BsMoonStars } from 'react-icons/bs';
import { X } from 'lucide-react';
import { BiMenuAltRight } from 'react-icons/bi';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
const Header = () => {
    const [changeTheme, setChangeTheme] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" fixed w-screen  bg-[#0b0c1a] z-30">
       
                
            <header className='flex justify-between   px-4 py-2 md:px-8   items-center ' >
                  

                  <div className=''>
                    <h1 id='title' className='text-2xl   text-[#FFFFFF]'>Eduardo Muricy</h1>
                    <h6 id='subtitle' className='text-xs text-[#BFBFC4]'>{`<Desenvolvedor Web Front-End/>`}</h6>
                </div>


                <div className='md:hidden'>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>

                        <SheetTrigger asChild>


                            <BiMenuAltRight size={36} className='text-[#FFFFFF] ' />


                        </SheetTrigger>
                        {isOpen && (
                            <div className="bg-black opacity-96 w-screen h-screen fixed inset-0 z-40 md:hidden" />
                        )}



                        <SheetContent side="top" className="w-screen max-w-none  h-[70%] bg-[#0B0C1A] flex p-0 m-0 border-0"  >


                            <SheetClose asChild>
                                <button className="absolute right-4 top-4 z-1 text-white bg-[#0B0C1A] ">
                                    <X className="w-6 h-6" />
                                </button>
                            </SheetClose>
                            <SheetTitle className="p-4">

                                <div>
                                    <h1 id='title' className='text-2xl   text-[#FFFFFF]'>Eduardo Muricy</h1>
                                     <h6 id='subtitle' className='text-xs text-[#BFBFC4]'>{`<Desenvolvedor Web Front-End/>`}</h6>
                                </div>
                                
                                
                                </SheetTitle>
                               

                            <VisuallyHidden>
                                <SheetDescription >Links principais do site</SheetDescription>

                            </VisuallyHidden>


                            <nav className="flex flex-col gap-6 mt-6 px-4 text-lg text-white">
                                <a href="/">Início</a>
                                <a href="/about">Sobre</a>
                                <a href="/projects">Projetos</a>
                            </nav>

                            <div className='flex gap-8 p-4 items-center'>
                                <button className='text-[#FFFFFF]  border-1 rounded-full p-2 text-sm  transition-colors duration-300'>
                                    Entrar em contato
                                </button>
                                {!changeTheme ? <button onClick={() => setChangeTheme(!changeTheme)}><BsMoonStars size={25} className='text-white' /></button> : <button onClick={() => setChangeTheme(!changeTheme)}><BsSunFill size={25} className='text-white' /></button>}


                            </div>







                            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black pointer-events-none z-0" />
                        </SheetContent>

                    </Sheet>
                </div>


                <div className='hidden md:flex md:gap-12 text-[#FFFFFF] '>
                    <a href="">Início</a>
                    <a href="">Sobre</a>
                    <a href="">Projetos</a>
                </div>

                <div className='hidden  md:flex md:gap-12'>
                    <button className='text-[#FFFFFF]  border-1 rounded-full p-1 text-sm  transition-colors duration-300'>
                        Entrar em contato
                    </button>
                    {!changeTheme ? <button onClick={() => setChangeTheme(!changeTheme)}><BsMoonStars size={25} className='text-white' /></button> : <button onClick={() => setChangeTheme(!changeTheme)}><BsSunFill size={25} className='text-white' /></button>}
                </div>

            </header>
           
        </div>
    )
}

export default Header