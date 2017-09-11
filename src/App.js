import React, {Component} from 'react';
import $ from 'jquery'
import CoverHeader from './component/coverHeader'
import Service from './component/service'
import Portfolio from './component/portfolio'
import Team from './component/team'
import Contact from './component/contact'
import Footer from './component/footer'
import * as vietnamese from './language/vietnamese'
import * as english from './language/english'
import Scroll from 'react-scroll'

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scrollSpy  = Scroll.scrollSpy;
var scroll     = Scroll.animateScroll;
class App extends Component {
  constructor(props) {
    super(props)
    this.togglerMenu = this.togglerMenu.bind(this)
    this.changeEnglish =this.changeEnglish.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
    this.state = {
      showMenu: false,
      isScrool: false,
      english:true,
      language:{}
    }
  }

  componentDidMount() {
    this.setState({language:english})
    let self = this
    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
      if ($("#mainNav").offset().top > 100) {
        self.setState({isScrool: true})
      }
      else {
        self.setState({isScrool: false})
      }
    });

    //smooth scrool
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    //smooth scrool
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  togglerMenu() {
    this.setState({showMenu: !this.state.showMenu})
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  changeEnglish(eng){
    if(eng!==this.state.language){
      if(eng){
        this.setState({english:eng, language:english})
      }
      else {
        this.setState({english:eng, language:vietnamese})
      }
    }
  }


  render() {
    let classMenu = 'collapse navbar-collapse none'
    let classNav = 'navbar navbar-expand-md navbar-dark fixed-top'
    if (this.state.showMenu) {
      classMenu = 'collapse navbar-collapse block'
    }
    if (this.state.isScrool) {
      classNav = 'navbar navbar-expand-md navbar-dark fixed-top navbar-shrink'
    }
    let navDOM = <nav className={classNav} id="mainNav">
      <div className="container" >
        <a className="navbar-brand js-scroll-trigger" onClick={this.scrollToTop} style={{cursor:'pointer'}}>DevoYaa</a>
        <button onClick={this.togglerMenu.bind(this)} className="navbar-toggler navbar-toggler-right" type="button"
                data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <div className={classMenu} id="navbarResponsive">
          <ul className="navbar-nav ml-auto" style={{textAlign:'right', right:'-15px'}}>
            <li className="nav-item">
              <Link className="nav-link" to="service" spy={true} smooth={true} duration={500} onClick={this.togglerMenu}>Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="portfolio" spy={true} smooth={true} duration={500} onClick={this.togglerMenu}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="team" spy={true} smooth={true} duration={500} onClick={this.togglerMenu}>Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" spy={true} smooth={true} duration={500} onClick={this.togglerMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    return (
      <div className="body" id="page-top">
        {navDOM}
        <CoverHeader/>
        <Element name="service" className="element" >
          <Service/>
        </Element>
        <Element name="portfolio" className="element" >
          <Portfolio/>
        </Element>
        <Element name="team" className="element" >
          <Team/>
        </Element>
        <Element name="contact" className="element" >
          <Contact/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
