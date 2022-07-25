export const getId = () => {
    let S1 = (+new Date()).toString().substring(0, 3)
    let S2 = parseInt(Math.random() * 10000000 + "")
    return S1 + S2
}
