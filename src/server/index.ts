import axios from "axios";

const server = axios.create({
    baseURL: 'http://localhost:2000'
})
export const sendMessage = (data: string) => {
    return server.post('/', {name: data}).then(res => res.data).catch(error => error)
}
export const uploadFile = (data: any) => {
    return server.post('/upload', data).then(res => res.data).catch(error => error)
}