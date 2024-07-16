import "./Portfolio.css"
import bannerport from '../../assets/bannerport.png'
import line from '../../assets/Line 5.png'
import blok2 from '../../assets/блок текст.png'
import blok3 from '../../assets/image 9.png'
import idea from '../../assets/идеология.png'
import imgbk4 from '../../assets/image 27.png'
import { store } from '../../data/store'
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { Input } from '@mui/material';
import error from '../../data/images/browser.png'
import { NavLink } from 'react-router-dom'


export default function Portfolio() {

    const [searchTerm, setSearchTerm] = useState('');

    
const filteredProducts = store.filter(product => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearchTerm;
});
    return(
        <>
<section>
<div className="bannerport">
<img src={bannerport} alt="bannerimg" className="banner_img_portfolio"/>

            <div className="banner__minititle_portfolio">#iconicportfolio</div>
            <img src={line} alt="line" className="banner_line_portfolio"/>
            <div className="banner_title_portfolio"><p>ЗАЖГИ В СЕБЕ</p> 
            ЗВЕЗДУ УСПЕХА</div>
            <div className="banner_text_portfolio">«Мода — это то, из чего мы сами себя складываем ежедневно»</div>
        </div>

</section>

    <div className="container">
        <section>
<img src={blok2} alt="blok1" className="blok2_port"/>
        </section>
    </div>

<section>
    <div className="bag_blok3_port">
        <div className="container">
            <div className="blok3_port">
                        <div className="border-blok3">
            <div className="blok3_port_text">МЫ ПОМОЖЕМ ТЕБЕ НАЙТИ СЕБЯ В МОДЕЛЬНОМ МИРЕ. НАШИ МОДЕЛИ СОТРУДНИЧАЮТ  С ТАКИМИ МЕЖДУНАРОДНЫМИ БРЕНДАМИ КАК: VOGUE, NIKE, ADIDAS, D&G, BEFREE И Т.Д.</div>
            </div>
            <div className="btn_blok3">
            <div className="blok3_button">
            <NavLink to='/application'>
                <button>СТАТЬ МОДЕЛЬЮ!</button>
                </NavLink>
            </div>
            </div>
            <img src={blok3} alt="blok3" className="blok3_img_port" />
            </div>
        </div>
    </div>
</section>

<section>
    <div className="container">
        <img src={idea} alt="idea" className="ideaa" />
    </div>
</section>

        <section>
            <div className="container">
                <div className="blok4__port">
                    <div className="blok4_alltext_port">
                        <div className="blok4__title__port">Наше агентство предоставляет партнёрам следующие услуги:</div>
                        <div className="blok4__text__port">
                            <p>•съёмка каталогов и лукбуков</p>
                            <p>•участие в показах и фэшн-шоу</p>
                            <p>•большая база визажистов фотографов и стилистов</p>
                            <p>•организация съёмки «под ключ»</p>
                        </div>
                        </div>
                    <img src={imgbk4} alt="blok4" className="blok4_img_port" />
                </div>
            </div>
        </section>
            <section>
               <div className="container">
              
                    <div className="blok5_port">
                        <div className="blok5_alltext_port">
                        <div className="blok5_title_port">
                        НАШИ МОДЕЛИ
                        </div>
                        <div className="blok5_text_port">
                        Мы сотрудничаем с многими известными мировыми моделями России и СНГ.
                        </div>
                        <div className="search">
                        <Input value={searchTerm} onChange={(event)  => setSearchTerm(event.target.value)} />
       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
              </svg>
                    </div>
                        </div>
                      

                    </div>
       
        
                   
                        <div className="blok5__store__port">
                        {
                            filteredProducts && filteredProducts.length > 0 ?
                                filteredProducts.map(product => (
                                   
                                    <article key={product.id} className="product">
                                    <div className="product_bg">
                                              <Link to={`/portfolio/${product.id}`}> <img className='product-img' src={product.img} alt="" /></Link> 
                                                </div>
                                                <div className="product-inner">
                                                    <div className="product-bio">
                                                        <div className="product-name">
                                                            <p>{product.name}</p>
                                                        </div>
                                                        <div className="bio">
                                                            <p>{product.text}</p>
                                                        </div>
                                                    </div>
                                                    </div>
      
                                               
                                    </article> 
                                     
                                )) : (
                                    <div className="error">
                                
                                    <h1 className="error_text">УПС, МЫ НЕ НАШЛИ ДАННУЮ МОДЕЛЬ</h1>
                                    <img src={error} alt="error" className="error_img"/>
                                    </div>
                                )
                            }
                        </div>

                </div> 
            </section>

        </>
    );
}