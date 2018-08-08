import React from 'react';
import Navigation from './navigation.js';
import Waypoint from 'react-waypoint';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: true
    };
  }
  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
    (function(d) {
      var config = {
        kitId: 'dlg3wcz',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }
  _toggleScrolled() {
    this.setState({scrolled: !this.state.scrolled});
  }


  render() {
    return (
      <div className={this.state.scrolled ? "scrolled" : null}>
    
        <Waypoint
            onLeave={this._toggleScrolled.bind(this)}
            onEnter={this._toggleScrolled.bind(this)}
            threshold={0}
            />
        <header className={'header'}>
            <Navigation />
        </header>
      </div>
    );
  }

}

export default Header;
