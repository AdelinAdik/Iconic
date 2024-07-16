import './Header.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
 

export function Header() {
    return (
        
        <header className="header">
            <div className="container">
                <div className="head">
                    <NavLink to='/'>
            <img src={ logo } alt="Iconic" className="logo"  />
            </NavLink>
            <nav>
                <ul>
                    <div className="navlink">
                     <NavLink to="/">Главная</NavLink>
                    <NavLink to="/portfolio">Портфолио</NavLink>
                    <NavLink to="/application">Подать заявку</NavLink>
                    <NavLink to="/cooperation">Сотрудничество</NavLink>
                    </div>
                </ul>
            </nav>

            <div className="number__head">
            Россия:89655995710 
             Пн-Пт 9:00-18:00 Мск  
             Сб-Вс выходные</div>
            </div>
            </div>
        </header>
    );
}