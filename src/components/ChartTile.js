import React from "react";
import styled from 'styled-components'
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import "./charts-theme";
import Reveal from 'react-reveal/Reveal';


const Container = styled.div``;
ReactFC.fcRoot(FusionCharts, Charts );


class ChartTile extends React.Component {

    render() {
        return(
            <Container className="col-md-12 mb-4 is-light-text">
              <Reveal effect="fadeInUp">
                <Container className="card chart-card is-dark-text">
                  <Container className="chart-container large full-height">
                    <ReactFC
                      {...{
                        type: "column2d",
                        width: "100%",
                        // height: "100%",
                        dataFormat: "json",
                        containerBackgroundOpacity: "100%",
                        dataEmptyMessage: "Loading Data...",
                        dataSource: {
                          chart: {
                            theme: "fusion",
                            bgColor: "#e5e5e5",
                            bgAlpha: "20",
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
              </Reveal>
            </Container>
        )
    }
}
export default ChartTile;