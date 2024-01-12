import { service } from "../utils/request.js";
export function getTopImg(){
    return service('/topImg','GET')
}