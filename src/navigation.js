import React, {Component} from 'react';

import Scroll, {scrollSpy, Events, scroller, Element, animateScroll} from 'react-scroll';

var ScrollLink  = Scroll.Link;


class Navigation extends Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  scrollToTop() {
    animateScroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
    });
  }

  render() {
    return (
      <nav>
        <a className={'nav_link'} onClick={this.scrollToTop}>Home</a>
        <ScrollLink activeClass="active" className={'nav_link'} to="bio" spy={true} smooth={true} offset={50} duration={1000} >Bio</ScrollLink>
        <ScrollLink activeClass="active" className={'nav_link'} to="research" spy={true} smooth={true} offset={50} duration={1000} >Research</ScrollLink>
      </nav>
    );
  }

}

export default Navigation;
