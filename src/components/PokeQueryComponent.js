
import PokemonListComponent from "./PokemonListComponent";
import {useSelector} from "react-redux";

const PokeQueryComponent = () => {

    const pokemonDatas = useSelector((state)=>state)
  
        return (
            <>
                <PokemonListComponent data={pokemonDatas.data} />
            </>
        );

}

export default PokeQueryComponent;