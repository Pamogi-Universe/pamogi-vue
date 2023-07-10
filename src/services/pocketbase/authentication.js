import { pocketbaseClient } from "./client";



export async function login({email,password}){
    try {
        const data = await pocketbaseClient.collection('users').authWithPassword(email,password);
        localStorage.setItem('userToken', data.token);
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function register({
    email,
    firstName,
    lastName,
    password
}){
    try {
        await pocketbaseClient.collection('users').create({email,firstName,lastName,password});
    } catch (error) {
        throw new Error(error.message)
    }
}

export function isAuthenticated(){
    return pocketbaseClient.authStore.isValid
}

