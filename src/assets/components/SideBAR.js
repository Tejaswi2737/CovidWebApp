import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import '../style.css';
import './App.css';
class SideBAR extends React.Component {
  state={placename:''}
  sidebarselect (e) {
    console.log(e);
    // this.setState({
    //   placename:this.props
    // })
    // console.log(name)
  }
  render() {
    return(
      <Menu styles={{margin:"40px"}}>
        <PerfectScrollbar className="is-light-text" style={{
          width:"200%",
          color:"white",
        }}>
          <div>
            <button className="menu-item" value={this.props.list[0]} onClick={this.sidebarselect("hi")}>
              {this.props.list[0]}
            </button>
          </div>        
          <div>
            <a className="menu-item" href="#" onClick={this.sidebarselect(this.props.list[1])}>
              {this.props.list[1]}
            </a>
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[2]}
            </a>
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[3]}
            </a> 
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[4]}
            </a>
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[5]}
            </a>     
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[6]}
            </a>
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[7]}
            </a>            
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[8]}
            </a>        
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[9]}
            </a>       
          </div> 
  
          <div>
            <a className="menu-item" href="/">
              {this.props.list[10]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[10]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[11]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[12]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[13]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[14]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[15]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[16]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[17]}
            </a>          
          </div>    
          <div>
            <a className="menu-item" href="/">
              {this.props.list[18]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[19]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[20]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[21]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[22]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[23]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[24]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[25]}
            </a>          
          </div> 
          <div>
            <a className="menu-item" href="/">
              {this.props.list[26]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[27]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[28]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[29]}
            </a>          
          </div>
          <div>
            <a className="menu-item" href="/">
              {this.props.list[30]}
            </a>          
          </div>
        </PerfectScrollbar>
      </Menu>  
    )
  }

}
export default SideBAR;