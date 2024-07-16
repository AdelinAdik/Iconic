import './SingleProductPage.css'
import { store } from '../../data/store'
import bg from '../../assets/градиент (1).png'
import { useParams } from 'react-router-dom';


export default function SingleProductPage(){
        const { id } = useParams();
        const product = store.find(product => product.id == id);

    return(
     <>

        <section>
           
            <img src={bg} alt="" className='img_bg_single'/>
            <div className="container">
            <div className="prod-img_sing">
                <img src={product.img} alt="" />
            </div>
            <div className="product_inner_sing">
                <div className="product_body_sing">
                    <div className="product__title_sing">{product.name}</div>
                    <div className="bio_sing">
                    <div className="product_bio_sing">
                    <p>{product.text}</p>
                    </div>
                    <div className="productdes">
                        <p>{product.description}</p>
                    </div>
                    </div>
                </div>
            </div>
            <a href="https://t.me/adik_Kn">
            <div className="btn_sing">
                <div className="button_sing">
                    <button>СОТРУДНИЧАТЬ!</button>
                </div>
            </div>
            </a>
            </div>
        </section>
     
     </>
    );
}
