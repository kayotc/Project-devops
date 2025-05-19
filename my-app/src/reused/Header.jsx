import '../assets/header.css'


function Header() {
    return(
       <div className="header">
            <a className='m-auto' href= "/home"> <img className='h-20 w-20 rounded-lg bg-white p-1  logo' src="../public/cruz.svg" alt="imagem da cruz" /></a>
            <h1 className='text-gray-50 text-4xl font-medium m-auto filter drop-shadow-2xl'>SK</h1>
            <p className='text-gray-100 font-luz m-auto'>Bem-vindo ao Sistema de Saúde e Kuidado.</p>
       </div>
    )
}

export default Header;