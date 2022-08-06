export const getId = () => {
    let S1 = (+new Date()).toString().slice(-5)
    let S2 = (Math.random().toString()).slice(-5)
    return S1 + S2
}
