import { service } from "../utils/request.js";
export function getchapter(bookId,chapterNum){
    // return service(`/chapter?bookId=${bookId}&chapterNum=${chapterNum}`,'GET')
    return service(`/chapter/query?bookId=${bookId}&chapterNum=${chapterNum}`,'GET')

}
export function getUserReadingchapter(userId,bookId){
    return service(`/userChapter?bookId=${bookId}&userId=${userId}`,'GET')

}
export function getchapterListByBook(bookId){
    // return service(`/chapterTitles?bookId=${bookId}`,'GET')
    return service(`/chapter/listTitle?bookId=${bookId}`,'GET')

}