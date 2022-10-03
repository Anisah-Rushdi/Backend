import { useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"

const Login = () => {
    const { token } = useContext(AuthContext)
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const signIn = async () => {
        const response = await fetch('http://ferasjobeir.com/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            }),
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        window.alert(json.messages)
        // if (json.success) 
            logIn(json)
            // console.log(json.token)
            // console.log(json)
            // console.log(token)
            //logIn(json.data) it does not bring the token 
            // console.log(json.data)
         navigate('/')
        
        console.log(json.data)
        
    }
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4">
                <h3 className="mb-4">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input ref={emailRef} type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input ref={passwordRef} type="password" className="form-control" id="password" />
                        </div>
                        <button onClick={()=>navigate('/')} type="button" className="btn btn-primary">Create Account</button>
                        <button onClick={signIn} type="button" className="btn btn-primary">Login</button>
                        {/* <button onClick={()=>{signIn(logIn)?<Register/>:<Homee/>}} type="button" className="btn btn-primary">Login</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
    
}
    
    export default Login