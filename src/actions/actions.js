import { RENDER_ITEM} from "../reducers/reducers";


const getPokemons = (data) => {
    return {
        type: RENDER_ITEM,
        payload: data
    }
}

export { getPokemons }