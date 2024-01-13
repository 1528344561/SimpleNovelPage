import { service } from "@/utils/request.js";
export function getBookList(){
    // return service('/bookList','GET')
    return service('/book/list','GET')

}
export function getBookInfo(bookId){
    // return service(`/bookInfo?bookId=${bookId}`,'GET')
    return service(`/book/info?bookId=${bookId}`,'GET')
}