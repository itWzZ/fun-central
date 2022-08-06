import {defineStore} from 'pinia'
import {ElementProps, PageProps, ProductProps} from "@/store/editor/state/product";
export const useProductStore = defineStore({
    id: 'editor',
    state: () => {
        return {
            product: {},
            activeState: {active_page_id: '', active_element_id: ''}
        }
    },
    getters: {
        getActivePage: (state: any) => {
            return state.product.children?.find((page: PageProps) => {
                return page.id === state.activeState.active_page_id
            })
        },
        getActiveElement(state: any) {
            return state.getActivePage.children?.find((el: ElementProps) => {
                return el.id === state.activeState.active_element_id
            })
        }
    },
    actions: {
        initState(payload: ProductProps) {
            this.activeState.active_page_id = payload.children[0].id
            this.product = payload
        },
        actAddPage(payload: PageProps) {
            this.product.children?.push(payload)
        },
        actDeletePage(payload: string) {
            const idx = this.product.children?.findIndex((page: PageProps) => {
                return page.id === payload
            })
            this.product.children?.splice(idx ?? 9999, 1)
            if (payload === this.activeState.active_page_id) {
                this.activeState.active_page_id = this.product.children[0].id
            }
        },
        actSetProduct(payload: any) {
            Object.assign(this.product, payload)
        },
        actSetPage(payload: any) {
            const page = this.product.children?.find((page: PageProps) => {
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
            this.getActiveElement.style[payload.label] = payload.e
        },
        actContextMenuDeleteElement() {
            const idx = this.getActivePage?.children?.findIndex((el: ElementProps) => {
                return el.id === this.getActiveElement.id
            })
            this.getActivePage?.children?.splice(idx, 1)
        },
        actSetCurrentElementProps(payload: any) {
            Object.assign(this.getActiveElement ?? {}, payload)
        },
    }
})
