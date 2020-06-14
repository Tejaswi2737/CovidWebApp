import React from "react";
import styled from 'styled-components'
const Container = styled.div``;

class TileViewLight extends React.Component {
    render() {
        return(
            <Container className="col-lg-6 col-sm-6">
              <Container className="card grid-card is-card-light">
                <Container className="card-heading   is-dark-text">
                  <Container className="is-dark-text letter-spacing text-small">
                    {this.props.name} in {this.props.place} on {this.props.date}
                  </Container>
                </Container>
                <Container className="card-value pt-4 is-dark-text text-x-large">
                  <span className="text-large pr-1"></span>
                  {/* {this.state.totalRevenue} */}
                  {this.props.data}
                </Container>
              </Container>
            </Container>
        )
    }
}
export default TileViewLight