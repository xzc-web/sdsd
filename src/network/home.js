import { request } from "./request";

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
        // url: '/test/getBanners'
    })
}
export function getHomeGoods(type, page) {
    return request({
        url: 'home/data',
        params: {
            type, page
        }
    })
}
// http://152.136.185.210:7878/api/m5/home/multidata