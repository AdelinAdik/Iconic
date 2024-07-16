import './Home.css'
import img1 from '../../assets/img1.png'
import video from '../../assets/video.mp4'
import navigate from '../../assets/navigate.png'
import img2 from '../../assets/img2.png'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import line from '../../assets/Line.png'
import { NavLink } from 'react-router-dom'

export default function Home() {


    return(
     
            <><section>
            <div className="banner">
                
                    <video src={ video }  autoPlay loop muted />
                   
                    
                    <div className="banner__text">"Моделирование
                        — это искусство
                        превращать
                        моменты в вечность."</div>
                    <div className="banner__button">
                      <NavLink to='/application'>
                        <button>ПОДАТЬ ЗАЯВКУ</button>
                        </NavLink>
                   
                </div>
            </div>
        </section>
        <div className="container">
                <section>

                    <div className="blok1">
                        <div className="title">ЧТО ТАКОЕ ICONIC?</div>
                        <div className="all1">
                        <img src={img1} alt="img" className='img1' />
                        <div className="text"> — это ведущее агентство, специализирующееся
                            на представлении самых талантливых и перспективных
                            моделей на мировой арене моды.

                        </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="blok2">
                    <div className="title2">ПОЧЕМУ ИМЕННО <p>МЫ?</p></div>
                    <div className="advantages_all">


                    
                    <div className="advantages">
                        <div className="advant">
                        <div className="advant__icon">
                            <img src={ navigate } alt="" />
                        </div>
                        <div className="advan_title">ПРОДВИЖЕНИЕ МОДЕЛЕЙ</div>
                        </div>
                        <div className="advant__text">Мы действительно заинтересованы в продвижении моделей, потому что только в наших интересах предложить заказчикам агентства выбор различных типажей внешности. Мы будем продвигать вас, потому что это нужно нам даже больше, чем вам!</div>
                    </div>
                    <div className="advantages">
                        <div className="advant">
                        <div className="advant__icon">
                            <img src={ navigate } alt="" />
                        </div>
                        <div className="advan_title">РАБОТА ДЛЯ МОДЕЛЕЙ</div>
                        </div>
                        <div className="advant__text">Мы предлагаем участие в оплачиваемых проектах на уровне города и страны, а также находим контракты за рубежом. Сегодня у нас около 3000 партнеров и заказчиков в разных уголках мира, и эта цифра постоянно растет.</div>
                    </div>
                    <div className="advantages">
                        <div className="advant">
                        <div className="advant__icon">
                            <img src={ navigate } alt="" />
                        </div>
                        <div className="advan_title">ПРОСТОТА ОБЩЕНИЯ</div>
                        </div>
                        <div className="advant__text">«С самого раннего возраста практически каждая девочка мечтает о том, что в будущем она определенно станет моделью. То, что казалось невозможным, стало близким и доступным!</div>
                    </div>
                    <div className="advantages">
                        <div className="advant">
                        <div className="advant__icon">
                            <img src={ navigate } alt="" />
                        </div>
                        <div className="advan_title">ПОДДЕРЖКА 24/7</div>
                        </div>
                        <div className="advant__text">Мы всегда на связи с нашими моделями в формате 24/7. Iconic Family — настоящая и дружная семья, и мы заботимся о каждом. Помогаем побороть стеснение и следовать мечте!</div>
                    </div>
                    </div>
                    
                    </div>
                </section>
                <section>
                 
                </section>
            </div>
            <section>
                    <div className="blok3">
                        <div className="container">
                            <div className="all3">
                        
                        <div className="text3">
                           <p> Мы стремимся к тому, чтобы каждая модель, с которой мы работаем, раскрыла свой потенциал и добилась успеха в индустрии моды. Наша команда профессионалов обеспечивает поддержку и руководство моделям на каждом этапе их карьеры, помогая им стать истинными иконами стиля.</p>
                           <p>Iconic — это не просто агентство моделей, это целый мир возможностей для тех, кто стремится к успеху в мире моды и красоты.</p></div>
                        <img src={ img2 } alt="" className='img2' />
                    </div>
                    </div>
                    </div>
                </section>

                <div className="container">
                    <section>
                      <div className="blok4">
                      <div className="accordion_title">Q&A</div>
                      <div className="accor">
                    <AccordionUsage/>
                    </div>
                    </div>
                    </section>
                </div>

                <section>
                  <div className="blok5">
                  <div className="container">
                    <div className="title4"><p>ICONIC</p> АГЕНТСТВО В ЦИФРАХ</div>
                    <div className="text4">Мы гордимся достижениями наших моделей, и их успехи становятся нашей лучшей рекламой!</div>
                  <div className="numerics">
                    <div className="numeric">
                      <div className="number_num">±200</div>
                      <img src={ line } alt="line" className='img3'/>
                      <div className="number__text"><p>100 филиалов и франшиз</p>
агентства Iconic в России и
СНГ</div>
                    </div>
                    <div className="numeric">
                      <div className="number_num">352</div>
                      <img src={ line } alt="line" className='img3'/>
                      <div className="number__text"><p>Международных 
                      контрактов</p>с моделями</div>
                    </div>
                    <div className="numeric">
                      <div className="number_num">3020</div>
                      <img src={ line } alt="line" className='img3'/>
                      <div className="number__text"><p>Выпускников</p>нашего
                      модельного агентства</div>
                    </div>
                  </div>
                  </div>
                  </div>
                </section>

                <div className="container">
                  <section>
                    <div className="blok6">
                      <div className="text5">"Модель — это не просто лицо, а история, рассказываемая без слов."</div>
                    </div>
                  </section>
                </div>
            </>
            
    );
}

export function AccordionUsage() {
    return (
      <div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
             Как я могу стать моделью в вашем агентстве?

          </AccordionSummary>
          <AccordionDetails>
          - Чтобы стать моделью в нашем агентстве, вы можете заполнить онлайн-заявку на нашем сайте или связаться с нами по указанным контактным данным. Мы рассмотрим вашу заявку и свяжемся с вами для дальнейших шагов.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
          Ваше модельное агентство предоставляет услуги только для профессиональных моделей или для всех желающих?
          </AccordionSummary>
          <AccordionDetails>
          - Мы предоставляем услуги как для профессиональных моделей, так и для начинающих. У нас есть различные программы и возможности для всех желающ
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
           Какие возможности для карьерного роста предоставляет ваше агентство?
          </AccordionSummary>
          <AccordionDetails>
          - Мы стремимся помочь каждой модели развить свою карьеру в соответствии с ее целями и амбициями. Мы имеем множество партнерских отношений с известными брендами и дизайнерами, что открывает дополнительные возможности для наших моделе
          </AccordionDetails>
          <AccordionActions>
           
          </AccordionActions>
        </Accordion>
      </div>
    );
  }