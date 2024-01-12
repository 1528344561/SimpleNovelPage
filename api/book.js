import { service } from "@/utils/request.js";
export function getBookList(){
    return service('/bookList','GET')
}
export function getBookInfo(bookId){
    return service(`/bookInfo?bookId=${bookId}`,'GET')
}