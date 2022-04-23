import {
    PostSecureUrl
} from "./interfaces";

const SERVER_URL = 'localhost:8080' //TODO Make env

class HttpRequests {

    async postSecureUrl(secureUrlData: PostSecureUrl): Promise<any> { //TODO post secure URL details to API
        const response = await fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(secureUrlData) 
        });
        return response
    }
}


export default HttpRequests