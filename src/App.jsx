import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chats from "./Components/chat/Chats";
import ShowChat from "./Components/chat/Showchat";
import ChatView from "./Components/chatView/ChatView";
import Login from "./Components/loginicon/Login";
import CameraFeature from "./Components/webCamera/Camerafeature";
import Preview from "./Preview";
function App() {
  const dispatch = useDispatch();
  const imagesrc = useSelector(state => state.clickImage.imagecam);
  // const username=useSelector(state=>state.userDetail.user.username);
  // console.log(username);
  

 
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch(login({
  //         username: authUser.username,
  //         profilePic : authUser.photoURL,
  //         id : authUser.uid,
  //       }))
  //     }
  //     else {
  //       dispatch(logout())
  //     }
  //   })
  // },[])

    
    // console.log(username);

  return (
    <div className="app">
      <div className="child">
        <Routes>



          <Route path="/login" element={<Login />} />

          <Route path="/" element={<CameraFeature />} />

          <Route path="/preview" element={imagesrc && <Preview /> || !imagesrc && <h1 style={{ fontSize: '20px' }}>404 PAGE NOT FOUND</h1> || signIn && <Preview />} />

          <Route path="/chats" element={<Chats />} />
          <Route path="/chatshow" element={<ShowChat />} />

          <Route path="/chats/view" element={<ChatView />} />




        </Routes>

      </div>
    </div>

  )
}


export default App;
