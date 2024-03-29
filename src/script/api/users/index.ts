// @ts-ignore
import http from "@/script/utils/http";

export class userRequest {
    static removeBatchById(idList : any) {
        return http.request({
            url: 'users/batchRemove',
            method: 'DELETE',
            data: idList
        })
    }

    static getUserList() {
        return http.request({
            url: 'users',
            method: 'GET',
        })
    }

    static updateUser(data: any) {
        return http.request({
            url: 'users',
            method: 'PUT',
            data: data,
        })
    }

    static delUser(data: any) {
        return http.request({
            url: 'users',
            method: 'DELETE',
            data: data,
        })
    }

    static getUserByPage(currentPage: number, pageSize: number) {
        return http.request({
            url: 'users/pages/' + currentPage + '/' + pageSize,
            method: 'GET',
        })
    }

    static getCaptcha() {
        return http.request({
            url: 'login/getCode',
            method: 'GET'
        })
    }

    static login(data: any) {
        return http.request({
            url: 'login',
            method: 'POST',
            data: data,
        })
    }
}