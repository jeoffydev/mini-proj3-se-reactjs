
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import { useCallback  } from 'react';
import { CarouselComponent } from './CarouselComponent';
import BadgeComponent from './BadgeComponent';

const PokeNameComponent = () => {

    const navigate = useNavigate();
    const params = useParams();
    const pokemonDatas = useSelector((state)=>state)

    const getPokemonSelector = useCallback(()=>{
            if(pokemonDatas && params) {
                return pokemonDatas.data.find((n)=>n.name === params.name)
            }
    },[pokemonDatas, params]);


    const eachDetails = getPokemonSelector();
    const propertyImages = eachDetails && Object.keys(eachDetails?.sprites).map((key, ind) => typeof eachDetails.sprites[key] === 'string' && eachDetails.sprites[key]);
   
    return (
        <div className="row m-4">
            <div className={'col-md-3'}></div>
            <div className="col-md-6 text-center">
                
                {
                    propertyImages && <CarouselComponent propertyImages={propertyImages} /> 
                }

                
                <h1>{params.name}</h1>
                {
                    eachDetails?.types &&  <BadgeComponent data={eachDetails.types} />
                }
                
                <p>Height: {eachDetails?.height}</p>
                <p>Weight: {eachDetails?.weight}</p>

                <p><span onClick={()=>navigate('/pokemons')} className={'btn btn-primary'}>Go Back</span></p>
            </div>
            <div className={'col-md-3'}></div>
        </div>
    );
}

export default PokeNameComponent;