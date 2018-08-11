import React, { PropTypes, Component } from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

import cx from 'classnames';

import {scroller, Element, animateScroll} from 'react-scroll';

import {spring, presets, Motion, StaggeredMotion,TransitionMotion}  from 'react-motion';
import Waypoint from 'react-waypoint';
import createHistory from "history/createBrowserHistory"

const history = createHistory();

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: "home",
      logo: false,
      main_logo: false,
      name: false,
      biomechanics: false,
      neuroscience: false,
      face: false
    };
  }

  componentDidMount() {
    var self = this;
    var pathname =location.pathname.split('/')[1];

    self.setState({pathname: location.pathname.split('/')[1]})
    setTimeout(function() {
      console.log("logo");
      self.setState({logo: true});
    }, 750);

    setTimeout(function() {
      console.log("name");
      self.setState({name: true});
    }, 1000);
    
    setTimeout(function() {
      console.log("biomechanics");
      self.setState({biomechanics: true});
    }, 1250);

    setTimeout(function() {
      console.log("neuroscience");
      self.setState({neuroscience: true});
    }, 1450);

    setTimeout(function() {
      console.log("face");
      self.setState({face: true});
    }, 1700);
    if (pathname.length){
      setTimeout(function() {
        console.log("scroller");
        scroller.scrollTo(pathname, {
          duration: 500,
          delay: 100,
          smooth: true,
        });

      }, 2500);
    }

  }

  _setMainLogo() {
    this.setState({main_logo: true})
  }

  _setMessage(msg) {
    history.replace("/" + msg);
  }

  _onEnter(msg, object) {
    if (object.previousPosition == 'above') {
      history.replace("/"+msg);
    }
  }

  _onLeave(msg, object) {
    if (object.currentPosition == 'above') {
      // history.push("/" + msg);
      history.replace("/"+msg);
    }
  }

  render() {
    var {
      pathname,
      logo,
      name,
      biomechanics,
      neuroscience,
      face,
      main_logo
    } = this.state;

    return (
      <div>
        <div className={'home_wrapper'}>
          <div className={'title_wrapper'}>
            { logo ?
              <Motion key="main_logo" defaultStyle={{x: 400, opacity: -1}} style={{x: spring(0), opacity: spring(1, presets.gentle)}} onRest={this._setMainLogo.bind(this)} >
                {  function (style) {
                  return (
                      <svg
                        className={main_logo ? cx('main_logo_finished', 'chase_logo') : 'chase_logo'}
                        x="0px"
                        y="0px"
                        viewBox="0 0 125.7 197.3">
                        <polygon id="c_top" className={'c'}
                            style={{
                              WebkitTransform: `translateX(${-style.x}px)`,
                              transform: `translateX(${-style.x}px)`,
                              opacity: style.opacity
                            }}
                            points="62.8,85.9 87.9,60.8 98.6,50.1 98.6,0 37.8,60.8 "/>
                        <g id="R" className={'r'}
                            style={{
                              WebkitTransform: `translateX(${style.x}px)`,
                              transform: `translateX(${style.x}px)`,
                              opacity: style.opacity
                            }}>
                          <polygon id="r_top" points="125.7,98.6 102.9,75.9 100.7,73.6 100.7,73.6 27.1,0 27,50.1 75.6,98.7 62.9,111.4
                            87.9,136.5 125.7,98.7 125.7,98.7 	"/>
                          <polygon id="r_bottom" points="37.8,136.5 37.8,136.5 27.1,147.2 27.1,197.3 62.9,161.5 	"/>
                          <polygon id="r_edge" points="62.9,111.4 62.9,111.4 98.7,147.2 98.7,197.3 37.8,136.5 37.8,136.5 37.8,136.5 	"/>
                        </g>
                          <polygon id="c_bottom" className={'c'}
                            style={{
                              WebkitTransform: `translateX(${-style.x}px)`,
                              transform: `translateX(${-style.x}px)`,
                              opacity: style.opacity
                            }}
                            points="0,98.7 22.8,121.4 25,123.7 25,123.7 98.6,197.3 98.7,147.2 50.1,98.6 62.8,85.9 37.8,60.8
                              0,98.6 0,98.7 "/>
                      </svg>
                    )
                }}
              </Motion>
            :
              <svg className={'chase_logo'} x="0px" y="0px" viewBox="0 0 125.7 197.3" style={{opacity: 0, width: "150px"}}>
                <g id="R" className={'r'}>
                  <polygon id="r_top" points="125.7,98.6 102.9,75.9 100.7,73.6 100.7,73.6 27.1,0 27,50.1 75.6,98.7 62.9,111.4 87.9,136.5 125.7,98.7 125.7,98.7 	"/>
                  <polygon id="r_bottom" points="37.8,136.5 37.8,136.5 27.1,147.2 27.1,197.3 62.9,161.5 	"/>
                  <polygon id="r_edge" points="62.9,111.4 62.9,111.4 98.7,147.2 98.7,197.3 37.8,136.5 37.8,136.5 37.8,136.5 	"/>
                </g>
                <g id="C" className={'c'}>
                  <polygon id="c_top" points="62.8,85.9 87.9,60.8 98.6,50.1 98.6,0 37.8,60.8 "/>
                  <polygon id="c_bottom" points="0,98.7 22.8,121.4 25,123.7 25,123.7 98.6,197.3 98.7,147.2 50.1,98.6 62.8,85.9 37.8,60.8 0,98.6 0,98.7 "/>
                </g>
              </svg> 
            }

            { name ?
              <Motion
                key="name"
                defaultStyle={{x: 100, opacity: 0}}
                style={{x: spring(0, presets.gentle), opacity: spring(1, presets.gentle)}}>
                {  function (name_style) {
                  return (
                    <h1
                      style={{
                            WebkitTransform: `translateY(${name_style.x}px)`,
                            transform: `translateY(${name_style.x}px)`,
                            opacity: name_style.opacity
                          }}
                      className={'big_name'}>CHASE ROCK</h1>
                  )
                }}
              </Motion>
              : <h1 style={{ opacity: 0 }} className={'big_name'}>CHASE ROCK</h1>
            }

            { biomechanics ?
              <Motion
                key="biomechanics"
                defaultStyle={{x: 100, opacity: 0}}
                style={{x: spring(0, presets.gentle), opacity: spring(1, presets.gentle)}}>
                {  function (name_style) {
                  return (
                    <h2
                      className={'subheader'}
                      style={{
                            WebkitTransform: `translateY(${name_style.x}px)`,
                            transform: `translateY(${name_style.x}px)`,
                            opacity: name_style.opacity
                          }}
                      >Biomechanics, M.S.</h2>
                  )
                }}
              </Motion>
              : <h2 className={'subheader'} style={{ opacity: 0 }}>Biomechanics, M.S.</h2>
            }

            { neuroscience ?
              <Motion
                key="neuroscience"
                defaultStyle={{x: 100, opacity: 0}}
                style={{x: spring(0, presets.gentle), opacity: spring(1, presets.gentle)}}>
                {  function (name_style) {
                  return (
                    <h2
                      className={'subheader smaller'}
                      style={{
                            WebkitTransform: `translateY(${name_style.x}px)`,
                            transform: `translateY(${name_style.x}px)`,
                            opacity: name_style.opacity
                          }}
                      >Neuroscience, B.S.</h2>
                  )
                }}
              </Motion>
              : <h2 className={'subheader smaller'} style={{ opacity: 0 }}>Neuroscience, B.S.</h2>
            }

          </div>
          { face ?
            <Motion
              key="face"
              defaultStyle={{x: 100, opacity: 0}}
              style={{x: spring(0, presets.gentle), opacity: spring(1, presets.gentle)}}>
              {  function (name_style) {
                return (
                  <img src="/face.svg"
                    style={{
                          WebkitTransform: `translateY(${name_style.x}px)`,
                          transform: `translateY(${name_style.x}px)`,
                          opacity: name_style.opacity
                        }}
                    className={'face'} />
                )
              }}
            </Motion>
            : <img src="/face.svg" style={{ opacity: 0 }} className={'face'} />
          }
        </div>

        <Element name="bio">
          <Waypoint
            onLeave={this._onLeave.bind(this, "bio")}
            onEnter={this._onEnter.bind(this, "")}
            threshold={0}
            />
          <div className={'bio_wrapper'}>
            <div id="bio" className={'wrapper'}>
              <h3 className={'bio_heading'}>Bio</h3>
              <p>Currently a PhD student at the Georgia Institute of Technology, Chase is studying under Dr. Young-Hui Chang. Chase is in the Applied Physiology program, which specializes in investigating questions related to the physiology of movement. As a member of the Comparative Neuromechanics Laboratory, Chase’s PhD research involves understanding the body-wide adaptation to novel environments, such as reduced gravity. </p>

              <p>Prior to starting at Georgia Tech, Chase received his Master’s degree in Exercise Physiology in 2017 from the Department of Biomechanics at the University of Nebraska at Omaha. With Dr. Kota Takahashi as his mentor, Chase completed a project that aimed to detect how changes in energy expenditure might be related to the variability of a person’s walking pattern.</p>

              <a className={'cv_button'} href="/CRock_CV_08202018.pdf"><h4>Curriculum Vitae</h4></a>
            </div>
          </div>
        </Element>
        <Element name="research">
          <Waypoint
            onEnter={this._onEnter.bind(this, "bio")}
            onLeave={this._onLeave.bind(this, "research")}
            threshold={0}
            />
          <div className={'research_wrapper'}>
            <div className={'wrapper'}>
              <h3 className={'research_heading'}>Research</h3>
              
              <h4>Presentations</h4>

              <div className={'presentation'}>
                <p>May 2017 - <i>Relationship Between Step-to-Step Variability and Metabolic Cost of Transport in Human Walking</i>, <a href="https://www.unomaha.edu/college-of-education/cobre/events-outreach/conference.php" target="_blank">2nd Annual Human Movement Variability Conference,</a> <a href="http://www.unomaha.edu/" target="_blank">University of Nebraska at Omaha,</a> Omaha, NE <br /></p>
              </div>

              <div className={'presentation'}>
                <p>April 2017 - <i>Relationship Between Step-to-Step Variability and Metabolic Cost of Transport in Human Walking</i>, <a href="https://sites.google.com/site/asbrockymountain/about-us" target="_blank">7th Annual Meeting of the Rocky Mountain American Society of Biomechanics,</a> Estes Park, CO <br /></p>
              </div>

              <div className={'presentation'}>
                <p>April 2017 - <i>Efficient Variability: Linking Fractal Walking Patterns with Metabolic Energy Savings</i>, <a href="https://nebraskaacademyofsciences.wildapricot.org/" target="_blank">Nebraska Academy of Sciences Annual Meeting,</a> <a href="http://www.unl.edu/" target="_blank">University of Nebraska at Lincoln,</a> Lincoln, NE <br /></p>
              </div>

              <div className={'presentation'}>
                <p>March 2017 - <i>Efficient Variability: Linking Fractal Walking Patterns with Metabolic Energy Savings</i>, <a href="https://www.unomaha.edu/office-of-research-and-creative-activity/students/research-and-creative-activity-fair.php" target="_blank">Research and Creative Activity Fair,</a> <a href="http://www.unomaha.edu/" target="_blank">University of Nebraska at Omaha,</a> Omaha, NE <br /></p>
              </div>

              <div className={'presentation'}>
                <p>October 2016 - <i>Relationship Between Metabolic Cost of Transport and Stride-to-Stride Variability</i>, <a href="http://nric.nebraska.edu/" target="_blank">Symposium on Biomechanics,</a> <a href="http://www.unomaha.edu/" target="_blank">University of Nebraska at Omaha,</a> Omaha, NE <br /></p>

                <p><a className={'presentation_button'} href="/ChaseRock_UNOSymposium_2016.pdf">Poster</a></p>
              </div>


              <div className={'presentation'}>
                <p>August 2016 - <i>Relationship Between Prosthetic Push-Off Work And Stride-To-Stride Fluctuations In Transtibial Prosthesis Users</i> <br />
                <a href="http://asb2016.asbweb.org/" target="_blank"> 40th Annual Meeting of the American Society of Biomechanics,</a> Raleigh, NC</p>

                <p><a className={'presentation_button'} href="/ChaseRock_ASB 2016_poster.pdf">Poster</a>
                <a className={'presentation_button'} href="/ChaseRock_ASB2016_abstract.pdf">Abstract</a></p>
              </div>

              <div className={'presentation'}>
                <p>June 2016 - <i>Metabolic Cost of Transport and the Persistence of Stride-to-Stride Fluctuations in Human Walking</i> <br />
                <a href="http://www.unomaha.edu/college-of-education/cobre/community-engagement/research-day.php" target="_blank"> Human Movement Variability Conference,</a> Omaha, NE</p>
              </div>

              <div className={'presentation'}>
                <p>April 2016 – <i>Metabolic Cost of Transport and the Persistence of Stride-to-Stride Fluctuations in Human Walking</i> <br />
                <a href="https://sites.google.com/site/asbrockymountain/home" target="_blank"> 6th Annual Meeting of the Rocky Mountain American Society of Biomechanics,</a> Estes Park, CO</p>
                <p><a className={'presentation_button'} href="/ChaseRock_RMASB_2016_poster.pdf">Poster</a>
                <a className={'presentation_button'} href="/ChaseRock_RMASB_2016_abstract.pdf">Abstract</a></p>
              </div>

              <div className={'presentation'}>
                <p>March 2016 - <i>Relationship Between Prosthetic Push-Off Work And Stride-To-Stride Fluctuations In Transtibial Prosthesis Users</i> <br />
                <a href="http://www.unomaha.edu/office-of-research-and-creative-activity/students/research-and-creative-activity-fair.php" target="_blank"> Research and Creative Activity Fair,</a> <a href="http://www.unomaha.edu/" target="_blank"> University of Nebraska at Omaha,</a> Omaha, NE</p>
              </div>

              <div className={'presentation'}>
                <p>October 2015 – <i>Metabolic Cost and Long-Term Correlations in Human Gait</i> <br />
                <a href="http://www.unomaha.edu/college-of-education/health-physical-education-recreation/community-engagement/seminar-series/index.php" target="_blank"> School of HPER Seminar Series,</a> <a href="http://www.unomaha.edu/" target="_blank"> University of Nebraska at Omaha,</a> Omaha, NE</p>
              </div>





            </div>
          </div>
        </Element>
      </div>
    );
  }

}

export default withSiteData(HomePage);

