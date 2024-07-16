import './Cooperation.css'
import line4 from '../../assets/Line 4.png'
import img3 from '../../assets/IMG3.png'
import Slider from '../../components/Slider/Slider';



export default function Cooperation() {
    return(
        <>
            <section>
                <div className="section__coop">
                <div className="container">
                    <div className="blok1__coop">
                       
                        <div className="minititle">#iconiccooperation</div>
                        <img src={ line4 } alt="line" className='imgcoop'/>
                    
                        <div className="title__coop"><p>МОДЕЛИ АГЕНТСТВА</p>
                        <div className="icn">ICONIC</div></div>
                    
                        <div className="text__coop">Свяжитесь с нами, чтобы сотрудничать с моделями нашего агентства</div>
                        <img src={ img3 } alt="cooperation" className='img__coop'/>
                        <div className="btn__coop">
                            <a href="https://t.me/adik_Kn">
                        <div className="button__coop">
                            <button>СВЯЗАТЬСЯ С НАМИ</button>
                        </div>
                        </a>
                        </div>
                    
                    </div>
                </div>
                </div>
            </section>
                <div className="container">  
            <section>
            <div className="blok2__coop">
                <div className="coop__title">НАШИ ПАРТНЕРЫ</div>
                <div className="slider">
               <Slider/>
                </div>
            </div>
            </section>
                </div> 
        </>
    );
}




