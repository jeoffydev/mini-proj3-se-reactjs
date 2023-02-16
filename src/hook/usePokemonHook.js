import { useQuery } from "react-query";
import {useEffect, useRef} from "react";
import axios from "axios";
import { getPokemonList } from "../api/api-query";
import { getPokemons } from "../actions/actions";
import {useDispatch, useSelector} from "react-redux";

export const usePokemonHook =()=>{

     // #1 Use react-query() to initially fetch the pokemon list
        // #2 use useEffect to get the List of pokemon with the whole details
        // #3 store into redux
        // #4 store into a cache using useRef()
        // #5 if useRef exist then use the value in it

        
    
        const refApi = useRef({})
        const api = `https://pokeapi.co/api/v2/pokemon`;
        const pokeQuery = useQuery( "pokemonList", () => getPokemonList(api));
        const pokeList = pokeQuery.data;
        const dispatch = useDispatch();
        const pokemonDatas = useSelector((state)=>state);

        useEffect(()=>{

            if(!api || !pokeList?.data) return;
            let subscribeRef= false;

            const getData = async () => {

                try {
    
                    if(refApi.current[api]) {
                        const data = refApi.current[api]
                        dispatch(getPokemons( data ))
                    } else {
                        
                        Promise.all(
                            pokeList?.data?.results.map((p, ind=0)=>{
                                return axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
                                .then((response)=>response.data)
                                .catch((error)=>error)
                            })
                        ).then(pokeNameResults => {
                            refApi.current[api] = pokeNameResults;
                            dispatch(getPokemons(pokeNameResults))
                        }).catch(err => {
                            console.error(err)
                        });

                    }  
    
                } catch(e){
                    console.log(e)
                }
                
            }
            getData();

            return () => subscribeRef = false;

        },[pokeList, api])
    

    return pokemonDatas.data;

}

export default usePokemonHook;