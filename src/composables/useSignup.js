import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../firebase/config';

export const useSignup= async (email, password, name )=>{
    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
        if (!user){
            throw new Error ('Невозможно провести регистрацию')
        }
        await updateProfile(user,{
            displayName:name
        })
        return user
    }
    catch(err){
        return new Error(err.message)
    }
}