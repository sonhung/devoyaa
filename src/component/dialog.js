import React, {Component} from 'react';

class Dialog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let DOM1 = <div>
      <h2>Online Classroom</h2>
      <p className="item-intro text-muted"></p>
      <img className="img-fluid d-block mx-auto" src='image/portfolio/onlineclassroom/onlline-classroom.png' alt=""/>
      <p className="project-content">Online Classroom is a web application that supports teaching and learning for the
        Business department in the Eastern International University. It provides an online educational environment to
        boost the interactions between lecturers and students. </p>
      <p className="project-content">Lecturers can upload lessons’ slides, books and videos, give and grade assignments
        online. Students can get theses material, submit their assignments and get the results online.</p>
      <img className="img-fluid d-block mx-auto" src='image/portfolio/onlineclassroom/online-classroom-2.png' alt=""/>
      <p className="project-content">Moreover, this system encourages students to share their personal knowledge and
        opinions to others through discussion activities. Besides, the application also provides Administrator’s
        features to manage accounts, subject and classes</p>
      <img className="img-fluid d-block mx-auto" src='image/portfolio/onlineclassroom/admin.png' alt=""/>
      <img className="img-fluid d-block mx-auto" src='image/portfolio/onlineclassroom/student.png' alt=""/>
      <ul className="list-inline">
        <li>Date: July 2015</li>
        <li>Link: <a target="_blank" href="http://mybbs.eiu.edu.vn/">mybbs.eiu.edu.vn</a></li>
      </ul>
    </div>
    let DOM2 = <div>
      <h2>Mobiphone Portal</h2>
      <p className="item-intro text-muted"></p>
      <img className="img-fluid d-block mx-auto" src='image/portfolio/mobiphone/mobiphone3.PNG' alt=""/>
      <img className="img-fluid d-block mx-auto" src='image/portfolio/mobiphone/mobiphone5.jpg' alt=""/>
      {/*<img className="img-fluid d-block mx-auto" src='image/portfolio/mobiphone/mobiphone2.jpg' alt=""/>*/}
      {/*<img className="img-fluid d-block mx-auto" src='image/portfolio/mobiphone/mobiphone1.jpg' alt=""/>*/}
      <ul className="list-inline">
        <li>Date: January 2016</li>
        {/*<li>Link: <a target="_blank" href="http://mybbs.eiu.edu.vn/">mybbs.eiu.edu.vn</a></li>*/}
      </ul>
    </div>
    let dialogDOM = ''
    if (this.props.project === 1) {
      dialogDOM = DOM1
    }
    else if (this.props.project === 2) {
      dialogDOM = DOM2
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto modal-dialog">
            <div className="modal-body">
              {dialogDOM}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Dialog