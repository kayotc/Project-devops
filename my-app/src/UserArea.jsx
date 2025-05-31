import UserBar from "./reused/UserBar.jsx";
import UserContent from "./reused/UserContent.jsx";
import { useLocation } from "react-router-dom";

function UserArea(){

    const location = useLocation();
    const userName = location.state?.userName;
    const userEmail = location.state?.userEmail;

    return (
        <div className="main">
            <div className="rounded-lg content">
                <UserBar userName = {userName} userEmail = {userEmail}/>
                <UserContent userName = {userName} userEmail = {userEmail}/>
            </div>
        </div>
    )
}

export default UserArea;