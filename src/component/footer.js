import React, {Component} from 'react';

class Footer extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <footer className="">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Devoyaa 2017</span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer