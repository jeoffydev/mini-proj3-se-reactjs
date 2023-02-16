
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";

import { useCallback } from 'react';

export const HomeComponent = ()=> {
    const navigate = useNavigate();
    const pokemonDatas = useSelector((state)=>state)
    
    const featuredSelector = useCallback(()=>{
        if(pokemonDatas) {
            const ranID = Math.floor(Math.random() * 11);
            return pokemonDatas.data.filter((i)=>i.id === ranID)
        }
    },[pokemonDatas]);


   const imgRes = featuredSelector();
   
    return (
            <div className={'row'}>
                <div className={'col-md-12 text-center'}>
                    <h1>Home of Pokemons</h1>
                    <p><span onClick={()=>navigate(`/pokemons`)} className={'btn btn-primary'}>See Pokemons Here </span></p>
                    <div className='row'>
                        <div className="card text-center col-md-12" >
                            {
                            imgRes.length > 0 && <img src={imgRes[0]?.sprites?.front_default} className="card-img-top m-auto featured"  alt={'Featured'} />
                            }
                        </div>
                    </div>
                </div>
             </div>                          
    )

}

export default HomeComponent;