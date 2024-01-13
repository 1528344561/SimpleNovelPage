import { service } from "@/utils/request.js";

export function getBookTag(bookId){
    return service(`/tag/list?bookId=${bookId}`,'GET')
}
export function getBookByTagList(tagId){
    return service(`/tag/list?tagId=${tagId}`,'GET')
}
export function getTagList(){
    return service(`/tag/list`,'GET')
}