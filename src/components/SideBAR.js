import React from "react";
import { bubble as Menu } from 'react-burger-menu';
// import PerfectScrollbar from 'react-perfect-scrollbar'
import Button from '@material-ui/core/Button';
import Scrollbar from "react-scrollbars-custom";

class SideBAR extends  React.Component {
    constructor(props) {
        let countries=[]
        super(props)
        countries=((this.props.countryList))
        this.state={
            loading:false,
            menuOpen:false,
            country:countries[0],
            countries:countries
        } 
        this.setState({
            loading:true
        })
    }
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    } 
    updatePlace=(e) =>{
        this.props.onChange(e.currentTarget.getAttribute('value'))
        this.setState({
            menuOpen: false,
        })
    }
    render() {
        return (
                <Menu   
                    Overlay
                    disableOverlayClick
                    pageWrapId={ "page-wrap" } 
                    right width={window.innerWidth > 800?"15%":"30%"} height={"100%"}
                    style={{maxWidth:"100px"}}
                    isOpen={this.state.menuOpen} 
                    onStateChange={(state) => this.handleStateChange(state)}>
                    <div >
                        {this.state.countries.map((la)=>
                            <Button key={la.toString()} 
                                className="menu-item" 
                                size="small" 
                                value={la}
                                onClick={this.updatePlace}
                                style={{width:"100%",color:"black"}}>
                                                    {la}
                            </Button>
                        )}
                    </div>
                </Menu>             

        )
    }
}
export default SideBAR;