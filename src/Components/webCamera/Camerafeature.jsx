import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { setCameraImage } from '../../reduxtoolkit/webcamslice';
import './camerafeature.css';

const videoConstraints = {
  width: 250,
  height: 480,
  facingMode: "user"
};

const Camerafeature=()=> {

  // const [url, seturl] = useState(null);
  const webcamRef = useRef(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const imagesrc=useSelector(state=>state.clickImage.imagecam);

  const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(setCameraImage(imageSrc));
      // seturl(imagesrc);
      navigate('/preview',{replace:true});
     
    
    },[webcamRef]);

 
  return (
    <div className='webcam_feature'>

      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        className='webcam__capture'
        onClick={capture}
        fontSize='large'
      />
      {/* <button onClick={() => dispatch(resetCameraImage(null))}>Refresh</button> */}

      {/* {imagesrc && 
      <img src={imagesrc} alt='ScreenShot' />

      } */}

    </div>
  )
}

export default Camerafeature;