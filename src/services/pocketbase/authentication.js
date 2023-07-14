import { pocketbaseClient } from "./client";

export async function login({email,password}){
    try {
        const data = await pocketbaseClient.collection('users').authWithPassword(email,password);
        localStorage.setItem('userToken', data.token);
    } catch (error) {
        throw error;
    }
}

export async function register({
    email,
    firstName,
    lastName,
    password,
    passwordConfirm,
    terms
}){
    try {
        await pocketbaseClient.collection('users').create({email,firstName,lastName,password,passwordConfirm,terms});
    } catch (error) {
        throw error
    }
}

export function isAuthenticated(){
    return pocketbaseClient.authStore.isValid
}

