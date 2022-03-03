// @ts-ignore
import http from "@/script/utils/http";

export class LogRequest{
    static getLogByPage(currentPage: number, pageSize: number) {
        return http.request({
            url: 'logs/pages/' + currentPage + '/' + pageSize,
            method: 'GET',
        })
    }
}