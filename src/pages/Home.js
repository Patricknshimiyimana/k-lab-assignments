const Home = () => {
    return (
      <div>
      <section class="home section active-link" id="home">
            <div class="home__container container grid">
                <div class="home__content grid">
                    <div class="home__social">
                        <a href="" target="_blank" class="home__social-icon"><i class="uil uil-twitter-alt"></i></a>
                        <a href="" target="_blank" class="home__social-icon"><i class="uil uil-linkedin-alt"></i></a>
                        <a href="" target="_blank" class="home__social-icon"><i class="uil uil-github-alt"></i></a>
                    </div>
                    <div class="home__img">
                        {/* <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                <image class="home__blob-img" x='18' y='44' href="/assets/img/profile1.png"/>
                            </g>
                        </svg> */}
                    </div>
                    <div class="home__data">
                        <h1 class="home__title">Hi, I'm Patrick</h1>
                        <h3 class="home__subtitle">Full Stack Developer</h3>
                        <p class="home__description">
                            Web developer, with exceptional skills and working as a full-stack web developer, 
                             delivering quality work using updated tools
                        </p>
                        <a href="#contact" class="button button--flex">Contact Me<i class="uil uil-message button__icon"></i></a>
                    </div>
                </div>
                <div class="home__scroll">
                    <a href="#about" class="home__scroll-button button--flex"><i class="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span class="home__scroll-name">About me</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
        {/* // <!-- ABOUT --> */}
        <section class="about section" id="about">
            <h2 class="section__title">About Me</h2>
            <span class="section__subtitle">My Introduction</span>
            <div class="about__container container grid">
                <img src="/assets/img/programmer.svg" alt="programmer" class="about__img" />
    
                <div class="about__data">
                    <p class="about__description"> My name is Patrick Nshimiyimana. 
                        I am a full stack developer with exceptional skills in both backend and frontend development
                    </p>
                    <div class="about__info">
                        <div>
                            <span class="about__info-title">02+</span>
                            <span class="about__info-name">Years of Experience</span>
                        </div>
                        <div>
                            <span class="about__info-title">05+</span>
                            <span class="about__info-name">Projects completed</span>
                        </div>
                        <div>
                            <span class="about__info-title">02+</span>
                            <span class="about__info-name">Companies satisfied</span>
                        </div>
                    </div>
                    <div class="about__buttons">
                        <a download="" href="assets/pdf/Christ letter 1 fin.pdf" class="button button--flex">
                            Download CV <i class="uil uil-download-alt button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- SKILLS --> */}
 <section class="skills section container" id="skills">
    <h2 class="section__title">Skills</h2>
    <span class="section__subtitle">My technical level</span>
    <div class="skills__container contaier grid">
        <div>
            {/* <!-- Front-end --> */}
            <div class="skills__content skills__close">
                <div class="skills__header">
                    <i class="uil uil-brackets-curly skills__icon"></i>
                    <div>
                        <h1 class="skills__title">Front-end Development</h1>
                        <span class="skills__subtitle">Libraries | Frameworks</span>
                    </div>
                    <i class="uil uil-angle-down skills__arrow"></i>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">HTML</h3>
                        </div>
                    </div>
                </div>
                
                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">CSS | Sass</h3>
                        </div>
                    </div>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Tailwind CSS</h3>
                        </div>
                    </div>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Javascript</h3>
                        </div>
                    </div>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">React</h3>
                        </div>
                    </div>
                </div>


            </div>

            {/* <!-- backend --> */}
            <div class="skills__content skills__close">
                <div class="skills__header">
                    <i class="uil uil-server-network-alt skills__icon"></i>
                    <div>
                        <h1 class="skills__title">Back-end Development</h1>
                        <span class="skills__subtitle">Backend Libraries and tools</span>
                    </div>
                    <i class="uil uil-angle-down skills__arrow"></i>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Node.js</h3>
                        </div>
                    </div>
                </div>
                
                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Express.js</h3>
                        </div>
                    </div>
                </div>
                
                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">MongoDB</h3>
                        </div>
                    </div>
                </div>

                <div class="skills__list grid">
                    <div class="skills__data">
                        <div class="skills__titles">
                            <h3 class="skills__name">Postgres</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <div>
                {/* <!-- UI/UX Design --> */}
                <div class="skills__content skills__close">
                    <div class="skills__header">
                        <i class="uil uil-swatchbook skills__icon"></i>
                        <div>
                            <h1 class="skills__title">UI/UX Design</h1>
                            <span class="skills__subtitle">Design Tools</span>
                        </div>
                        <i class="uil uil-angle-down skills__arrow"></i>
                    </div>

                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Figma</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Piktochart</h3>
                            </div>
                        </div>
                    </div>


                </div>

                {/* <!-- Tools And Platforms --> */}
                <div class="skills__content skills__close">
                    <div class="skills__header">
                        <i class="uil uil-cell skills__icon"></i>
                        <div>
                            <h1 class="skills__title">Tools And Platforms</h1>
                            <span class="skills__subtitle">Developer Tools</span>
                        </div>
                        <i class="uil uil-angle-down skills__arrow"></i>
                    </div>
                    
                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Git | Github</h3>
                            </div>
                        </div>
                    </div>

                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Heroku</h3>
                            </div>
                        </div>
                    </div>
                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Netlify</h3>
                            </div>
                        </div>
                    </div>

                    <div class="skills__list grid">
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">Firebase</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>

{/* <!-- SERVICES --> */}
<section class="services section" id="services">
    <h2 class="section__title">Services</h2>
    <span class="section__subtitle">What I Do</span>

    <div class="services__container container grid">
        {/* <!-- UI / UX Design --> */}
        <div class="services__content">
            <div>
                <i class="uil uil-web-grid services__icon"></i>
                <h3 class="services__title">UI/UX Design</h3>
                <span class="button button--flex button--small button--link services__button">
                    View More <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">UI/UX Design</h4>
                        <i class="uil uil-times services__modal-close"></i>
                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I develop Modern User Interface Website</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Website Development</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Create UX Element Interactions</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Promote Your Company Brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- Front End Development --> */}
        <div class="services__content">
            <div>
                <i class="uil uil-arrow services__icon"></i>
                <h3 class="services__title">Front End Development</h3>
                <span class="button button--flex button--small button--link services__button">
                    View More <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Front End Development</h4>
                        <i class="uil uil-times services__modal-close"></i>
                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I develop Modern User Interface Website</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Website Development</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Create UX Element Interactions</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Promote Your Company Brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- Back End Development --> */}
        <div class="services__content">
            <div>
                <i class="uil uil-server-connection services__icon"></i>
                <h3 class="services__title">Back End Development</h3>
                <span class="button button--flex button--small button--link services__button">
                    View More <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Back End Development</h4>
                        <i class="uil uil-times services__modal-close"></i>
                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I develop Modern User Interface Website</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Websites Development</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Create UX Element Interactions</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Promote Your Company Brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- Full Stack Development --> */}
        <div class="services__content">
            <div>
                <i class="uil uil-brackets-curly services__icon"></i>
                <h3 class="services__title">Full Stack Development</h3>
                <span class="button button--flex button--small button--link services__button">
                    View More <i class="uil uil-arrow-right button__icon"></i>
                </span>

                <div class="services__modal">
                    <div class="services__modal-content">
                        <h4 class="services__modal-title">Full Stack Development</h4>
                        <i class="uil uil-times services__modal-close"></i>
                        <ul class="services__modal-services grid">
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I develop Modern User Interface Websites</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>Websites Development</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Create UX Element Interactions</p>
                            </li>
                            <li class="services__modal-service">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p>I Promote Your Company Brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

{/* <!-- CONTACT ME --> */}
<section class="contact section" id="contact">
    <h2 class="section__title">Contact Me</h2>
    <span class="section__subtitle">Get In Touch</span>

    <div class="contact__container container grid">
        <div>
            {/* <!-- Telephone --> */}
            <div class="contact__information">
                <i class="uil uil-phone-alt contact__icon"></i>

                <div>
                    <h3 class="contact__title">Call Me</h3>
                    <span class="contact__subtitle"><a href="tel:+250782517195">+250782517195</a></span>
                </div>
            </div>
            {/* <!-- Email --> */}
            <div class="contact__information">
                <i class="uil uil-envelope contact__icon"></i>

                <div>
                    <h3 class="contact__title">Email</h3>
                    <span class="contact__subtitle"><a href="mailto:mydrivefilestorage@gmail.com">mydrivefilestorage@gmail.com</a></span>
                </div>
            </div>
            {/* <!-- Location --> */}
            <div class="contact__information">
                <i class="uil uil-map-marker contact__icon"></i>

                <div>
                    <h3 class="contact__title">Location</h3>
                    <span class="contact__subtitle"> Kigali - Rwanda</span>
                </div>
            </div>
        </div>
        {/* <!-- Contact Me Forms --> */}

        {/* <form id="form" class="contact__form grid">

            <div class="contact__content">
              <label for="name" class="contact__label">Name:</label>
              <input type="text" name="username" id="username" class="contact__input"/>
              <div class="error"></div>
            </div>
        
            <div class="contact__content">
              <label for="email" class="contact__label">Email:</label>
              <input type="email" name="email" id="email" class="contact__input"/>
              <div class="error"></div>
            </div>
        
            <div class="contact__content">
              <label for="message" class="contact__label">Message:</label>
              <textarea type="text" name="message" cols="0" rows="7" id="message" class="contact__input" > </textarea>
              <div class="error"></div>
            </div>
        
            <div>
                <button type="submit" class="button button--flex contact--btn" id="submitBtn">Send Message<i class="uil uil-message button__icon"></i> </button>
            </div>
          </form> */}

    </div>
</section>

<footer class="footer">
    <div class="footer__bg">
        <div class="footer__container container grid">
            <div>
                <h1 class="footer__title">Patrick nsh.</h1>
                <span class="footer__subtitle">Full Stack Developer</span>
            </div>
            <div>
                <ul class="footer__links grid">
                    <li><a href="#services" class="footer__link">Services</a></li>
                    <li><a href="#portfolio" class="footer__link">Projects</a></li>
                    <li><a href="#contact" class="footer__link">Contact Me</a></li>
                </ul>
            </div>
            <div class="footer__socials grid">
                <a href="#" target="_blank" class="footer__social"><i class="uil uil-instagram"></i></a>
                <a href="#" target="_blank" class="footer__social"><i class="uil uil-linkedin-alt"></i></a>
                <a href="#" target="_blank" class="footer__social"><i class="uil uil-github-alt"></i></a>
            </div>
        </div>
        <div class="footer__copyright container grid">
            <p class="footer__copy">Made with full focus by Patrick &#169; 2022 with reference to Bedimcode Youtube</p>
        </div>
    </div>
</footer>
        </div>
    );
  };
  
  export default Home;