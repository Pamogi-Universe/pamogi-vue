export function required(value){
    return !!value || 'This field is required.'
}
export function email(value){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'Invalid email.'
}
export function minPasswordLength(value){
    return value.length >= 8 || 'Password must be at least 8 characters.'
}