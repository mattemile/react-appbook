import axios from "axios";

export default class LoginService {

    /*Metodo Login*/
    login(email, password, onSuccess, onError) {
        axios.post("https://reqres.in/api/login", { email: email, password: password }).then(function (result) {
            console.log("Login effettuato con successo ", result.data);
            onSuccess(result.data);
        }, function (error) {
            console.log("Login Errore ", error);
            onError(error.response.data)
        })
    }
}