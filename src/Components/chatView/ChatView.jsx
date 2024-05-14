import React, { useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './chatview.css';

const ChatView = () => {
    const ImageURL=useSelector(state=>state.clickImage.ImageURL);
    const avaterpic=useSelector(state=>state.userDeatil);
    console.log(avaterpic);
    const navigate=useNavigate();
    useEffect(()=>{
        if(!ImageURL){

            setTimeout(()=>{
                exit();

            },[2000]);
           
        }else{
            setTimeout(()=>{
                exit();

            },[10000]);

        }
    },[ImageURL]);


    const exit=()=>{
        navigate('/chats')

    }
  return (
    <div className='chatView'>
    <img src={ImageURL} alt='image not found'/>


   {ImageURL && <div className="chatview__timer">
    <CountdownCircleTimer
    isPlaying
    duration={10}
    size={50}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  </div>}
    </div>
  )
}

export default ChatView;
