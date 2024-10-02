import React from 'react';
import "./Hero.css"


const Hero = () => {
  return(
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Henzo Boschiero Puchetti Desenvolvedor</h2>
        <p>Tenho 19 anos, atualmente cursando o 2° semestre do curso de análise e desenvolvimento de sistemas no período noturno na faculdade da Fiap.</p>
      </div>

      <div className="hero-img">
        <div>
          <img src="./assets/images/Henzo.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/ReactLogo.svg" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/HtmlLogo.svg" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/CssLogo.svg" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/JsLogo.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;