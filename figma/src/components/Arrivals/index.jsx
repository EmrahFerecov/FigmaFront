import React from 'react'
import './index.scss'
const Arrival = () => {
  return (
    <section className='Arrival'>
        <div className='Arrival_container'>
        <div className='Arrival_title'>
        <div className='Arrival_title_left'>
           <div className='Arrival_featured'>
           <span></span>
            <p>Featured</p>
           </div>
           <div className='Arrival_featured_title'>
                <h2>New Arrival</h2>
            </div>
            </div> 
            <div className='Arrival_title_right'>
            
            </div> 
        </div>
        <div className='Arrival_row'>
            <div className='div1'>
               
                <img src="https://www.ixbt.com/img/n1/news/2020/9/4/ps5-slim-goedkope-playstation_large.jpg" alt="" />
                <div className='div1_che'>
                 <h2>PlayStation 5</h2>
                 <p>Black and White version of the PS5 coming out on sale.</p>
                 <a href="#">Shop Now</a>
                </div>
                
            </div>
            <div className='div2'>
            <div className='div2_che'>
                 <h2>Women’s Collections</h2>
                 <p>Featured woman collections that give you another vibe.</p>
                 <a href="#">Shop Now</a>
                </div>
                <img src="https://i.pinimg.com/736x/98/95/bf/9895bf1c330f38a407361f41bd2342c3.jpg" alt="" />
            </div>
            <div className='div3'>
                <img src="https://i.guim.co.uk/img/media/f183d9937a705b78a19c48d286edd2031e262242/149_311_5091_3054/master/5091.jpg?width=465&dpr=1&s=none" alt="" />
                <div className='div3_che'>
                <h2>Speakers</h2>
                 <p>Amazon wireless speakers</p>
                 <a href="#">Shop Now</a>
                </div>
            </div>
            <div className='div4'>
            <img src="https://cdn.salla.sa/qdgeZ/TXXixmvFDM0kQTw89JjJaqk5ogl70KcvuuGBqN8x.jpg" alt="" />
                <div className='div4_che'>
                <h2>Perfume</h2>
                 <p>GUCCI INTENSE OUD EDP</p>
                 <a href="#">Shop Now</a>
                </div>
            </div>
        </div>
        
        </div>
        
    </section>
  )
}

export default Arrival