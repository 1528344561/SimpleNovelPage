import { service } from "../utils/request.js";
export function getBookList(){
    return service('/bookList','GET')
}