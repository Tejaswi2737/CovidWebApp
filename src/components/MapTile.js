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

class MapTile extends React.Component {
    render() {
        return(
            <Container className="row" style={{ minHeight: "400px" }}>
                <Container className="col-md-12 mb-4">
                    <Container className="card is-card-dark chart-card">
                        <Container className="chart-container large full-height">
                            <ReactFC
                                {...{
                                    type: "india",
                                    width: "100%",
                                    height: "100%",
                                    dataFormat: "json",
                                    containerBackgroundOpacity: "0",
                                    dataEmptyMessage: "Loading Data...",
                                    dataSource: {
                                    chart: {
                                        theme: "ecommerce",
                                        caption: this.props.cap,
                                        subCaption: "India",
                                        includevalueinlabels: "0",
                                        includeid:"0"
                                    },
                                    colorrange: {
                                        code: "#F64F4B",
                                        minvalue: "0",
                                        gradient: "1",
                                        color: [
                                        {                 
                                            minValue: "0",
                                            code: "#e0ffff"
                                        },
                                        {
                                            maxvalue: this.props.max,
                                            code:'#8b0000'
                                        }
                                        ]
                                    },
                                    entityDef: 
                                        {
                                            "internalId": "002",
                                            "newId": ""
                                        }
                                    ,
                                    data: this.props.data
                                    }
                                }}
                            />
                        </Container>
                    </Container>
                </Container>
            </Container>
        )
    }
}

export default MapTile;
