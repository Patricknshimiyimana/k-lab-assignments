const About = () => {
    return (
        // <!-- ABOUT -->
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
    )
}

export default About;