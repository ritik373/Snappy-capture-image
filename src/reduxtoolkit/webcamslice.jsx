import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialStates = {
    imagecam: null,
    ImageURL: null,
    user: null,

}
const webcamSlice = createSlice({

    name: "snapchat",
    initialState: initialStates,
    reducers: {
        setCameraImage(state, action) {
            // console.log(action.payload);
            state.imagecam = action.payload;
        },


        resetCameraImage(state, action) {
            // console.log("resetCameraImage");
            state.imagecam = action.payload;
        },

        setImageURL(state, action) {
            state.ImageURL = action.payload;
        },
        login(state, action) {
             
            state.user = action.payload;
            console.log(state.user);
        },
        logout(state) {
            state.user = null;
        },
    },


})

const store = configureStore({
    reducer: {
        clickImage: webcamSlice.reducer,
        userDetail: webcamSlice.reducer,

    },
});
// export const statecam=(state)=>state.snapchat.value;
export const { setCameraImage, resetCameraImage, setImageURL, login, logout } = webcamSlice.actions;
// export const {reset}  = webcamSlice.actions;
// export default webcamSlice.reducer;
export default store;
