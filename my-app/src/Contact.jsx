import './assets/contact.css'
import Header from './reused/Header.jsx';

function Contact(){
    return (

        <div className="main">
            <div className="rounded-lg content">
                <Header/>
                <div className="h-full w-full commits relative">
                    <h1 className='text-xl font-normal'>Deixe aqui sua opnião ou reclamação que retornaremos o mais rápido possível
                    </h1>
                    <input className='w-2/4 ' type="text" placeholder='Telefone para contato'/>
                    <input className='w-2/4 ' type="email" placeholder='Seu melhor email para contato'/>
                    <textarea className='w-4/5 h-36 resize-none' type="text" placeholder='Deixe sua opnião aqui'/>
                    <button className='h-10 w-20 text-sm font-normal '>Enviar</button>
                </div>
            </div>
        </div>

    )
}

export default Contact;