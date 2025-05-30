import UserBar from "./reused/userBar";
import UserContent from "./reused/UserContent";

function UserArea(){
    return (
        <div className="main">
            <div className="rounded-lg content">
                <UserBar/>
                <UserContent/>
            </div>
        </div>
    )
}

export default UserArea;