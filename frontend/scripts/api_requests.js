const url = "http://127.0.0.1:8000/api";

const login = async (email, password) => {

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    return axios.post(`${url} /auth/login`, formData)
        .then((response) => { response.data });
} 