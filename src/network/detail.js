import { request } from './request.js'
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}




export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
        this.backgroundColor = itemInfo.discountBgColor
        this.realPrice = itemInfo.lowNowPrice

    }
}
export class shop {
    constructor(shopInfo) {
        this.score = shopInfo.score;
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.cFans = shopInfo.cFans;
        this.goodsCount = shopInfo.cGoods;
        this.sells = shopInfo.cSells;
    }
}
export class GoodsParam {
    constructor(info, rule) {
        //注：images可能没有值（某些商品有值，某些没有）
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}