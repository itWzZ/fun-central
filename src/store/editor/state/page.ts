import {ElementProps, PageProps} from "@/store/editor/state/product";
import {Element} from "@/store/editor/state/element";
import {getId} from "@/utils/getId"

export class Page implements PageProps {
    id: number | string
    pluginType?: string
    title: string
    style?: {
        x: number
        y: number
        width: number
        height: number
    }
    children?: ElementProps[]

    constructor(page: PageProps) {
        this.pluginType = "page"
        this.id = page.id ? page.id : getId()
        this.title = page.title
        this.style = {x: 100, y: 200, width: 400, height: 300}
        this.children =  page.children?.map(el => new Element(el)) ?? []
    }
}