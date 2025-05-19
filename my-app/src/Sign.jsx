    import './assets/ls.css';
    import Header from './reused/Header.jsx';
    import {Link, useNavigate} from 'react-router-dom';
    import { useEffect } from 'react';

    function Sign() {
        const navigate = useNavigate();

        useEffect( () =>{
            const btn = document.querySelector('.btnC');
            const iptname = document.querySelector('.name');
            const iptemail = document.querySelector('.email');
            const iptpass = document.querySelector('.pass');
            const iptpassC = document.querySelector('.pass-confirme');

            const clicked = async () =>{
                const name = iptname.value.trim();
                const email = iptemail.value.trim();
                const pass = iptpass.value.trim();
                const passC = iptpassC.value.trim();

                if (name === '' || email === '' || pass === '' || passC === '' ){
                    alert('Por favor, preencha todas as informações abaixo')
                } 
                else if (pass !== passC){
                    alert('As senhas devem ser iguais')
                }
                else if (pass.length < 6 || passC.length < 6){
                    alert('As senhas devem ter no minímo 6 caracteres')
                }

                //Aqui começa nossa conexão com o Backend
                else {
                    //Chamando a API para criar o usuário
                    const response = await fetch('http://localhost:3000/users', {

                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            name: name,
                            email: email,
                            password: pass
                        })

                    });

                    if (response.status === 201) {
                        alert('Usuário criado com sucesso');
                        navigate('/log'); // Redireciona para a página de login

                    } else if (response.status === 409) {
                        alert('Usuário já existe, vá para a página de login para entrar no site');

                    } else {
                        alert('Erro ao criar usuário. Tente novamente.');
                    }

                } //Aqui termina nossa conexão com o backend 
            }


            if(btn){
                btn.addEventListener('click', clicked)
            } 

            return () => {
                if(btn){
                    btn.removeEventListener('click', clicked)
                } 
            }
            

        },[navigate]);

        return (
            <div className='main'>
                <div className=" rounded-lg content">
                    <Header />
                    <div className="inputBox">
                        <input className='name' type="text" placeholder='Digite seu nome'/>
                        <input className='email' type="email" placeholder='Digite seu Email'/>
                        <input className='pass' type="password" placeholder='Digite sua senha'/>
                        <input className='pass-confirme' type="password" placeholder='Confirme sua senha'/>
                    </div>
                    <button className='text-xl font-medium w-2/4 btnC'>Cadastrar</button>
                    <p className='font-medium linkToC'>Já tem cadastro? <Link className='text-red-600' to="/log">Clique aqui</Link></p>
                </div>
            </div>
        )
    }

    export default Sign;