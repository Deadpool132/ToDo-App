import axios from "axios"

class HelloWorldService {
    exeuteHelloWorldService(){
       return axios.get('http://localhost:8080/hello-world-bean');
    }
}

export default new HelloWorldService()