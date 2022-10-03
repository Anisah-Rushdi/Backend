import { useRef } from "react"
import { useNavigate } from "react-router-dom";

const Register=()=>{

    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const usernameRef = useRef()
    const signUp = async () => {
        const response = await fetch('http://ferasjobeir.com/api/users/register', {
            method: 'post',
            body: JSON.stringify({
                name: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                password_confirmation: passwordConfirmationRef.current.value,
                
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
       const json = await response.json()
       window.alert(json.messages)
        if (json.success) {
            // go to sign in
            navigate('/login')
        }
    }
return(

    <div className="container my-4">
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4">
                    <h3 className="mb-4">Create New Account</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input ref={usernameRef} type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input ref={emailRef} type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input ref={passwordRef} type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordConfirmation" className="form-label">Password Confirmation</label>
                            <input ref={passwordConfirmationRef} type="password" className="form-control" id="passwordConfirmation" />
                        </div>
                        <button onClick={()=>navigate('/login')} type="button" className="btn btn-primary">Go To Login</button>
                        <button onClick={signUp} type="button" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
);
}


export default Register