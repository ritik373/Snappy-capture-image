import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import CropIcon from '@mui/icons-material/Crop';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NoteIcon from '@mui/icons-material/Note';
import SendIcon from '@mui/icons-material/Send';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TimerIcon from '@mui/icons-material/Timer';
// import { getDatabase, ref, set } from 'firebase/database';
// import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import firebase from 'firebase/compat/app';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { db, storage } from './firebase';
// import { firebase, storage } from '../../firebase';
//
import './preview.css';
import { resetCameraImage } from './reduxtoolkit/webcamslice';
const Preview = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const clickImages = useSelector(state => state.clickImage.imagecam);
  //  console.log(clickImages);

  TimeAgo.addLocale(en);

  const closeIcon = () => {
    dispatch(resetCameraImage(null));
    naviagte('/', { replace: true });
  }

  const sendpost = () => {
    console.log("sendpost")
    // const id = uuid();
    // const db=getDatabase(firebaseApp);
    // const storageImage=getStorage(firebaseApp);
    // const myref=storageRef(storageImage,`images/${id}`)
    // await uploadBytes(myref,clickImages);
    // await getDownloadURL(myref);


    // TimeAgo.addLocale(en);
    // const timeAgo = new TimeAgo('en')
    // set(ref(db,`snapchatid${id}`),{
    //   snapImage:clickImages,
    //   snapid:id,
    //   timestamp:timeAgo.format(Date.now() - 60 * 1000, 'default'),
      

    // })
  
  
    const id = uuid();
        const uploadTask = storage.ref(`UserImages/${id}`).putString(clickImages, 'data_url');

        uploadTask.on('state_changed', null , (error) => {
            console.log(error);
        },() => {
            storage.ref('UserImages').child(id).getDownloadURL().then((url) => {
                db.collection('UserImages').add({
                    imageUrl : url,
                    username : "Snappy User",
                    // profilePic : user.profilePic,
                    read : false,
                    timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                });
                naviagte('/chats', { replace: true });
        })
    })
  }
  return (
    <div className='preview'>
      <CloseIcon onClick={closeIcon} className='preview__back' />


      <div className='preview__toolbarRight'>
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />


      </div>

      <img src={clickImages} alt='image not found' />

      <div  onClick={sendpost} className='preview__footer'  >
        <h2>Send Now</h2>
        <SendIcon className='icon'   />


      </div>



    </div>


  )
}

export default Preview;
