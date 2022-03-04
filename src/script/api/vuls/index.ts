// @ts-ignore
import http from "@/script/utils/http";

export class VulRequest {
    static getVulByPage(currentPage: number, pageSize: number) {
        return http.request({
            url: 'vuls/pages/' + currentPage + '/' + pageSize,
            method: 'GET',
        })
    }
}