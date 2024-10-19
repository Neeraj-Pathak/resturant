import React from 'react'

const Title = ()=>{
    <div className='hero-title'>MENUS</div>
}

const MenuCard = ({menuData}) => {
  return (
    <>
        
        <section className="main-card--container">
            {menuData.map((curElem)=>{

                const{id, name, category, image, description, type} = curElem;
            return (
            <>   
            <div className="card-container" key={id}>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{id}</span>
                        <span className='card-author subtle'>{category}</span>
                        <h2 className='card-title'>{name}</h2>
                        <span  className='card-description'>
                        {description}</span>
                        <div className='card-read'>{type}</div>
                        <img src={image} alt="images" className='card-media'/>
                        <span className='card-tag'>Order Now</span>
                    </div>
                </div>
            </div>
            </>
            );
        })} 
        </section>
    </>
  )
}
export default MenuCard
