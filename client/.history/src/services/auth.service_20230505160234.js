import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService
{
    login()
    {

    }

    logout()
    {

    }

    register(username, email, password, role)
    {
        axios.post(API_URL)
    }
}

export default new AuthService();