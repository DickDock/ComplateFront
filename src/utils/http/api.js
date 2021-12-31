import axios from "./request"
//请求示例
//get
export const mokeGet = (data) => {
    return axios({
        url: "/api",
        method: "get",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}
//post
export const mokePost = (data) => {
    return axios({
        url: "/api",
        method: "post",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}

// https://www.httpbin.org
export const httpBinTest = (data) => {
    return axios({
        url: "/api/get",
        method: "get",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}