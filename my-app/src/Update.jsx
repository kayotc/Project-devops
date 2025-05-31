import './assets/up.css';
import Header from './reused/Header.jsx';
import { useEffect } from 'react';



function Update() {

    useEffect(() => {
        const btnUpdate = document.querySelector('.btnUpdate');
        const viwerP = document.querySelector('.viwerP');
        const viwerPC = document.querySelector('.viwerPC');
        const viwerNP = document.querySelector('.viwerNP');
        const viwerNPC = document.querySelector('.viwerNPC');

        // campos antigos
        const inputOldName = document.querySelector('.name');
        const inputOldEmail = document.querySelector('.email');
        const inputOldPass = document.querySelector('.pass');
        const inputOldPassConf = document.querySelector('.pass-confirme');

        // campos novos
        const inputNewName = document.querySelector('.newName');
        const inputNewEmail = document.querySelector('.newEmail');
        const inputNewPass = document.querySelector('.newPass');
        const inputNewPassConf = document.querySelector('.new-pass-confirme');

        const updateUser = async () => {
            const oldName = inputOldName.value.trim();
            const oldEmail = inputOldEmail.value.trim();
            const oldPassword = inputOldPass.value.trim();
            const oldPasswordConf = inputOldPassConf.value.trim();

            const newName = inputNewName.value.trim();
            const newEmail = inputNewEmail.value.trim();
            const newPassword = inputNewPass.value.trim();
            const newPasswordConf = inputNewPassConf.value.trim();

            if (!oldName || !oldEmail || !oldPassword || !oldPasswordConf || !newName || !newEmail || !newPassword || !newPasswordConf) {
                alert('Por favor, preencha todas as informações');
                return;
            }

            if (oldPassword !== oldPasswordConf || newPassword !== newPasswordConf) {
                alert('As senhas devem ser iguais');
                return;
            }

            if (newPassword.length < 6) {
                alert('A nova senha deve ter no mínimo 6 caracteres');
                return;
            }

        
            const resp = await fetch(`${import.meta.env.VITE_API_URL}/users`);
            const users = await resp.json();

            const foundUser = users.find(user => user.email === oldEmail);

            if(!foundUser){
                alert('Usuário não encontrado, vá para a página de cadastro');
            } else if (foundUser.password !== oldPassword || foundUser.name !== oldName){
                alert('Senha ou nome incorretos, por favor tente novamente');
            } else {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${oldEmail}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: newName,
                        email: newEmail,
                        password: newPassword
                    // envia o novo email que deseja colocar
                    }),
                });
                if (response.status === 200) {
                    alert('Usuário atualizado com sucesso');
                } else if (response.status === 409) {
                    alert('Esse email já existe');
                } else if (response.status === 404) {
                    alert('Usuário não encontrado');
                } else {
                    alert('Erro ao atualizar usuário');
                }
            }

        };

            
            const vp = async () =>{
                if(inputOldPass.type == "password"){
                    inputOldPass.type = "text";
                    viwerP.src = "/open.svg"
                } else {
                    inputOldPass.type = "password";
                    viwerP.src = "/close.svg"
                }
            }
            const vpc = async () =>{
                if(inputOldPassConf.type == "password"){
                    inputOldPassConf.type = "text";
                    viwerPC.src = "/open.svg"
                } else {
                    inputOldPassConf.type = "password";
                    viwerPC.src = "/close.svg"
                }
            } 

            const nvp = async () =>{
                if(inputNewPass.type == "password"){
                    inputNewPass.type = "text";
                    viwerNP.src = "/open.svg"
                } else {
                    inputNewPass.type = "password";
                    viwerNP.src = "/close.svg"
                }
            }
            const nvpc = async () =>{
                if(inputNewPassConf.type == "password"){
                    inputNewPassConf.type = "text";
                    viwerNPC.src = "/open.svg"
                } else {
                    inputNewPassConf.type = "password";
                    viwerNPC.src = "/close.svg"
                }
            } 




            if (btnUpdate) {
                btnUpdate.addEventListener('click', updateUser);
            } 
            if (viwerP) {
                viwerP.addEventListener('click', vp);
            }
            if (viwerPC) {
                viwerPC.addEventListener('click', vpc);
            }
            if (viwerNP) {
                viwerNP.addEventListener('click', nvp);
            }
            if (viwerNPC) {
                viwerNPC.addEventListener('click', nvpc);
            }
            

            return () => {
                if (btnUpdate) {
                    btnUpdate.removeEventListener('click', updateUser);
                }
                if (viwerP) {
                    viwerP.removeEventListener('click', vp);
                }
                if (viwerPC) {
                    viwerPC.removeEventListener('click', vpc);
                }
                if (viwerNP) {
                    viwerNP.removeEventListener('click', nvp);
                }
                if (viwerNPC) {
                    viwerNPC.removeEventListener('click', nvpc);
                }
            }
    }, []);

    return (
        <div className="main">
            <div className="rounded-lg content">
                <Header/>
                <div className="inputs">
                    <div className="inputBoxOld relative">
                        <input className='p-3 w-full name' type="text" placeholder='Digite seu antigo nome'/>
                        <input className='p-3 w-full email' type="email" placeholder='Digite seu antigo email'/>
                        <input className='p-3 w-full pass' type="password" placeholder='Digite sua antiga senha'/> <img className='h-9 w-9 viwerP' src="/close.svg" alt="Visualizador"/>
                        <input className='p-3 w-full pass-confirme' type="password" placeholder='Confirme sua antiga senha'/> <img className='h-9 w-9 viwerPC' src="/close.svg" alt="Visualizador"/>
                    </div>
                    <div className="inputBoxNew relative">
                        <input className='p-3 w-full newName' type="text" placeholder='Digite seu novo nome'/>
                        <input className='p-3 w-full newEmail' type="email" placeholder='Digite seu novo email'/>
                        <input className='p-3 w-full newPass' type="password" placeholder='Digite sua nova senha'/> <img className='h-9 w-9 viwerNP' src="/close.svg" alt="Visualizador"/>
                        <input className='p-3 w-full new-pass-confirme' type="password" placeholder='Confirme sua nova senha'/> <img className='h-9 w-9 viwerNPC' src="/close.svg" alt="Visualizador"/>
                    </div>
                    <button className='text-xl font-medium m-auto w-2/4 btnUpdate'>Atualizar</button>
                </div>
                
                
            </div>
        </div>
    )
}

export default Update;