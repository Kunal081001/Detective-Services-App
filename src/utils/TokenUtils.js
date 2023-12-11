export function isAuthenticated(){
    return localStorage.getItem("token")?true:false;
}

export function getToken(){
    return localStorage.getItem("token");
}

export function logout(){
    localStorage.removeItem("token");
}