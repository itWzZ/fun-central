import {ElementProps, StyleProps} from "@/store/editor/state/product";
import {getId} from "@/utils/getId"


export class Element implements ElementProps {
    id?: number | string;
    title: string
    style: StyleProps
    name: string // 不同类型按钮
    ipadCode: string
    pluginType?: string
    bg?: string
    ip?: string
    ms?: number
    mc?: number
    code?: string

    constructor(element: ElementProps) {
        this.id = getId()
        this.bg = element.bg ?? ''
        this.name = element.name
        this.pluginType = "element"
        this.title = element.title
        this.style = element.style
        this.ipadCode = element.ipadCode ?? ''
        this.ip = element.ip ?? '127.0.0.1'
        this.ms = element.ms ?? 0
        this.mc = element.mc ?? 0
        this.code = element.code
    }
}