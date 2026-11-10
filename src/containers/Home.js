import React, { PropTypes, Component } from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

import cx from 'classnames';

import {scroller, Element, animateScroll} from 'react-scroll';

import {spring, presets, Motion, StaggeredMotion,TransitionMotion}  from 'react-motion';
import Waypoint from 'react-waypoint';
import createHistory from "history/createBrowserHistory"

// Only create browser history in the browser; this module is also loaded
// during the static (Node) prerender, where there is no DOM.
const history = typeof window !== 'undefined' ? createHistory() : null;

const LAB_URL = 'https://www.engineering.pitt.edu/subsites/Labs/sml/profiles/team/chase-rock/';

const ME = 'Rock CG';

// Newest first
const PUBLICATIONS = [
  {
    year: 2026,
    authors: ['Rock CG', 'Kim H', 'Dick JF', 'Chang YH'],
    title: 'Blindfolded hypogravity adaptation differentially affects motor and cognitive systems',
    journal: 'Frontiers in Psychology',
    details: '17, 1729003',
    doi: '10.3389/fpsyg.2026.1729003',
  },
  {
    year: 2024,
    authors: ['Rock CG', 'Kwak ST', 'Luo A', 'Yang X', 'Yun K', 'Chang YH'],
    title: 'Realizing the gravity of the simulation: adaptation to simulated hypogravity leads to altered predictive control',
    journal: 'Frontiers in Physiology',
    details: '15, 1397016',
    doi: '10.3389/fphys.2024.1397016',
  },
  {
    year: 2024,
    authors: ['Herrin KR', 'Kwak ST', 'Rock CG', 'Chang YH'],
    title: 'Gait quality in prosthesis users is reflected by force-based metrics when learning to walk on a new research-grade powered prosthesis',
    journal: 'Frontiers in Rehabilitation Sciences',
    details: '5, 1339856',
    doi: '10.3389/fresc.2024.1339856',
  },
  {
    year: 2024,
    authors: ['Herrin KR', 'Kwak ST', 'Rock CG', 'Chang YH'],
    title: 'Identifying gait quality metrics sensitive to changes in lower limb constraint',
    journal: 'Cogent Engineering',
    details: '11(1), 2312697',
    doi: '10.1080/23311916.2024.2312697',
  },
  {
    year: 2018,
    authors: ['Rock CG', 'Marmelat V', 'Yentes JM', 'Siu KC', 'Takahashi KZ'],
    title: 'Interaction between step-to-step variability and metabolic cost of transport during human walking',
    journal: 'Journal of Experimental Biology',
    details: '221, jeb181834',
    doi: '10.1242/jeb.181834',
  },
  {
    year: 2018,
    authors: ['Rock CG', 'Wurdeman SR', 'Stergiou N', 'Takahashi KZ'],
    title: 'Stride-to-stride fluctuations in transtibial amputees are not affected by changes in push-off mechanics from using different prostheses',
    journal: 'PLOS ONE',
    details: '13(10), e0205098',
    doi: '10.1371/journal.pone.0205098',
  },
];


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: "home",
      logo: false,
      main_logo: false,
      name: false,
      phd: false,
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
      self.setState({phd: true});
    }, 1250);

    setTimeout(function() {
      console.log("biomechanics");
      self.setState({biomechanics: true});
    }, 1450);

    setTimeout(function() {
      console.log("neuroscience");
      self.setState({neuroscience: true});
    }, 1650);

    setTimeout(function() {
      console.log("face");
      self.setState({face: true});
    }, 1900);
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
    history && history.replace("/" + msg);
  }

  _onEnter(msg, object) {
    if (object.previousPosition == 'above') {
      history && history.replace("/"+msg);
    }
  }

  _onLeave(msg, object) {
    if (object.currentPosition == 'above') {
      // history.push("/" + msg);
      history && history.replace("/"+msg);
    }
  }

  render() {
    var {
      pathname,
      logo,
      name,
      phd,
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
                      className={'big_name'}>CHASE G ROCK</h1>
                  )
                }}
              </Motion>
              : <h1 style={{ opacity: 0 }} className={'big_name'}>CHASE G ROCK</h1>
            }

            { phd ?
              <Motion
                key="phd"
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
                      >Applied Physiology, Ph.D.</h2>
                  )
                }}
              </Motion>
              : <h2 className={'subheader'} style={{ opacity: 0 }}>Applied Physiology, Ph.D.</h2>
            }

            { biomechanics ?
              <Motion
                key="biomechanics"
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
                      >Exercise Science, M.S.</h2>
                  )
                }}
              </Motion>
              : <h2 className={'subheader smaller'} style={{ opacity: 0 }}>Exercise Science, M.S.</h2>
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
              <p>I am currently a member of the <a href={LAB_URL} target="_blank" rel="noopener noreferrer">Sensorimotor Learning Laboratory</a> at the University of Pittsburgh. I joined the lab in January 2026 as a Post-doctoral Scholar under a T32 for training in the Neurobiology of Neurological Disease. Prior to joining the lab, I completed my Ph.D. in Applied Physiology at Georgia Tech, where I worked with Dr. Young-Hui Chang on understanding the cognitive and motor aspects of sensorimotor adaptation to altered gravity. Previously, I worked with Dr. Kota Takahashi at the University of Nebraska at Omaha, where I investigated gait variability, energy expenditure, and prosthesis use, earning a M.S. in Exercise Science preceded by a B.S. in Neuroscience.</p>

              <p>I am passionate about understanding how people gain motor expertise: whether it's an athlete becoming an elite player or a patient learning to walk in the way that's best for them. My projects combine principles and techniques from neuroscience, biomechanics, and psychology to evaluate the cognitive and motor aspects of learning and predict who may become an expert in the future.</p>

              <h3 className={'bio_heading'}>Future Plans</h3>
              <p>I am on the academic track: I love working in the lab and collaborating with fellow scientists to satisfy our shared curiosities and solve enigmatic problems. I also seek out opportunities to foster student scientists' research skills by promoting their active involvement in lab activities. I look forward to becoming a faculty member, studying the factors facilitating human motor learning as an independent researcher.</p>

              <a className={'cv_button'} href="/chase_g_rock_cv.pdf" target="_blank" rel="noopener noreferrer"><h4>Curriculum Vitae</h4></a>
              <a className={'cv_button'} href={LAB_URL} target="_blank" rel="noopener noreferrer"><h4>Sensorimotor Learning Lab</h4></a>
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

              <h4>Publications</h4>

              {PUBLICATIONS.map(pub => (
                <div className={'publication'} key={pub.doi}>
                  <p>
                    {pub.authors.map((author, i) => (
                      <span key={author}>
                        {author === ME ? <strong>{author}</strong> : author}
                        {i < pub.authors.length - 1 ? ', ' : ' '}
                      </span>
                    ))}
                    ({pub.year}). {pub.title}. <i>{pub.journal}</i>{pub.details ? `, ${pub.details}` : ''}.
                  </p>
                  <p><a className={'presentation_button'} href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">doi:{pub.doi}</a></p>
                </div>
              ))}
            </div>
          </div>
        </Element>
      </div>
    );
  }

}

export default withSiteData(HomePage);

