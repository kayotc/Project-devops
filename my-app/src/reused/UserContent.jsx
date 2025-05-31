import '../assets/userarea.css'

function UserContent({userName, userEmail}){

    function thanks(){
        alert('Obrigado, por enviar suas informações')
    }

    return(
        <div className="relative infos">
            <h1 className='text-2xl font-light text-red-400'>Nome: {userName}</h1>
            <h1 className='text-2xl font-light text-red-400'>Email: {userEmail}</h1>
            <div className="extras relative h-full w-full">
                <input className='historic w-2/4 h-10' type="text" placeholder='Histórico de doença na família'/>
                <input className='w-1/5 h-10' type="date" />
                <input className='cpf w-1/4 h-10' type="text" placeholder='Seu CPF'/>
                <button className='w-1/3' onClick={thanks}>Enviar</button>
                <a className='text-red-600 text-sm absolute bottom-3 right-3 ' href="/home">Sair</a>
                <a className='text-red-600 text-sm absolute bottom-3 right-14' href="/delete">Deletar</a>
            </div>
        </div>
    )
}

export default UserContent;