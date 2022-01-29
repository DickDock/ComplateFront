// @ts-ignore
import http from "@/script/utils/http";

export class userRequest {
    static getUserList() {
        return http.request({
            url: '/users',
            method: 'GET',
        })
    }

    static updateUser(data: any) {
        return http.request({
            url: '/users',
            method: 'PUT',
            data: data,
        })
    }

    static delUser(data: any) {
        return http.request({
            url: '/users',
            method: 'DELETE',
            data: data,
        })
    }

    static getUserByPage(currentPage: number, pageSize: number) {
        return http.request({
            url: '/users/pages/' + currentPage + '/' + pageSize,
            method: 'GET',
        })
    }
}