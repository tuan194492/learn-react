
const login = (username, password) => {
    window.localStorage.setItem("user", {
        token: 'Tuan hihi',
        username: 'Tuan',
        id: 'Tuan vch'
    });
} 

const logout = () => {
    window.localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return window.localStorage.getItem("user");    
};

const authService = {
    login,
    logout,
    getCurrentUser
}



export default authService;