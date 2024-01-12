import { service } from "../utils/request.js";
export function getCapter(bookId,capterNum){
    return service(`/capter?bookId=${bookId}&capterNum=${capterNum}`,'GET')
}
export function getUserReadingCapter(userId,bookId){
    return service(`/userCapter?bookId=${bookId}&userId=${userId}`,'GET')

}