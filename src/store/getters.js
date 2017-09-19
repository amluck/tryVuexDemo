export const history = (state) => {
    return state.history
}
/**
 * return recently 5 op
 * @param {*} state 
 */
export const recentHistroy = (state) =>{
    let limit = 5
    let end = state.history.length
    let start = end-limit > 0 ? end-limit:0
    return state.history.slice(start,end).toString()
}