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
            <a className={cx('social_icon', "icon-linkedin2")} href="https://www.linkedin.com/in/chasegrock/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"></a>
            <a className={'social_icon'} href="https://scholar.google.com/citations?user=LID75j8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
            </a>
            <a className={'social_icon'} href="https://orcid.org/0000-0001-7598-759X" target="_blank" rel="noopener noreferrer" aria-label="ORCID" title="ORCID">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>
            </a>
          </div>
        </footer>
    );
  }

}

export default Footer;
