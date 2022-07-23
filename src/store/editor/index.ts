import {defineStore} from 'pinia'
import {ElementProps, PageProps, ProductProps} from "@/store/editor/state/product";
import {Page} from "@/store/editor/state/page";

export const useProductStore = defineStore({
    id: 'editor',
    state: () => {
        return {
            product: {
                id: 1,
                title: '中控系统编辑页面',
                ipServer: '127.0.0.1',
                webPort: '5002',
                postServer: 5000,
                dmxIp: 5001,
                children: [new Page({title: '新页面', id: '1'})]
            } as ProductProps,
            activeState: {
                active_page_id: '1',
                active_element_id: '0'
            }
        }
    },
    getters: {
        getActivePage: (state: any) => {
            return state.product.children?.find((page: PageProps) => {
                return page.id === state.activeState.active_page_id
            })
        },
        getActiveElement(state) {
            return (state as any).getActivePage.children.find((el: any) => {
                return el.id === state.activeState.active_element_id
            })
        }
    },
    actions: {
        actAddPage(payload: PageProps) {
            this.product.children?.push(payload)
        },
        actDeletePage(payload: string) {
            const idx = this.product.children?.findIndex((page: PageProps) => {
                return page.id === payload
            })
            this.product.children?.splice(idx ?? 9999, 1)
            if (payload === this.activeState.active_page_id) {
                this.activeState.active_page_id = (this.product.children as any)[0].id
            }
        },
        actSetProduct(payload: any) {
            Object.assign(this.product, payload)
        },
        actSetPage(payload: any) {
            const page: any = this.product.children?.find((page: PageProps) => {
                return page.id === payload.id
            })
            page.title = payload.title
        },
        actChangeActivePageId(payload: string) {
            this.activeState.active_page_id = payload
        },
        actAddElement(payload: ElementProps) {
            this.getActivePage?.children?.push(payload)
        },
        actSetCurrentElement(payload: string) {
            this.activeState.active_element_id = payload
        },
        actSetElementStyle(payload: any) {
            Object.assign(this.getActiveElement.style, payload)
        },
        actSetCurrentElementStyle(payload: any) {
           this.getActiveElement.style[payload.label]=payload.e
        },
        actContextMenuDeleteElement() {
            const idx: any = this.getActivePage?.children?.findIndex((el: ElementProps) => {
                return el.id === this.getActiveElement.id
            })
            this.getActivePage?.children?.splice(idx, 1)
        },
        actSetCurrentElementProps(payload: any) {
            Object.assign(this.getActiveElement, payload)
        },
    }
})
