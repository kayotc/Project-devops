import NavBar from "./reused/NavBar.jsx";
import Products from "./reused/Products.jsx"
function Store(){
    return (
        <div className='main'>
            <div className='rounded-lg content'>
                <NavBar />
                <Products />
            </div>
        </div>
    )
}

export default Store;