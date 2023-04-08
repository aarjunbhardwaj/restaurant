import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
    <section className='main-card--cointainer'>
       {menuData.map((curElem)=>{
        const {id,name,category,image,description} = curElem;
       return(
        <>

                                <div className='card-container' key={id}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>
                                            {id}</span>
                                            <span className='card-author subtle'>{category}</span>
                                            <h2 className='card-title'> {name}</h2>
                                            <span className='card-description subtle'>
                                               {description}
                                                Maggi has a comforting and familiar taste that is beloved by many people around the world. It's the perfect snack for a quick and satisfying meal, and its unique flavor is sure to satisfy your cravings.
                                            </span>
                                            <div className='card-read'>Read</div>
                                        </div>
                                        { <img src={image}
                                         alt="images" className='card-media'/>}
                                        <span className='card-tag subtle'>Order Now</span>
                                    </div>
                                </div>
                                
                            </>
       ) 
       })}
       </section>
        </>
    )
}

export default MenuCard