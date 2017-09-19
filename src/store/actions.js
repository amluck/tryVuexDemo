export const incr = ({commit}) =>{
    commit('increment')
}

export const decr = ({commit}) =>{
    commit('decrement')
}

export const incIfOdd = ({commit,state}) => {
    if((state.count+1)%2===0) commit('increment')
}

export const incAsyn = ({commit}) => {
    setTimeout(() => {
        commit('increment')
    }, 1000);
}