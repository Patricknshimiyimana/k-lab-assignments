const Header = () => {
    return (
        <div>
            <header class="header" id="header">
        <nav class="container nav">
            <a href="#" class="nav__logo">Patrick nsh.</a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list grid">
                    <li class="nav__item">
                        <a href="#home" class="nav__link">
                            <i class="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link">
                            <i class="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#skills" class="nav__link">
                            <i class="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#services" class="nav__link">
                            <i class="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#portfolio" class="nav__link">
                            <i class="uil uil-browser nav__icon"></i> Projects
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" target="_blank" class="nav__link"> 
                            <i class="uil uil-book-open nav__icon"></i> Blog
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#contact" class="nav__link"> 
                            <i class="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                   
                    <li class="nav__item">
                        <a href="/todo" class="nav__link"> 
                            <i class="uil uil-message nav__icon"></i> TODO App
                        </a>
                    </li>

                </ul>
                <i class="uil uil-times nav__close" id="nav-close"></i>
            </div>
            <div class="nav__btns">
    
                <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"></i> 
                </div>
            </div>
        </nav>
    </header>
        </div>
    )
}

export default Header;