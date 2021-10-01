import React, { useContext, useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import '../../style/components/namecard.scss';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero">
      <div className="card__container">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span> !
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>

        <Link to="about" smooth duration={1000}>
          <div className="card">
            <div className="wave -one right" />
            <div className="wave -two right" />
            <div className="wave -three right" />
            <h1 className="card__name">鄭宇芯</h1>
            <h4 className="card__eName">Christina Cheng</h4>
            <h4 className="card__job">UX Researcher</h4>
            <div className="card__detail">
              <hr />
              <p className="card__detail--intro">
                目前就讀資訊工程學系資訊網路與多媒體碩士班，目標是結合設計美學、行銷傳播以及網頁程式。
              </p>
            </div>
          </div>
        </Link>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          {/* <p className="hero-cta">
            <span className="cta-btn cta-btn--hero"> */}
          <Link to="projects" smooth duration={1000}>
            {/* {cta || 'Know more'} */}
            <button type="button" className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </Link>
          {/* </span>
          </p> */}
        </Fade>
      </div>

      {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade> */}
      {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade> */}
    </section>
  );
};

export default Header;
