import {Page} from '@/store/editor/state/page'

export interface StyleProps {
    x: number,
    y: number,
    width: number,
    height: number,
}

export interface ProductProps {
    id: number | string
    title: string
    ipServer: number | string
    postServer: number | string
    webPort: number | string
    dmxIp: number | string
    children?: PageProps[]
}

export interface PageProps {
    id?: number | string,
    name: string,
    style?: StyleProps
    pluginType?: string
    children?: ElementProps[]
}

export interface ElementProps {
    id?: number | string
    commandType: string
    pluginType?: string
    name: string,
    style: StyleProps
    ipadCode?: string
    ip?: number,
    ms?: number,
    mc?: number,
    code?: string,
}

export class Product implements ProductProps {
    id: number | string
    title: string
    ipServer: number | string
    postServer: number | string
    webPort: number | string
    dmxIp: number | string
    children?: PageProps[]

    constructor(product: ProductProps) {
        this.id = product.id
        this.title = product.title
        this.ipServer = product.ipServer
        this.postServer = product.postServer
        this.webPort = product.webPort
        this.dmxIp = product.dmxIp
        this.children = product.children?.map(page => new Page(page))
    }
}
