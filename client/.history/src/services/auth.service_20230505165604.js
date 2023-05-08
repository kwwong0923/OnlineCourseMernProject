import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService
{
    login(email, password)
    {
        return axios.post(API_URL + "/login")
    }

    logout()
    {

    }

    register(username, email, password, role)
    {
        return axios.post(API_URL + "/register",
        {
            username, email, password, role
        });
    }
}

export default new AuthService();