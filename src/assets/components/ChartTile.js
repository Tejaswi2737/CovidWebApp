import React from "react";
import styled from 'styled-components'

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import india from "fusionmaps/maps/es/fusioncharts.india";
import ReactFC from "react-fusioncharts";
import "./charts-theme";


const Container = styled.div``;
ReactFC.fcRoot(FusionCharts, Charts, Maps, india);
class ChartTile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Container className="col-md-12 mb-4 is-light-text">
              <Container className="card chart-card is-dark-text">
                <Container className="chart-container large full-height">
                  <ReactFC
                    {...{
                      type: "column2d",
                      width: "100%",
                      // height: "100%",
                      dataFormat: "json",
                      containerBackgroundOpacity: "0",
                      dataEmptyMessage: "Loading Data...",
                      dataSource: {
                        chart: {
                          theme: "fusion",
                          caption: this.props.cap,
                          subCaption: this.props.sub,
                          yAxisName: this.props.yname,
                          xAxisName: this.props.xname,
                          showAlternateHGridColor:0,
                        },
                        data: this.props.data
                      }
                    }}
                  />
                </Container>
              </Container>
            </Container>
        )
    }
}
export default ChartTile;