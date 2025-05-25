import '../assets/navbar.css'

function NavBar(){
    return(
        <div className="h-20 nav-bar">
            <a className='link' href= "/home"> <img className='h-14 w-14 rounded-lg bg-white p-1  logo' src="../public/cruz.svg" alt="imagem da cruz" /></a>
        </div>
    )
}

export default NavBar;