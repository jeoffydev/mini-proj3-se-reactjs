
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import { useCallback  } from 'react';
import { CarouselComponent } from './CarouselComponent';
import BadgeComponent from './BadgeComponent';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const FormStyle = styled.div`
    border: 1px solid #e5e5e5;
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom:2rem;
    display: flex;
    flex-direction:   column;
    input { 
        width: 100%;
        margin:0.5rem 0;
        padding: 1rem;
    }
`;

const PokeNameComponent = () => {

    const navigate = useNavigate();
    const params = useParams();
    const pokemonDatas = useSelector((state)=>state)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data); // Save to DB

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
                <FormStyle>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <input defaultValue={params.name} {...register("pokeName", { required: true })} /> 
                        {/* errors will return when field validation fails  */}
                        {errors.pokeName && <span>This field is required</span>}
                        
                        <input type="submit" />
                    </form>
                </FormStyle> 

                <p><span onClick={()=>navigate('/pokemons')} className={'btn btn-primary'}>Go Back</span></p>
            </div>
            <div className={'col-md-3'}></div>
        </div>
    );
}

export default PokeNameComponent;