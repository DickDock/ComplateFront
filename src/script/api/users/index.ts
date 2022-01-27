// @ts-ignore
import http from "@/script/utils/http";

export const getUserList = (data:object) =>{
    return http.request({
        url: '/api/users',
        method: 'GET',
    })
}