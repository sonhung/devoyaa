import React, {Component} from 'react';

class Team extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <section className="bg-light" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-heading">CONTACT US</h2></div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center">
              <i className="fa fa-facebook fa-3x sr-contact"></i>
              <p>
                <a target="_bland" href="https://www.facebook.com/devoyaa/">facebook.com/devoyaa</a>
              </p>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fa fa-envelope-o fa-3x sr-contact"></i>
              <p>
                <a href="mailto:your-email@your-domain.com">devoyaa@gmail.com</a>
              </p>
            </div>
            {/*<div className="col-lg-4 ml-auto text-center">*/}
              {/*<i className="fa fa-skype fa-3x sr-contact"></i>*/}
              {/*<p>*/}
                {/*<a href="mailto:your-email@your-domain.com">skyname</a>*/}
              {/*</p>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
    )
  }
}
export default Team