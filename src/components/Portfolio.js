import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import ModalVideo from "react-modal-video";
import { Project } from "./Project";
import { Skill } from "./Skill";

const Portfolio = () => {
  // const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <section className="portfolio-section" id="Portfolio">
        <div className="container">
          <div className="portfolio-wrap">
            <div className="portfolio-heading">
              <span> Portfolio </span>
              <h3> Project Gallery </h3>
            </div>
            <div className="portfolio-filter">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>MERN</Tab>
                  <Tab>JS</Tab>
                  <Tab>React</Tab>
                </TabList>

                <div className="portfolio-list">
                  <TabPanel>
                    <ul className="portfolio-gallery">
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/miracle.png"
                            alt="Web Digital Agency"
                          />
                        }
                        name="Miracle Solutions - Web Digital Agency"
                        codeLink="https://github.com/Lucky0108/Miracle"
                        siteLink="https://miracle-solutions.herokuapp.com/"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/mark.png"
                            alt="Advertising Company"
                          />
                        }
                        name="MarkAdGrafix - Advertising Company"
                        codeLink="https://github.com/Lucky0108/Mark-Ad-Graphix"
                        siteLink="https://mark-ad-grafix.herokuapp.com/"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/luckart.png"
                            alt="Ecommerce frontend"
                          />
                        }
                        name="Luckart - Ecomm FrontEnd"
                        codeLink="https://github.com/Lucky0108/React-Shop"
                        siteLink="https://ecommclone.netlify.app/"
                      />
                      <Project
                        image={
                          <StaticImage src="../images/project/ToDo.png" alt="Todo app" />
                        }
                        name="ToDo List"
                        codeLink="https://github.com/Lucky0108/ToDo"
                        siteLink="https://getscheduled.herokuapp.com/"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/corona-counter.png"
                            alt="Corona Counter"
                          />
                        }
                        name="Corona Case Counter"
                        codeLink="https://github.com/Lucky0108/Corona-Counter"
                        siteLink="https://covid-19counter.herokuapp.com/#"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/Xpenser.png"
                            alt="Expense Calculator"
                          />
                        }
                        name="Xpenser - Track Expenses"
                        codeLink="https://github.com/Lucky0108/Expense-Calculator"
                        siteLink="https://xpenser.netlify.app/"
                      />
                      <Project
                        image={
                          <StaticImage src="../images/project/HaveJokes.png" alt="Jokes Api" />
                        }
                        name="HaveJokes - Random Jokes Generator"
                        codeLink="https://github.com/Lucky0108/All-Time-Jokes"
                        siteLink="https://havejokes.netlify.app/"
                      />
                      <Project
                        image={
                          <StaticImage src="../images/project/lyrical.png" alt="Lyrical" />
                        }
                        name="Lyrical - Lyrics Generator"
                        codeLink="https://github.com/Lucky0108/Lyrical"
                        siteLink="https://getlyrical.netlify.app/"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/plaquezone.png"
                            alt="ThePlaqueZone"
                          />
                        }
                        name="PlaqueZone - Wordpress Shop"
                        codeLink="https://theplaquezone.com/"
                        siteLink="https://theplaquezone.com/"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/responsive-react.png"
                            alt="Demo React Site"
                          />
                        }
                        name="Responsive Demo React Site"
                        codeLink="https://github.com/Lucky0108/Responsive-React-Site"
                        siteLink="https://responsive-react-app.netlify.app/"
                      />
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul className="portfolio-gallery">
                    <Project
                        image={
                          <StaticImage
                            src="../images/project/miracle.png"
                            alt="Web Digital Agency"
                          />
                        }
                        name="Miracle Solutions - Web Digital Agency"
                        codeLink="https://github.com/Lucky0108/Miracle"
                        siteLink="https://miracle-solutions.herokuapp.com/"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/mark.png"
                            alt="Advertising Company"
                          />
                        }
                        name="MarkAdGrafix - Advertising Company"
                        codeLink="https://github.com/Lucky0108/Mark-Ad-Graphix"
                        siteLink="https://mark-ad-grafix.herokuapp.com/"
                      />
                      <Project
                        image={
                          <StaticImage src="../images/project/ToDo.png" alt="Todo app" />
                        }
                        name="ToDo List"
                        codeLink="https://github.com/Lucky0108/ToDo"
                        siteLink="https://getscheduled.herokuapp.com/"
                      />
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul className="portfolio-gallery">
                    <Project
                        image={
                          <StaticImage
                            src="../images/project/corona-counter.png"
                            alt="Corona Counter"
                          />
                        }
                        name="Corona Case Counter"
                        codeLink="https://github.com/Lucky0108/Corona-Counter"
                        siteLink="https://covid-19counter.herokuapp.com/#"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/Xpenser.png"
                            alt="Expense Calculator"
                          />
                        }
                        name="Xpenser - Track Expenses"
                        codeLink="https://github.com/Lucky0108/Expense-Calculator"
                        siteLink="https://xpenser.netlify.app/"
                      />
                      <Project
                        image={
                          <StaticImage src="../images/project/lyrical.png" alt="Lyrical" />
                        }
                        name="Lyrical - Lyrics Generator"
                        codeLink="https://github.com/Lucky0108/Lyrical"
                        siteLink="https://getlyrical.netlify.app/"
                      />
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul className="portfolio-gallery">
                    <Project
                        image={
                          <StaticImage
                            src="../images/project/luckart.png"
                            alt="Ecommerce frontend"
                          />
                        }
                        name="Luckart - Ecomm FrontEnd"
                        codeLink="https://github.com/Lucky0108/React-Shop"
                        siteLink="https://ecommclone.netlify.app/"
                      />
                      <Project
                        image={
                          <StaticImage src="../images/project/HaveJokes.png" alt="Jokes Api" />
                        }
                        name="HaveJokes - Random Jokes Generator"
                        codeLink="https://github.com/Lucky0108/All-Time-Jokes"
                        siteLink="https://havejokes.netlify.app/"
                      />
                      <Project
                        image={
                          <StaticImage
                            src="../images/project/responsive-react.png"
                            alt="Demo React Site"
                          />
                        }
                        name="Responsive Demo React Site"
                        codeLink="https://github.com/Lucky0108/Responsive-React-Site"
                        siteLink="https://responsive-react-app.netlify.app/"
                      />
                    </ul>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-skills">
        <div className="container">
          <div className="skills-wrap">
            <div className="left">
              <h3>I have high skills in developing MERN and Wordpress websites.</h3>
              <p>
                I, as a Web Developer can help you make a completely responsive website in MERN stack or a Wordpress website with complete CMS and as per your needs.
              </p>
            </div>
            <div className="right">
            <Skill name="HTML" percent="95" />
            <Skill name="CSS" percent="90" />
            <Skill name="JavaScript" percent="85" />
            <Skill name="React" percent="80" />
            <Skill name="MERN" percent="80" />
            <Skill name="Wordpress" percent="90" />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="portfolio-video-section">
        <div className="video-div-bg">
          <StaticImage
            src="../images/portfolio-video.jpg"
            alt="Portfolio Vid"
          />
          <div className="overlay"></div>
        </div>
        <div className="video-div-content">
          <span className="rounded" onClick={() => setOpen(true)}></span>
          <h3 className="fadeInUp text">
            I am delivering beautiful digital products for my clients
          </h3>
          <div>
            <ModalVideo
              openMessage="You Just Opened Our Special Video"
              dismissBtnMessage="Close the video by clicking here"
              channel="youtube"
              autoplay={1}
              controls={0}
              showinfo="0"
              mute={1}
              isOpen={isOpen}
              // videoId="TVShZg9X5V0"
              videoId="HwLW8s03BGA"
              onClose={() => setOpen(false)}
            />
          </div>
          <button onClick={() => setOpen(true)} className="video-btn fadeInUp">
            Watch Video
          </button>
        </div>
      </section> */}
    </>
  );
};

export default Portfolio;
