




export const BadgeComponent = (props)=> {
    
    const { data } = props;
   
    return (
            <p className={'card-text'}>
                {
                    data.map((t, ind)=>{
                        return (
                            <span key={ind} className={'badge bg-info text-dark m-1'}> {t.type.name} </span>
                        )
                    })
                }
                
            </p>                        
    )

}

export default BadgeComponent;