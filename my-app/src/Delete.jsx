import Header from './reused/Header.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Delete(){

    const navigate = useNavigate();

    useEffect(() =>{
        const btnDel = document.querySelector('.btnDel');

        const iptEmail = document.querySelector('.email');
        const iptName = document.querySelector('.name');
        const iptPass = document.querySelector('.pass');
        const iptPassC = document.querySelector('.pass-confirme');
        const viwerP = document.querySelector('.viwerP');
        const viwerPC = document.querySelector('.viwerPC');

        const deleteUser = async () =>{
            const name = iptName.value.trim();
            const email = iptEmail.value.trim();
            const pass = iptPass.value.trim();
            const passC = iptPassC.value.trim();

            if (name === '' || email === '' || pass === '' || passC === '' ){
                alert('Por favor, preencha todas as informações abaixo');
            } 
            else if (pass !== passC){
                alert('As senhas estão diferentes');
            }
            //Aqui começa nossa conexão com o Backend
            else {
                //Chamando a API para deletar o usuário
                const resp = await fetch(`${import.meta.env.VITE_API_URL}/users`);
                const users = await resp.json();

                const foundUser = users.find(user => user.email === email);

                if(!foundUser){
                    alert('Usuário não encontrado, vá para a página de cadastro');
                } else if (foundUser.password !== pass|| foundUser.name !== name){
                    alert('Senha ou nome incorretos, por favor tente novamente');
                } else {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {

                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            name: name,
                            email: email,
                            password: pass
                        })

                    });

                    if (response.status === 200) {
                        alert('Usuário deletado com sucesso');
                        navigate('/home');

                    } else if (response.status === 409) {
                        alert('Erro ao deletar usuário. Tente novamente.');
                    } 
                }

                

            } //Aqui termina nossa conexão com o backend 

        }

        const vp = async () =>{
            if(iptPass.type == "password"){
                iptPass.type = "text";
                viwerP.src = "/open.svg"
            } else {
                iptPass.type = "password";
                viwerP.src = "/close.svg"
            }
        }
        const vpc = async () =>{
            if(iptPassC.type == "password"){
                iptPassC.type = "text";
                viwerPC.src = "/open.svg"
            } else {
                iptPassC.type = "password";
                viwerPC.src = "/close.svg"
            }
        } 

        if(btnDel) {
            btnDel.addEventListener('click', deleteUser);
        } 
        if(viwerP) {
            viwerP.addEventListener('click', vp);
        }
        if(viwerPC) {
            viwerPC.addEventListener('click', vpc);
        }

        return () => {
            if(btnDel) {
                btnDel.removeEventListener('click', deleteUser);
            }
            if(viwerP) {
                viwerP.removeEventListener('click', vp);
            }
            if(viwerPC) {
                viwerPC.removeEventListener('click', vpc);
            }
        }
    });

    return(
        <div className="main">
            <div className="rounded-lg content">
                <Header/>
                <div className="inputBox relative">
                    <input className='p-3 w-full name' type="text" placeholder='Digite seu nome'/>
                    <input className='p-3 w-full email' type="email" placeholder='Digite seu Email'/>
                    <input className='p-3 w-full pass' type="password" placeholder='Digite sua senha'/> <img className='h-9 w-9 viwerP' src="/close.svg" alt="Visualizador"/>
                    <input className='p-3 w-full pass-confirme' type="password" placeholder='Confirme sua senha'/> <img className='h-9 w-9 viwerPC' src="/close.svg" alt="Visualizador"/>
                </div>
                <button className='text-xl font-medium m-auto w-2/4 btnDel'>Deletar usuário</button>
            </div>
        </div>
    )
}

export default Delete;