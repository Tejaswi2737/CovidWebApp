import React from "react";
import axios from "axios"
import Dropdown from "react-dropdown";
import styled from 'styled-components';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';



import Sidebar from "./SideBAR";
import TileView from "./TileView";
import ChartTitle from "./ChartTile";
import config from "./config";

const Container = styled.div``;
const Nav = styled.nav``;

const url1 = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId1
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;
const url2 = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId2
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;
const url3 = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId3
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;
const url4 = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId4
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;
const url5 = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId5
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;
const url6 = `https://sheets.googleapis.com/v4/spreadsheets/${
  config.spreadsheetId6
}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      dropdownOptions: [],
      selectedValue: null,
      selectedPlace: 'World',
      allplaces:[],
      newCases:0,
      newDeaths:0,
      newRecov:0,
      totalCases:0,
      totalDeaths:0,
      totalRecov:0,
      casesData:[],
      deathsData:[],
      recovData:[],
      newCasesData:[],
      newDeathsData:[],
      newRecovDataall:[],
      newconfdataall: [],
      newdeathdataall: [],
      newrecdataall: [],
      confdataall: [],
      deathdataall: [],
      recdataall: [],     
    };
  }
  async componentDidMount(){
    await axios.all([
      axios.get(url1),
      axios.get(url2),
      axios.get(url3),
      axios.get(url4),
      axios.get(url5),
      axios.get(url6)
    ])
    .then(axios.spread((res1,res2,res3,res4,res5,res6) => {
      let newconfdata = res1.data.valueRanges[0].values;
      let newdeathdata = res2.data.valueRanges[0].values;
      let newrecdata = res3.data.valueRanges[0].values;
      let recdata = res4.data.valueRanges[0].values;
      let confdata = res5.data.valueRanges[0].values;
      let deathdata = res6.data.valueRanges[0].values;
      let rowsnewconf=[];
      let rowsnewdeath=[];
      let rowsnewrec=[];
      let rowsconf=[];
      let rowsdeath=[];
      let  rowsrec = [];
      let dropdownOptions1 = [];
      let newcasesdata1 = [];
      let newDeathsData1 = [];
      let newRecovData1 = [];
      let casesData1 = [];
      let deathsData1 = [];
      let recovData1=[];
      for (let i = 1; i < newconfdata.length; i++) {
        let newconobj={};
        let newdeathobj={};
        let newrecobj={};
        let confobj={};
        let deathobj={};
        let recovobject={};
        for (let j = 0; j < newconfdata[i].length; j++) {
          newconobj[newconfdata[0][j]] = newconfdata[i][j];
          newdeathobj[newdeathdata[0][j]] = newdeathdata[i][j];
          newrecobj[newrecdata[0][j]] = newrecdata[i][j];
          confobj[confdata[0][j]] = confdata[i][j];
          deathobj[deathdata[0][j]] = deathdata[i][j];
          recovobject[recdata[0][j]] = recdata[i][j];
        }
        rowsnewconf.push(newconobj)
        rowsnewdeath.push(newdeathobj)
        rowsnewrec.push(newrecobj)
        rowsconf.push(confobj)
        rowsdeath.push(deathobj)
        rowsrec.push(recovobject)
      }
      let countries=(Object.keys(rowsnewrec[0]))
      let country_list=countries.splice(1,31,1);
      for (let i = 0; i < rowsnewconf.length; i++) {
        dropdownOptions1.push(rowsnewconf[rowsnewconf.length-i-1].Date);
        if(rowsnewdeath[i].World>0) {
          newDeathsData1.push({
            label: rowsnewdeath[i].Date,
            value: rowsnewdeath[i].World,
            displayValue: `${rowsnewdeath[i].World} cases`
          }) 
        }
      
        if(rowsnewconf[i].World>0) {
          newcasesdata1.push({
            label: rowsnewconf[i].Date,
            value: rowsnewconf[i].World,
            displayValue: `${rowsnewconf[i].World} cases`,
          })
        }
        if(rowsnewrec[i].World>0) {
          newRecovData1.push({
            label: rowsnewrec[i].Date,
            value: rowsnewrec[i].World,
            displayValue: `${rowsnewrec[i].World} cases`,
          })
        }
        if(rowsdeath[i].World>0) {
          deathsData1.push({
            label: rowsdeath[i].Date,
            value: rowsdeath[i].World,
            displayValue: `${rowsdeath[i].World} cases`
          })
        }
        if(rowsconf[i].World>0) {
          casesData1.push({
            label: rowsconf[i].Date,
            value: rowsconf[i].World,
            displayValue: `${rowsconf[i].World} cases`
          })
        }  
        if(rowsrec[i].World>0) {
          recovData1.push({
            label: rowsrec[i].Date,
            value: rowsrec[i].World,
            displayValue: `${rowsrec[i].World} cases`
          })
        }        
      }
      this.setState(
        {
          newCases:rowsnewconf[rowsnewconf.length-1].World,
          newDeaths:rowsnewdeath[rowsnewdeath.length-1].World,
          newRecov:rowsnewrec[rowsnewrec.length-1].World,
          totalCases:rowsconf[rowsconf.length-1].World,
          totalDeaths:rowsdeath[rowsdeath.length-1].World,
          totalRecov:rowsrec[rowsrec.length-1].World,
          dropdownOptions: dropdownOptions1,
          allplaces: country_list,
          newCasesData:newcasesdata1,
          newDeathsData: newDeathsData1,
          newRecovData: newRecovData1, 
          casesData: casesData1,
          deathsData: deathsData1,
          recovData:recovData1,
          selectedValue:dropdownOptions1[0],
          selectedPlace:"World",
          newconfdataall: rowsnewconf,
          newdeathdataall: rowsnewdeath,
          newrecdataall: rowsnewrec,
          confdataall: rowsconf,
          deathdataall: rowsdeath,
          recdataall: rowsrec,        
        },
      ); 
    }))
  }
  updateDate = event => {
    this.getData(event.value);
    this.setState({ 
      selectedValue: event.value,
    }, ()=>{
      this.getData(this.state.selectedValue)
    });
  };
  updatePlace = event => {
    this.getData(event.value);
    console.log(event)
    this.setState({ 
      selectedPlace:event.value
    }, ()=> {
      this.getData(this.state.selectedPlace)
    });
  };
  sidebarselect = (placename) => {
    console.log(placename)
    this.setState({ 
      selectedValue: placename,
    }, ()=>{
      this.getData(this.state.selectedValue)
    }); 
  }
  getData = arg => {
    let rowsnewconf=[];
    let rowsnewdeath=[];
    let rowsnewrec=[];
    let rowsconf=[];
    let rowsdeath=[];
    let  rowsrec = [];
    let newcasesdata1 = [];
    let newDeathsData1 = [];
    let newRecovData1 = [];
    let casesData1 = [];
    let deathsData1 = [];
    let recovData1=[];
    let place=this.state.selectedPlace;
    let date=this.state.selectedValue;
    let dates=this.state.dropdownOptions;
    let date_pos=0;
    for (let i=0;i<dates.length;i++) {
      if (date===dates[i]) {
        date_pos=dates.length-i-1
      }
    }
    console.log(date)
    console.log(place)
    rowsnewconf=this.state.newconfdataall;
    rowsnewdeath=this.state.newdeathdataall;
    rowsnewrec=this.state.newrecdataall;
    rowsconf= this.state.confdataall;
    rowsdeath= this.state.deathdataall;
    rowsrec=this.state.recdataall;
    console.log(rowsnewrec)
    let countries=(Object.keys(rowsnewrec[0]))
    let country_list=countries.splice(1,31,1);
    let pos=0
    for (let i=0;i<country_list.length;i++) {
      if (country_list[i]===place) {
        pos=i+1
      }
    }
    for (let i = 0; i < rowsnewconf.length; i++) {
      if(Object.values(rowsnewdeath[i])[pos]>0) {
        newDeathsData1.push({
          label: rowsnewdeath[i].Date,
          value: Object.values(rowsnewdeath[i])[pos],
          displayValue: `${Object.values(rowsnewdeath[i])[pos]} cases`
        }) 
      }
      if(Object.values(rowsnewconf[i])[pos]>0) {
        newcasesdata1.push({
          label: rowsnewconf[i].Date,
          value: Object.values(rowsnewconf[i])[pos],
          displayValue: `${Object.values(rowsnewconf[i])[pos]} cases`
        }) 
      }    
      if(Object.values(rowsnewrec[i])[pos]>0) {
        newRecovData1.push({
          label: rowsnewrec[i].Date,
          value: Object.values(rowsnewrec[i])[pos],
          displayValue: `${Object.values(rowsnewrec[i])[pos]} cases`
        }) 
      } 
      if(Object.values(rowsdeath[i])[pos]>0) {
        deathsData1.push({
          label: rowsdeath[i].Date,
          value: Object.values(rowsdeath[i])[pos],
          displayValue: `${Object.values(rowsdeath[i])[pos]} cases`
        }) 
      }
      if(Object.values(rowsconf[i])[pos]>0) {
        casesData1.push({
          label: rowsconf[i].Date,
          value: Object.values(rowsconf[i])[pos],
          displayValue: `${Object.values(rowsconf[i])[pos]} cases`
        }) 
      }
      if(Object.values(rowsrec[i])[pos]>0) {
        recovData1.push({
          label: rowsrec[i].Date,
          value: Object.values(rowsrec[i])[pos],
          displayValue: `${Object.values(rowsrec[i])[pos]} cases`
        }) 
      }
    }
    this.setState(
      {
        newCases:Object.values(rowsnewconf[date_pos])[pos],  
        newDeaths:Object.values(rowsnewdeath[date_pos])[pos],
        newRecov:Object.values(rowsnewrec[date_pos])[pos],
        totalCases:Object.values(rowsconf[date_pos])[pos],
        totalDeaths:Object.values(rowsdeath[date_pos])[pos],
        totalRecov:Object.values(rowsrec[date_pos])[pos],
        newCasesData:newcasesdata1,
        newDeathsData: newDeathsData1,
        newRecovData: newRecovData1, 
        casesData: casesData1,
        deathsData: deathsData1,
        recovData:recovData1,
        newconfdataall: rowsnewconf,
        newdeathdataall: rowsnewdeath,
        newrecdataall: rowsnewrec,
        confdataall: rowsconf,
        deathdataall: rowsdeath,
        recdataall: rowsrec,        
      }
    ); 
  };
  
  render() {
    return (
      <Container>
          <Sidebar list={this.state.allplaces} update={this.sidebarselect}/>
           <div id="page-wrap"> 
          <Container>
                <Container >
                  <Nav className="navbar navbar-expand-lg top is-dark is-main-text" >
                    <Container className="navbar-nav">
                      Coronavirus Cases Dashboard
                    </Container>
                  </Nav>
                    
                  <Nav className="navbar top nav-secondary is-dark-light is-dark-text">
                    <Container className="navbar-nav ml-auto">
                      <Dropdown
                        className="pr-2 custom-dropdown"
                        options={this.state.dropdownOptions}
                        onChange={this.updateDate}
                        value={this.state.selectedValue}
                        placeholder="Select an option"
                      />
                    </Container>
                    <Container className="navbar-nav m0-left">
                      <Dropdown
                        className="pr-2 custom-dropdown"
                        options={this.state.allplaces}
                        onChange={this.updatePlace}
                        value={this.state.selectedPlace}
                        placeholder="Select an option"
                      />
                    </Container>
                  </Nav>
                  </Container>
                  <Container className="body">
                  <Container className="container-fluid pr-5 pl-5 pr-5 pl-5 pr-5 pl-5">
                    <Container className="row">
                      <TileView 
                        name="New Cases Recorded"
                        data={this.state.newCases}
                        place={this.state.selectedPlace}
                        date={this.state.selectedValue}
                      />
                      <TileView
                        name="Total Confirmed Cases"
                        data={this.state.totalCases}
                        place={this.state.selectedPlace}
                        date={this.state.selectedValue}
                      />
                      <TileView
                        name="New Deaths Recorded"
                        data={this.state.newDeaths}
                        place={this.state.selectedPlace}
                        date={this.state.selectedValue}
                      />
                      <TileView
                        name="Total Deaths Recorded"
                        data={this.state.totalDeaths}
                        place={this.state.selectedPlace}
                        date={this.state.selectedValue}
                      />
                      <TileView 
                        name="New Recoveries"
                        data={this.state.newRecov}
                        place={this.state.selectedPlace}
                        date={this.state.selectedValue}
                      />
                      <TileView
                        name="Total Recoveries"
                        data={this.state.totalRecov}
                        place={this.state.selectedPlace}
                        date={this.state.selectedValue}
                      />       
                    </Container>
                  
                    <ChartTitle
                      cap="New cases confirmed"
                      xname="New cases" 
                      yname="Date Reported" 
                      data={this.state.newCasesData}
                      sub={this.state.selectedPlace}
                    />       
                    <ChartTitle
                      cap="Total Coronovirus cases"
                      xname="Total confirmed cases" 
                      yname="Date Reported" 
                      data={this.state.casesData}
                      sub={this.state.selectedPlace}
                    />
                    <ChartTitle
                      cap="New deaths reported"
                      xname="New deaths reported" 
                      yname="Date Reported" 
                      data={this.state.newDeathsData}
                      sub={this.state.selectedPlace}
                    />  
                    <ChartTitle
                      cap="Total Deaths reported"
                      xname="Total deaths" 
                      yname="Date Reported" 
                      data={this.state.deathsData}
                      sub={this.state.selectedPlace}
                    />
                    <ChartTitle
                      cap="New recoveries"
                      xname="New recoveries" 
                      yname="Date Reported" 
                      data={this.state.newRecovData}
                      sub={this.state.selectedPlace}
                    />  
                    <ChartTitle
                      cap="Total Recoveries"
                      xname="Total Recoveries" 
                      yname="Date Reported" 
                      data={this.state.recovData}
                      sub={this.state.selectedPlace}
                    />
                    {/* <MapTile cap="Total Confirmed cases Statewise"
                      data={this.state.stateRegion}
                    />
                    <MapTile cap="Total Deaths reported Statewise"
                      data={this.state.stateRegionDeaths}
                    />
                    <MapTile cap="Total Recovered Cases Statewise"
                      data={this.state.stateRegionRecover}
                    />   */}
                </Container>
                </Container>
                <Container className="footer">
                  <div>
                    References
                  </div>
                </Container>
              </Container>
          </div>

      {/* // </div> */}
</Container>
    );
  }
}
export default App
