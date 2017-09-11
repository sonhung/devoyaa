import React, {Component} from 'react';

class Team extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">We are composed of passionate creatives who are eager to make a difference.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="image/team/sonnguyen.png" alt=""/>
                <h4>Son Nguyen</h4>
                <p className="text-muted">Web Engineer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.facebook.com/son.hung.94">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.linkedin.com/in/son-hung-517406b0/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="mailto:sonhung.nue@gmail.com">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="image/team/tuanpham2.png" alt=""/>
                <h4>Tuan Pham</h4>
                <p className="text-muted">Web Engineer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.facebook.com/son.hung.94">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.linkedin.com/in/son-hung-517406b0/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="mailto:sonhung.nue@gmail.com">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="image/team/thongbui.png" alt=""/>
                <h4>Thong Bui</h4>
                <p className="text-muted">Web Engineer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.facebook.com/son.hung.94">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.linkedin.com/in/son-hung-517406b0/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="mailto:sonhung.nue@gmail.com">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="image/team/danhvo.png" alt=""/>
                <h4>Danh Vo</h4>
                <p className="text-muted">Web Engineer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.facebook.com/son.hung.94">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="https://www.linkedin.com/in/son-hung-517406b0/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" href="mailto:sonhung.nue@gmail.com">
                      <i className="fa fa-envelope-o"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Team