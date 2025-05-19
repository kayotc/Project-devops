
import { useNavigate } from 'react-router-dom';
import './assets/home.css'
import Header from './reused/Header'


function Home() {

    const navigate = useNavigate();  // Criando uma instância do hook useNavigate

    const log = () => {
        navigate('/log');  // Redirecionando para a página de login
    };

    const sign = () => {
        navigate('/sign');  // Redirecionando para a página de cadastro
    };

    return(
        <div className='main'>
            <div className='rounded-lg content'>
                <Header/>
                <div className="btns">
                    <button className='text-xl font-medium log m-auto' onClick={log}>Logar</button>
                    <button className='text-xl font-medium sign m-auto' onClick={sign}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

export default Home;