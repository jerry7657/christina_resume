import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
// import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  //   const { projects, list } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          {/* <Title title="Projects - 托特 THOTH" />
          {projects.map((project) => {
            const { title, info, info2, tab, info3, repo, img, id } = project; */}

          <Title title="Projects - 托特 THOTH" />
          <Row>
            <Col lg={5} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">托特簡介</h3>
                  <div>
                    <p>
                      {/* {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'} */}
                    </p>
                    <p className="mb-4">
                      本專案與「托特
                      thoth」合作。托特主要是一個尋找學習夥伴的網站，透過技能交換、讀書會、家教結交新朋友、學習新知識，目標群眾是任何想進行知識交流的人。
                    </p>
                    <p className="mb-4 ">
                      因此，專案目的在於協助托特網站拓展其目標（增加托特網站的深度及廣度），即改善現有使用者反映的問題，並提升平台的易用性，增加用戶黏著度。
                    </p>
                    <p className="mb-4" />
                  </div>
                  {/* <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a> */}

                  {/* {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href='#'
                        >
                          Source Code
                        </a>
                      )} */}
                </div>
              </Fade>
            </Col>
            <Col lg={7} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  {/* <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      > */}
                  <Tilt
                    options={{
                      reverse: false,
                      max: 8,
                      perspective: 1000,
                      scale: 1,
                      speed: 300,
                      transition: true,
                      axis: null,
                      reset: true,
                      easing: 'cubic-bezier(.03,.98,.52,.99)',
                    }}
                  >
                    <div data-tilt className="thumbnail rounded">
                      {/* <ProjectImg alt='one' filename='https://images.unsplash.com/photo-1632897681576-30d536433008?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80' /> */}
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1632897681576-30d536433008?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80"
                        alt=""
                      />
                    </div>
                  </Tilt>
                  {/* </a> */}
                </div>
              </Fade>
            </Col>
          </Row>

          <Row>
            <Col lg={5} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">托特簡介</h3>
                  <div>
                    <p>
                      {/* {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'} */}
                    </p>
                    <p className="mb-4">
                      本專案與「托特
                      thoth」合作。托特主要是一個尋找學習夥伴的網站，透過技能交換、讀書會、家教結交新朋友、學習新知識，目標群眾是任何想進行知識交流的人。
                    </p>
                    <p className="mb-4">
                      因此，專案目的在於協助托特網站拓展其目標（增加托特網站的深度及廣度），即改善現有使用者反映的問題，並提升平台的易用性，增加用戶黏著度。
                    </p>
                    <p className="mb-4" />
                  </div>
                  {/* <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a> */}

                  {/* {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href='#'
                        >
                          Source Code
                        </a>
                      )} */}
                </div>
              </Fade>
            </Col>
            <Col lg={7} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="project-wrapper__image">
                  {/* <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      > */}
                  <Tilt
                    options={{
                      reverse: false,
                      max: 8,
                      perspective: 1000,
                      scale: 1,
                      speed: 300,
                      transition: true,
                      axis: null,
                      reset: true,
                      easing: 'cubic-bezier(.03,.98,.52,.99)',
                    }}
                  >
                    <div data-tilt className="thumbnail rounded">
                      {/* <ProjectImg alt='one' filename='https://images.unsplash.com/photo-1632897681576-30d536433008?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80' /> */}
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1632897681576-30d536433008?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80"
                        alt=""
                      />
                    </div>
                  </Tilt>
                  {/* </a> */}
                </div>
              </Fade>
            </Col>
          </Row>

          {/* })} */}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
