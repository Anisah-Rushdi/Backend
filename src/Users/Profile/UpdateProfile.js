import { useRef, useContext, useState, useEffect } from "react"
import "./UpdateProfile.css"
import { AuthContext } from "../../Context/AuthContext"
import Sidebar from "../../sidebar/Sidebar"
import DeletePost from "./DeletePosts"


const UpdateProfile = () => {
    const {token, userName, userEmailAddress, allPosts, userID, setAllPosts,setUserEmailAddress, setUserName, setUserID } = useContext(AuthContext)
    const userNameRef = useRef()
    const userEmailRef = useRef()
    const userPasswordRef = useRef()
    const userNewPasswordRef = useRef()
    const userPasswordConfirmationRef = useRef()
    const [user, setUser] = useState({})
    const [userPost, setUserPost] = useState([])
    const profile = async () => {
        const response = await fetch('http://ferasjobeir.com/api/users/me', {
            method: 'PUT',
            body: JSON.stringify({
                name : userNameRef.current.value,
                email: userEmailRef.current.value,
                password: userPasswordRef.current.value,
                new_password :userNewPasswordRef.current.value ,
                new_password_confirmation: userPasswordConfirmationRef.current.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        if (json.success) {
          
        }

    }

    const getProfile = async () => {
        const response = await fetch('http://ferasjobeir.com/api/users/me', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const json = await response.json()
        if (json.success) {
            setUser(json.data);
            setUserPost(json.data.posts)
            console.log(json)
        }

    }

    useEffect(() => {
        getProfile()
    }, [])

    return(
        <>
           <div className='homeContainer'>
            <div className='col-3'>
                <Sidebar />
            </div>
            <div className="col-5 col-sm-12 col-md-8 register-class-profile">
                <h4 className="mb-4 my-4">Profile</h4>
                <div className="mb-4 ">
                    <div className="myInfoSection">
                        <p className="mb-4 myInfo">My Information</p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label" >Name</label>
                                <input type="text" ref={userNameRef} className="form-control" defaultValue={userName} id="username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" aria-required>Email Address*</label>
                                <input type="email" ref={userEmailRef} className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" ref={userPasswordRef} className="form-control" defaultValue={userEmailAddress} id="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordConfirmation" className="form-label">New Password</label>
                                <input type="password" ref={userNewPasswordRef} className="form-control" id="passwordConfirmation" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordConfirmation" className="form-label">New Password Confirmation</label>
                                <input type="password" ref={userPasswordConfirmationRef} className="form-control" id="passwordConfirmation" />
                            </div>
                            <div className="buttons-div-r">
                                <button onClick={profile} type="button" className="btn btn-primary">Update Profile</button>
                            </div>
                        </form>
                        <div className="alert alert-primary" id="alert" role="alert">
                                    My Posts
                                </div>
                                <DeletePost posts={userPost}/>
                    </div>
                </div>
                </div>
                </div>
                
        
        </>

         )
}

export default  UpdateProfile 