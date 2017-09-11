import React, {Component} from 'react';

class Service extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Services</h2>
              <h3 className="section-subheading text-muted">Build Things Together.</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
              <h4 className="service-heading">E-Commerce</h4>
            </div>
            <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
              <h4 className="service-heading">Web Application</h4>
            </div>
            <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-window-restore fa-stack-1x fa-inverse"></i>
            </span>
              <h4 className="service-heading">Responsive Design</h4>
            </div>
            <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
              <h4 className="service-heading">Web Security</h4>
            </div>
          </div>
        </div>
        {/*<div className="container" style={{paddingTop:'60px'}}>*/}
          {/*<div className="row">*/}
            {/*<div className="col-md-2" style={{top:'-5px'}}>*/}
              {/*<a href="#">*/}
                {/*<img className="img-fluid d-block mx-auto" src="image/logos/nodejs.png" alt=""/>*/}
              {/*</a>*/}
            {/*</div>*/}
            {/*<div className="col-md-2">*/}
              {/*<a href="#">*/}
                {/*<img className="img-fluid d-block mx-auto" src="image/logos/angular.png" alt=""/>*/}
              {/*</a>*/}
            {/*</div>*/}
            {/*<div className="col-md-2" style={{top:'10px'}}>*/}
              {/*<a href="#">*/}
                {/*<img className="img-fluid d-block mx-auto" src="image/logos/react.png" alt=""/>*/}
              {/*</a>*/}
            {/*</div>*/}
            {/*<div className="col-md-2">*/}
              {/*<a href="#">*/}
                {/*<img className="img-fluid d-block mx-auto" src="image/logos/python.png" alt=""/>*/}
              {/*</a>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </section>
    )
  }
}
export default Service