// @ts-ignore
import http from "@/script/utils/http";

export class GetOshiData {
    static getCpuData() {
        return http.request({
            url: 'oshi/cpu/',
            method: 'GET',
        })
    }

    static getMemoryData() {
        return http.request({
            url: 'oshi/memory/',
            method: 'GET',
        })
    }

    static getDiskData() {
        return http.request({
            url: 'oshi/disk/',
            method: 'GET',
        })
    }

    static getOsData() {
        return http.request({
            url: 'oshi/os/',
            method: 'GET',
        })
    }
}