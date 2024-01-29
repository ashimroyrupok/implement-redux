import { createSlice } from "@reduxjs/toolkit";
import { removeAllUsers } from "../../actions/actions";


const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            // console.log("hii", action.payload);
            // state.pop(action.payload)
            state.splice(action.payload,1)
        },
        // removeAllUsers (state,action){
        //     // console.log("sumon");
        //     return  [];
        // }
    },
    // extraReducers(builder){
    //     builder.addCase(UserSlice.actions.removeAllUsers, ()=> {
    //         return [];
    //     });
    // }
    extraReducers(builder){
        builder.addCase(removeAllUsers, () => {
            return []
        })
    }
})


console.log(UserSlice, "helel");

export default UserSlice.reducer;


// export const {addUser,removeUser,removeAllUsers } = UserSlice.actions;

export const { addUser, removeUser } = UserSlice.actions;