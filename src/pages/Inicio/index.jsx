import React from 'react'
import ProfileContainer from '../../components/profileContainer'
import pessoas from '../../assets/vetor/pessoas.svg'
export default function Inicio() {
    return (
        <div>
            <header className='flex justify-between p-4 w-full'>
                <ProfileContainer></ProfileContainer>
                <img className='w-9 md:hidden' src="/assets/icons/menuIcon.svg" alt="" />
                <nav className='hidden text-sm md:inline-flex absolute w-full items-center justify-center left-0'>
                    <a href="#" className='mr-5 border-b border-gray-950'>home</a>
                    <a href="#" className='hover:border-b border-gray-950'>my to do list</a>
                </nav>
            </header>
            <main className='overflow-hidden'>
                <section className=' px-6 my-6 flex flex-col m-auto md:flex-row md:w-3/4 '>
                    <div className='flex flex-col z-10 md:w-1/2 md:mr-5'>
                        <div className='text-center mb-4'>
                            <h1 className='text-xl'>Domine sua Produtividade com</h1>
                            <p className='text-lg'>“nome do site”</p>
                        </div>
                        <p className='text-justify'>Você já se pegou perdendo o foco e atrasando tarefas importantes? Não se preocupe, nós temos a solução perfeita para você! Bem-vindo ao nosso “nome do site” - a ferramenta definitiva para otimizar sua produtividade e alcançar seus objetivos de forma eficiente.</p>
                        <button className='self-center text-white bg-gray-950 py-2 px-4 rounded text-xs my-6 hover:bg-gray-500 border-none outline-none ease-linear duration-100'>ver mais</button>
                    </div>
                    <img className='mx-auto mt-6 md:w-1/2' src={pessoas}></img>
                </section>
            </main>
        </div>
    )
}
