import './Footer.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

export function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="foot">
                    <div className="blok11">
                    <NavLink to='/'>
                    <img src={ logo } alt="iconic" className="logo_footer" />
                    </NavLink>
                    <div className="number__foot">
                   
            Горячая линия по России:89655995710 
             Пн-Пт 9:00-18:00 Мск  
             Сб-Вс выходные</div>
             <div className="email">adelinaknyazkina2006@gmail.com</div>
             </div>
                    <nav>
                    <ul>
                    <div className="navlink_footer">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/portfolio">Портфолио</NavLink>
                    <NavLink to="/application">Подать заявку</NavLink>
                    <NavLink to="/cooperation">Сотрудничество</NavLink>
                    </div>
                </ul>
                    </nav>
                    <div className="textfooter">
                       
                    <div className="title__text">© 2015—2024 Iconic — все права защищены</div>
                    <div className="minitext">
                        <p>ООО ''Айконик'' РФ ИНН 7845396320 
                        ОГРН 4751330965486</p>

                        <p>ИП «Князькина Аделина Дмитриевна» 
                        ИНН 856473975135 ОГРНИП 654829651457835</p>

                        <p>Документация Iconic</p>
                        </div>
</div>
                </div>
            </div>
        </footer>
    );
}