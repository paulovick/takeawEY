import {ACTIONS} from '../constants'

const recieveProducts =(products)=>{
    return {
        type: ACTIONS.ReceiveProducts,
        payload: products
    }
}
const requestProducts =()=>{
    return {
        type: ACTIONS.RequestProducts,
    }
}

export const fetchProducts = () => {
    return(dispatch)=>{
        dispatch(requestProducts())
        fetch('http://www.mocky.io/v2/5da28c4e2f00006c00f41973').then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(json => {
            dispatch(recieveProducts(json))
        })
    }
}