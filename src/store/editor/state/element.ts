import {ElementProps, StyleProps} from "@/store/editor/state/product";
import {getId} from "@/utils/getId"

export class Element implements ElementProps {
    id?: number | string;
    name: string
    style: StyleProps
    commandType: string // 不同类型按钮
    ipadCode: string
    pluginType?: string
    ip?: number
    ms?: number
    mc?: number
    code?: string

    constructor(element: ElementProps) {
        this.id = getId()
        this.commandType = element.commandType
        this.pluginType = "element"
        this.name = element.name
        this.style = element.style
        this.ipadCode = element.ipadCode ?? '1'
        this.ip = element.ip ?? 1
        this.ms = element.ms ?? 312
        this.mc = element.mc ?? 21
        this.code = element.code ?? "23"
    }
}