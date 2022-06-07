import axios from "axios";
import {HASH, PRIVATE_API_KEY, TS} from "./API";
import {url} from "./API";

export const getApiResource = async (params) => {

    return await axios.get (url, {
                    params: {
                        ts: TS,
                        apikey: PRIVATE_API_KEY,
                        hash: HASH,
                        ...params
                    }
    })
        .then(function (response){
            return response.data.data
        })
        .catch(function (error) {
            if (error.response) {
                console.error('Could not fetch.', error.message)
                return false /*404*/
            } else if (error.request) {
                console.log(error.request);
                return false
            } else {
                console.log('Error', error.message);
                return false
            }
        });
}