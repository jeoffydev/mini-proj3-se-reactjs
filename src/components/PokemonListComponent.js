
import { useNavigate } from 'react-router-dom';
import { BadgeComponent } from './BadgeComponent';

export const PokemonListComponent = (props)=> {

    const { data } = props;
    const navigate = useNavigate();

    const handleView = (name) => {
        navigate(`/pokemon/${name}`);
    }

    return (
            <div className={'row'}>
                {
                    data?.map((p, ind)=>{

                        return (
                                <div className={'col-md-4 cursor'} key={ind} onClick={()=>handleView(p.name)} >
                                    <div className={"card"} >
                                        <img src={p.sprites.front_default} className={'card-img-top'} alt={p.name} />
                                        <div className={'card-body'}>
                                            <h5 className={'card-title'}>{p.name}</h5>
                                            <BadgeComponent data={p.types} />
                                            <span onClick={()=>handleView(p.name)} className={'btn btn-primary'}>See {p.name} details </span>
                                        </div>
                                    </div>
                                </div> 
                        )
                    })    
                    
                }
        </div>
    )

}

export default PokemonListComponent;