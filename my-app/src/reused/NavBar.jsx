import '../assets/navbar.css'



function NavBar( {cartCount, clearCart, userName }){


    return(
        <div className="h-20 nav-bar">
            <a className='link' href= "/home"> <img className='h-14 w-14 rounded-lg bg-white p-1  logo' src="/cruz.svg" alt="imagem da cruz" /></a>
            <input type="text" className='p-2 w-3/6'  placeholder='Procure seu produto'/>
            <h2 className='font-medium text-xl text-white font-sans'>Olá, {userName}</h2>
            <a className='linkToContact cursor-pointer font-medium text-xl text-white font-sans' href="/contact">Contato</a>
            <p className='clearCart cursor-pointer font-medium text-xl text-white font-sans' onClick={clearCart}>
                Limpar carrinho
            </p>
            <div className="relative h-12 w-12  logoCar">
                <img className='h-full w-full' src="/carrinho.svg" alt="Imagem do carrinho" />
                {cartCount > 0 && (
                    <span className="absolute bottom-0 right-0 bg-white text-red-600 rounded-full text-xs w-4 h-4 flex items-center justify-center">
                        {cartCount}
                    </span>
                )}


            </div>
        </div>
    )
}

export default NavBar;