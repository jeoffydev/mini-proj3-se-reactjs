import axios from "axios";

export async function getPokemonList(api) { 
    const response = await axios.get(api)  
    return  response;
}
