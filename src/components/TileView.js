import React from "react";
import styled from 'styled-components';
import CountUp from 'react-countup';
import Flip from 'react-reveal/Flip';

const Container = styled.div``;

class TileView extends React.Component {
    render() {
        return(
          <Container className="col-lg-4 col-sm-6 is-dark-text">
            <Flip top>
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className=
                    {window.innerWidth > 760?
                      "is-red-text text-small":"is-red-text text-large"}>
                    {this.props.name} in {this.props.place} on {this.props.date}
                  </Container>
                </Container>
                <Container className="card-value  is-dark-text text-x-large">
                  <span className="text-large pr-1"></span>
                  <CountUp start={this.props.prev} end={this.props.data} duration={1}/>
                </Container>
              </Container>
            </Flip>
          </Container>
        )
    }
}
export default TileView