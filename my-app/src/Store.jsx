import NavBar from "./reused/NavBar.jsx";
import Products from "./reused/Products.jsx"
import { useState } from "react";
import { useLocation } from "react-router-dom";
function Store(){

    const location = useLocation();
    const userName = location.state?.userName || 'Visitante';

    const [cartCount, setCartCount] = useState(0);

    // Função para adicionar um item ao carrinho
    const addToCart = () => setCartCount(count => count + 1);

    function clearCart(){
        setCartCount(0)
    }

    return (
        <div className='main'>
            <div className='rounded-lg content'>
                <NavBar cartCount = {cartCount} clearCart={clearCart} userName={userName}/>
                <Products addToCart = {addToCart}/>
            </div>
        </div>
    )
}

export default Store;