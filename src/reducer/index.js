import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import jobReducer from "../slices/jobSlice";
import categoryReducer from "../slices/CategorySlice";
import cartReducer from "../slices/cartSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    job:jobReducer,
    category:categoryReducer,
    cart: cartReducer,
});


export default rootReducer;