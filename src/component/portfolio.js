import React, {Component} from 'react';
import Dialog from './dialog'
import $ from 'jquery'

class Portfolio extends Component{
  constructor(props){
    super(props)
    this.detailPortfolio=this.detailPortfolio.bind(this)
    this.closeModal=this.closeModal.bind(this)

    this.state={
      dialogDisplay:false,
      project:0
    }
  }

  detailPortfolio(index){
    this.setState({dialogDisplay:true, project:index})
    $("#body").addClass('hide-body-scrool')
  }

  closeModal(){
    this.setState({dialogDisplay:false})
    $("#body").removeClass('hide-body-scrool')
  }

  render(){
    let modalClass='portfolio-modal modal hide'
    if(this.state.dialogDisplay){
      modalClass='portfolio-modal modal block'
    }
    let dialogDOM=<div className={modalClass} id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal" onClick={this.closeModal.bind(this)} style={{position:'fixed'}}>
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <Dialog project={this.state.project}/>
        </div>
      </div>
    </div>
    return(
      <div>
        <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Portfolio</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={this.detailPortfolio.bind(this, 1)}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <span>View Detail</span>
                    </div>
                  </div>
                  <img className="img-fluid image-cover" src='image/portfolio/onlineclassroom/classroom-logo.PNG' alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>Online Classroom</h4>
                  <p className="text-muted"></p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={this.detailPortfolio.bind(this, 2)}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <span>View Detail</span>
                    </div>
                  </div>
                  {/*<img className="img-fluid" src="image/portfolio/mobiphone/mobiphone3.jpg" alt=""/>*/}
                  <img className="img-fluid image-cover" src='image/portfolio/mobiphone/mobiphone3.PNG' alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>Mobiphone Portal</h4>
                  <p className="text-muted"></p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={this.detailPortfolio.bind(this, 3)}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <span>View Detail</span>
                    </div>
                  </div>
                  <img className="img-fluid image-cover" src="image/portfolio/04-thumbnail.jpg" alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>Finish</h4>
                  <p className="text-muted">Identity</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={this.detailPortfolio.bind(this, 4)}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <span>View Detail</span>
                    </div>
                  </div>
                  <img className="img-fluid image-cover" src="image/portfolio/04-thumbnail.jpg" alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>Lines</h4>
                  <p className="text-muted">Branding</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={this.detailPortfolio.bind(this, 5)}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <span>View Detail</span>
                    </div>
                  </div>
                  <img className="img-fluid image-cover" src="image/portfolio/05-thumbnail.jpg" alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>Southwest</h4>
                  <p className="text-muted">Website Design</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" onClick={this.detailPortfolio.bind(this, 6)}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <span>View Detail</span>
                    </div>
                  </div>
                  <img className="img-fluid image-cover" src="image/portfolio/06-thumbnail.jpg" alt=""/>
                </a>
                <div className="portfolio-caption">
                  <h4>Window</h4>
                  <p className="text-muted">Photography</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {dialogDOM}
      </div>
    )
  }
}
export default Portfolio