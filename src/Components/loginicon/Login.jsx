import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import { login } from '../../reduxtoolkit/webcamslice';
import './login.css';

const Login = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const signInDetail=useSelector(state=>state.userDetail.username);


    const signIn = async() => {
        await auth.signInWithPopup(provider).then((result) => {
            // console.log(result);
            dispatch(login({
                 username: result.user.displayName,
            profilePic : result.user.photoURL,
             id: result.user.uid,
            }));
            navigate('/',{replace:true});
        }).catch((err) => {
            console.log(err);
            alert(err);
            navigate('/login',{replace:true});
        })
        // console.log(signInDetail);

    
    }
    return (
        <div className="login">

            <div className="login__container">
                <h2>Snappy</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLapujKfVQ8gZsoPZBLVK2sxuCampXG9VtQ&usqp=CAU" alt="error image" />
                <button onClick={signIn}>Sign In</button>

            </div>
        </div>
    )
}

export default Login;
