import {PageProps, ElementProps} from "@/store/editor/state/product";

// export interface ActiveStateProps {
//     pages: PageProps[];
//     elements: ElementProps[];
//     active_page_id: string | number
//     active_element_id: string | number
// }
//
// export class ActiveState {
//     pages: PageProps[]
//     elements: ElementProps[]
//     active_page_id: string | number
//     active_element_id: string | number
//
//     constructor(data: any) {
//         this.pages = data.pages
//         this.elements = data.elements
//         this.active_page_id = data.active_page_id
//         this.active_element_id = data.active_element_id
//     }
//
//     getActivePage() {
//         return this.pages.find((item) => {
//             return item.id === this.active_page_id
//         })
//     }
//
// }