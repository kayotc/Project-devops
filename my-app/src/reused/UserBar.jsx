import '../assets/userarea.css'

function UserBar({userName, userEmail}){
    return(
        <div className="bar relative">
            <a className='absolute top-3 right-3 text-white text-2xl font-medium' href="/store">Voltar</a>
            <a className='absolute top-3 right-24 text-white text-2xl font-medium' href="/update">Atualizar</a>
            <img className='h-36 w-36' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLLtyINUjGrUqYz9XATvi_TEVFcMGwadE4g&s" alt="Sua imagem" />
            <h1 className='text-7xl font-light text-white'>Olá, {userName}</h1>
        </div>
    )
}   

export default UserBar;