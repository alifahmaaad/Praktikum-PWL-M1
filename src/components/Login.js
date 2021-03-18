import React, {useState} from 'react'
import LoginForm from './Loginform'
function Login() {
    const adminUser={
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user,setUser] = useState({name:"",email:""});
    const [error,setError] = useState("");

    const Logout = () => {
        console.log("logout")
    }
    return (
        <div>
            {(user.email != "")?(
                <div className="wellcome">
                    <h2>{user.name}</h2>
            </div>
            ):(
                <LoginForm />
            )}
        </div>
    )
}

export default Login
