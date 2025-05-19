import Header from "./reused/Header.jsx"
import Products from "./reused/Products.jsx"

function Store(){
    return (
        <div className='main'>
            <div className='rounded-lg content'>
                <Header/>
                <Products/>
            </div>
        </div>
    )
}

export default Store;