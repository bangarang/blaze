import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import cx from 'classnames';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hello@chasegrock.com",
      copied: false
    };
  }

  copy(){
    this.setState({copied: true})
  }
  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  render() {

    return (
        <footer className={'footer'}>
          <img src="/signature.svg" className={'signature'} />
          <p className={'subheading'}>Chase G Rock</p>
          <CopyToClipboard
            text={this.state.value}
            onCopy={this.copy.bind(this)}>
            <p className="subheading copy_button"><span className="">hello@chasegrock.com</span><span className={this.state.copied ? "copy_status copied" : "copy_status"}>{this.state.copied ? "Copied, Talk to you soon!": "Click to Copy"}</span></p>
          </CopyToClipboard>
          <div className={'social'}>
            <a className={cx('social_icon', "icon-spotify")} href="https://play.spotify.com/user/1252553485" target="_blank"></a>
          </div>
        </footer>
    );
  }

}

export default Footer;
