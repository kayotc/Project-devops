import { useEffect } from 'react';
import './assets/ls.css';
import Header from './reused/Header.jsx';
import { Link , useNavigate} from 'react-router-dom';


function Log() {

    const navigate = useNavigate();

    useEffect( () =>{
            const btn = document.querySelector('.btnL');
            const iptemail = document.querySelector('.email');
            const iptpass = document.querySelector('.pass');
            
            const clicked = async () =>{
                const email = iptemail.value.trim();
                const pass = iptpass.value.trim();
    
                if(email === '' || pass === ''){
                    alert('Por favor, preencha todas as informações abaixo')
                } 
                else {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
                    const users = await response.json()

                    //Procurar usuário pelo email

                    const foundUser = users.find(user => user.email === email);

                    if(!foundUser){
                        alert('Usuário não encontrado, vá para a página de casdatro');
                    } else if(foundUser.password !== pass){
                        alert('Senha incorreta, por favor tente novamente');
                    } else {
                        alert(`Bem-vindo, ${foundUser.name}`);
                        navigate('/store');
                    }

                }
            }
    
    
            if(btn){
                btn.addEventListener('click', clicked)
            } 
    
            return () => {
                if(btn){
                    btn.removeEventListener('click', clicked)
                } 
            }
            
    
        },[]);

    return (
        <div className='main'>
            <div className=" rounded-lg content">
                <Header />
                <div className="inputBox">
                    <input className='p-3 email' type="text" placeholder='Digite seu Email'/>
                    <input className='p-3 pass' type="password" placeholder='Digite sua senha'/>
                </div>
                <button className='text-xl font-medium w-2/4 btnL'>Entrar</button>
                <p className='font-medium linkToL'>Ainda não tem uma conta? <Link className='text-red-600' to="/sign">Clique aqui</Link></p>
            </div>
        </div>
    )
}

export default Log;