import { configureStore } from "@reduxjs/toolkit";


// important
import accountReducer from "../redux/slices/accountSlice";
import bonusReducer from "../redux/slices/bonusSlice";

// additional
import rewardReducer from "../redux/reducers/reward";


// ab yaha reducers chahyen
const store = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer,

        // additional 
        reward: rewardReducer,

    }
})


export default store;