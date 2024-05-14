import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import './Chats.css';
import Showchat from './Showchat';



const Chats = () => {
    const [post ,setpost]=useState([]);
    const user=useSelector(state=>state.userDetail.user.username);
    
    const pic=useSelector(state=>state.userDetail.user.profilePic);
    const navigate=useNavigate();
    

    // console.log(user);
    useEffect(()=>{
        // db.collection('UserImages').get().then((snapshot)=>{
        //     console.log(snapshot);
        // })
        db.collection('UserImages').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
          
            setpost(snapshot.docs.map((res)=>({
                id:res.id,
                data:res.data()
            })))
        })
    },[])
    // console.log(post);

    // const backtologin=()=>{
    //     console.log("avater");
    // }
    return (
        <div className='chats'>
            <div className='chats__header'>
                <Avatar src={pic}
                onClick={()=>{
                    // console.log("Avater");
                    auth.signOut();
                    navigate('/login',{replace:true});

                }}
                 className='chats__avatar'  

                 />
                <div className='chats__search'>
                    <SearchIcon />
                </div>
                <div className='chats__input'>
                    <input placeholder='Friends' type='text' />
                </div>

                <ChatBubbleIcon className='chats__chatIcon' style={{color:'white'}} />
                <RadioButtonUncheckedIcon
        className='webcam__capture'
        onClick={()=>{
            navigate('/')
        }}
        fontSize='large'
      />
               
            </div>
            <div className='chats__post'>
               { post.map((res)=> {
         
                  
                return( 
                <Showchat key={res.id}
                id={res.id}
                username={res.data.username}
                timestamp={res.data.timestamp}
                read={res.data.read}
                imageUrl={res.data.imageUrl}

                 /> 
                )
                 }

                 
         

                
                )}
          
            
           
            
             </div>
           
        </div>
    )
}

export default Chats
