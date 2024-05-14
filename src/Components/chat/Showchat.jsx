import StopIcon from '@mui/icons-material/Stop';
import { Avatar } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { setImageURL } from '../../reduxtoolkit/webcamslice';
import './Showchat.css';


const Showchat = ({id, username, timestamp, imageUrl, read, }) => {
const dispatch=useDispatch();
    const navigate=useNavigate();
    const name=useSelector(state=>state.userDetail.user.username);
    
    // console.log(pic);
    const open=()=>{
        if(!read){
            // console.log(read);
            dispatch(setImageURL(imageUrl));
            db.collection("UserImages")
            .doc(id)
            .set({read:true },{ merge:true});
        }
        navigate('/chats/view',{replace:true});

    }

    return (
    
        <div  onClick={open} className="chat">
        <Avatar src={imageUrl} />
        <div className="chat__info">
            <h4>{name}</h4>
          <p> Tap to view ~ {new Date(timestamp?.toDate()).toUTCString()}  </p>
          </div>
         {!read && <StopIcon className='chat__readicon'/>} 

    </div>
        
    )
}

export default Showchat;
