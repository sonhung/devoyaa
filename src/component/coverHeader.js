import React, {Component} from 'react';
import Scroll from 'react-scroll'

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scrollSpy  = Scroll.scrollSpy;
var scroll     = Scroll.animateScroll;

class CoverHeader extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {
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

  render(){
    return(
      <header className="masthead" ref="content">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Team!</div>
            <div className="intro-heading">It's Nice To Meet You</div>
            <Link className="btn btn-xl js-scroll-trigger" to="contact" spy={true} smooth={true} duration={500} style={{cursor:'pointer'}}>Contact With Us</Link>
          </div>
        </div>
      </header>
    )
  }
}
export default CoverHeader