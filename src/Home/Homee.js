import './Home.css'
import Sidebar from '../sidebar/Sidebar';
import Posts from './Posts';
import CreatePost from './CreatePost/CreatePost';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../Context/AuthContext";



const Homee = () => {
  const [profile, setIsProfile] = useState({});
  const { token } = useContext(AuthContext)

  useEffect(() => {
    fetch('http://ferasjobeir.com/api/users/me', {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => res.json()).catch(err => console.log(err)).then((profileData) => setIsProfile(profileData?.data))
  }, [])

  return (
    <>
    <div className='homeContainer'>
    <div className='col-3'>
      <Sidebar/>
    </div>

    <div className="col-6"  >
   <div>
      {profile && (
        <CreatePost profile={profile} />
      )}

      {profile && (
        <Posts />
      )}
    </div>
    </div>
  </div>

  </>

       
    )

}

export default Homee;