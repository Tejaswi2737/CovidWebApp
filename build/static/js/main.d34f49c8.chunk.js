(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a){window.FusionCharts.register("theme",{name:"fusion",theme:{base:{chart:{bgAlpha:"8",canvasBgAlpha:"0",baseFont:"basefont-regular",bgColor:"#bff1f0",baseFontSize:"14",baseFontBold:"0",chartMargin:"10",canvasBottomMargin:"0",canvasTopMargin:"0",canvasRightMargin:"0",canvasLeftMargin:"0",showBorder:"0",showCanvasBorder:"0",baseFontColor:"#rgb(0,0,0)\t",captionFontBold:"1",captionFontSize:"20",subCaptionFontSize:"14",tooltipColor:"#FFFFFF",tooltipBgColor:"#000000",tooltipBgAlpha:"100",toolTipBorderAlpha:"10",toolTipBorderRadius:"3",showValues:"0",legendBgAlpha:"0",legendBorderAlpha:"0",legendBorderThickness:"0",labelDisplay:"auto",useEllipsesWhenOverflow:"0",dataEmptyMessage:"Loading Data..."}},column2d:{chart:{placeValuesInside:"0",usePlotGradientColor:"0",showAlternateVGridColor:"1",divLineAlpha:"10",divLineColor:"#rgb(0,0,0)",paletteColors:"FF0040",palette:"5",valuePadding:"10",yAxisNamePadding:"20px",xAxisNamePadding:"20px",xAxisNameFontSize:"14",labelDisplay:"auto",useEllipsesWhenOverflow:"0",valueFontBold:"0",valueFontSize:"14",plotToolText:"<div>$label<br><b>$value</b>",captionAlignment:"center",dataEmptyMessage:"Loading Data...",labelStep:"20"}}}})},108:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),n=t(4),c=t.n(n),o=t(18),r=t.n(o),i=t(35),d=t(8),u=t(9),h=t(11),p=t(10),v=t(12),m=t(13),b=t(5),g=t.n(b),D=t(36),f=t.n(D),w=t(14),O=(t(76),t(37)),y=t.n(O),j=t(38),C=t(128),R=t(39),E=function(e){function a(e){var t;Object(d.a)(this,a);var s;return(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).updatePlace=function(e){t.props.onChange(e.currentTarget.getAttribute("value")),t.setState({menuOpen:!1})},s=t.props.countryList,t.state={loading:!1,menuOpen:!1,country:s[0],countries:s},t.setState({loading:!0}),t}return Object(v.a)(a,e),Object(u.a)(a,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"render",value:function(){var e=this;return l.a.createElement(R.a,{style:{width:0,height:0}},l.a.createElement(j.bubble,{Overlay:!0,disableOverlayClick:!0,pageWrapId:"page-wrap",right:!0,width:window.innerWidth>800?"15%":"30%",height:"100%",style:{maxWidth:"100px"},isOpen:this.state.menuOpen,onStateChange:function(a){return e.handleStateChange(a)}},l.a.createElement("div",null,this.state.countries.map(function(a){return l.a.createElement(C.a,{key:a.toString(),className:"menu-item",size:"small",value:a,onClick:e.updatePlace,style:{width:"100%",color:"black"}},a)}))))}}]),a}(l.a.Component),x=t(42),W=t.n(x),S=t(43),k=t.n(S);function N(){var e=Object(m.a)([""]);return N=function(){return e},e}var P=w.a.div(N()),V=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(P,{className:"col-lg-4 col-sm-6 is-dark-text"},l.a.createElement(k.a,{top:!0},l.a.createElement(P,{className:"card grid-card is-card-dark"},l.a.createElement(P,{className:"card-heading"},l.a.createElement(P,{className:window.innerWidth>760?"is-red-text text-small":"is-red-text text-large"},this.props.name," in ",this.props.place," on ",this.props.date)),l.a.createElement(P,{className:"card-value  is-dark-text text-x-large"},l.a.createElement("span",{className:"text-large pr-1"}),l.a.createElement(W.a,{start:this.props.prev,end:this.props.data,duration:1})))))}}]),a}(l.a.Component),A=t(46),F=t.n(A),T=t(47),B=t.n(T),L=t(22),I=t.n(L),z=(t(104),t(48)),M=t.n(z);function G(){var e=Object(m.a)([""]);return G=function(){return e},e}var K=w.a.div(G());I.a.fcRoot(F.a,B.a);var Q=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(K,{className:"col-md-12 mb-4 is-light-text"},l.a.createElement(M.a,{effect:"fadeInUp"},l.a.createElement(K,{className:"card chart-card is-dark-text"},l.a.createElement(K,{className:"chart-container large full-height"},l.a.createElement(I.a,{type:"column2d",width:"100%",dataFormat:"json",containerBackgroundOpacity:"100%",dataEmptyMessage:"Loading Data...",dataSource:{chart:{theme:"fusion",bgColor:"#e5e5e5",bgAlpha:"20",caption:this.props.cap,subCaption:this.props.sub,yAxisName:this.props.yname,xAxisName:this.props.xname,showAlternateHGridColor:0},data:this.props.data}})))))}}]),a}(l.a.Component),J="AIzaSyCS5s_wrshhJskdUvoIwDUHyBdmKtJQkkw",U="1Q8FDAvOLv7mTOjJ-2JdCY9WXfSK6MuSvLThz8UxKwy0",Y="1aLDxKvJ_WbdKcKAOo4dCURfw57rxUMDeEcQL1hbF1X4",_="18ctO7893v4N0TKKPTNjipaeBAikrv7CZTIINXBihPqg",H="1mkC8PKekOAdAyUrSxHFTnzWRQzhDfYLiP_iI354t8_0",X="1C4z204YLFD-WvmWKesYxIAnyn4zQaWP7oklINS776aM",q="1by-3Brxla8yqPIQokAQDZm87lL8IdTds6i6r-gnR8Qg";function Z(){var e=Object(m.a)([""]);return Z=function(){return e},e}function $(){var e=Object(m.a)([""]);return $=function(){return e},e}var ee=w.a.div($()),ae=w.a.nav(Z()),te="https://sheets.googleapis.com/v4/spreadsheets/".concat(U,"/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=").concat(J),se="https://sheets.googleapis.com/v4/spreadsheets/".concat(Y,"/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=").concat(J),le="https://sheets.googleapis.com/v4/spreadsheets/".concat(_,"/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=").concat(J),ne="https://sheets.googleapis.com/v4/spreadsheets/".concat(H,"/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=").concat(J),ce="https://sheets.googleapis.com/v4/spreadsheets/".concat(X,"/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=").concat(J),oe="https://sheets.googleapis.com/v4/spreadsheets/".concat(q,"/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=").concat(J),re=function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(h.a)(this,Object(p.a)(a).call(this))).updateDate=function(a){e.getData(a.value),e.setState({selectedValue:a.value},function(){e.getData(e.state.selectedValue)})},e.updatePlace=function(a){e.setState({selectedPlace:a},function(){e.getData(e.state.selectedPlace)})},e.sidebarselect=function(a){e.setState({selectedValue:a},function(){e.getData(e.state.selectedValue)})},e.getData=function(a){for(var t,s,l,n,c,o,r=[],i=[],d=[],u=[],h=[],p=[],v=e.state.selectedPlace,m=e.state.selectedValue,b=e.state.dropdownOptions,g=0,D=0,f=0,w=0,O=0;O<b.length;O++)m===b[O]&&(g=b.length-O-1);t=e.state.newconfdataall,s=e.state.newdeathdataall,l=e.state.newrecdataall,n=e.state.confdataall,c=e.state.deathdataall,o=e.state.recdataall;for(var y=Object.keys(l[0]).splice(1,31,1),j=0,C=0;C<y.length;C++)y[C]===v&&(j=C+1);for(var R=0;R<t.length;R++)Object.values(s[R])[j]>0&&i.push({label:s[R].Date,value:Object.values(s[R])[j],displayValue:"".concat(Object.values(s[R])[j]," cases")}),Object.values(t[R])[j]>0&&r.push({label:t[R].Date,value:Object.values(t[R])[j],displayValue:"".concat(Object.values(t[R])[j]," cases")}),Object.values(l[R])[j]>0&&d.push({label:l[R].Date,value:Object.values(l[R])[j],displayValue:"".concat(Object.values(l[R])[j]," cases")}),Object.values(c[R])[j]>0&&h.push({label:c[R].Date,value:Object.values(c[R])[j],displayValue:"".concat(Object.values(c[R])[j]," cases")}),Object.values(n[R])[j]>0&&u.push({label:n[R].Date,value:Object.values(n[R])[j],displayValue:"".concat(Object.values(n[R])[j]," cases")}),Object.values(o[R])[j]>0&&p.push({label:o[R].Date,value:Object.values(o[R])[j],displayValue:"".concat(Object.values(o[R])[j]," cases")});console.log(j),g>0&&(D=Object.values(n[g-1])[j],f=Object.values(c[g-1])[j],w=Object.values(o[g-1])[j]),e.setState({newCases:Object.values(t[g])[j],newDeaths:Object.values(s[g])[j],newRecov:Object.values(l[g])[j],totalCases:Object.values(n[g])[j],totalDeaths:Object.values(c[g])[j],totalRecov:Object.values(o[g])[j],newCasesData:r,newDeathsData:i,newRecovData:d,casesData:u,deathsData:h,recovData:p,newconfdataall:t,newdeathdataall:s,newrecdataall:l,confdataall:n,deathdataall:c,recdataall:o,totCasesprev:D,totDeathsprev:f,totRecovprev:w})},e.state={items:[],dropdownOptions:[],selectedValue:null,selectedPlace:"World",allplaces:[],newCases:null,newDeaths:null,newRecov:null,totCasesprev:0,totDeathsprev:0,totRecovprev:0,totalCases:null,totalDeaths:null,totalRecov:null,casesData:[],deathsData:[],recovData:[],newCasesData:[],newDeathsData:[],newRecovDataall:[],newconfdataall:[],newdeathdataall:[],newrecdataall:[],confdataall:[],deathdataall:[],recdataall:[],loaded:!1,steps:[{target:".my-first-step",content:"Go back to home page"},{target:".my-second-step",content:"Select the reported date"},{target:".my-third-step",content:"Select the country"},{target:".my-fourth-step",content:"Details of the newcases and total cases"},{target:".my-fifth-step",content:"Daily cases, deaths, recoveries "}]},e}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark(function e(){var a=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.all([g.a.get(te),g.a.get(se),g.a.get(le),g.a.get(ne),g.a.get(ce),g.a.get(oe)]).then(g.a.spread(function(e,t,s,l,n,c){for(var o=e.data.valueRanges[0].values,r=t.data.valueRanges[0].values,i=s.data.valueRanges[0].values,d=l.data.valueRanges[0].values,u=n.data.valueRanges[0].values,h=c.data.valueRanges[0].values,p=[],v=[],m=[],b=[],g=[],D=[],f=[],w=[],O=[],y=[],j=[],C=[],R=[],E=1;E<o.length;E++){for(var x={},W={},S={},k={},N={},P={},V=0;V<o[E].length;V++)x[o[0][V]]=o[E][V],W[r[0][V]]=r[E][V],S[i[0][V]]=i[E][V],k[u[0][V]]=u[E][V],N[h[0][V]]=h[E][V],P[d[0][V]]=d[E][V];p.push(x),v.push(W),m.push(S),b.push(k),g.push(N),D.push(P)}for(var A=Object.keys(m[0]).splice(1,31,1),F=0;F<p.length;F++)f.push(p[p.length-F-1].Date),v[F].World>0&&O.push({label:v[F].Date,value:v[F].World,displayValue:"".concat(v[F].World," cases")}),p[F].World>0&&w.push({label:p[F].Date,value:p[F].World,displayValue:"".concat(p[F].World," cases")}),m[F].World>0&&y.push({label:m[F].Date,value:m[F].World,displayValue:"".concat(m[F].World," cases")}),g[F].World>0&&C.push({label:g[F].Date,value:g[F].World,displayValue:"".concat(g[F].World," cases")}),b[F].World>0&&j.push({label:b[F].Date,value:b[F].World,displayValue:"".concat(b[F].World," cases")}),D[F].World>0&&R.push({label:D[F].Date,value:D[F].World,displayValue:"".concat(D[F].World," cases")});a.setState({newCases:p[p.length-1].World,newDeaths:v[v.length-1].World,newRecov:m[m.length-1].World,totalCases:b[b.length-1].World,totalDeaths:g[g.length-1].World,totalRecov:D[D.length-1].World,dropdownOptions:f,allplaces:A,newCasesData:w,newDeathsData:O,newRecovData:y,casesData:j,deathsData:C,recovData:R,selectedValue:f[0],selectedPlace:"World",newconfdataall:p,newdeathdataall:v,newrecdataall:m,confdataall:b,deathdataall:g,recdataall:D,loaded:!0})}));case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"render",value:function(){return l.a.createElement(ee,{className:"full"},this.state.loaded?l.a.createElement(E,{countryList:this.state.allplaces,onChange:this.updatePlace}):"",l.a.createElement(ae,{className:"navbar expand-top is-dark is-main-text"},l.a.createElement("a",{className:"navbar-nav is-main-text my-first-step",href:"/"},"Covid19 Cases")),l.a.createElement("main",{id:"page-wrap",style:{backgroundImage:"url(".concat(y.a,")")}},l.a.createElement(ee,null,l.a.createElement(ae,{className:"navbar top nav-secondary is-light "},l.a.createElement(ee,{className:"navbar-nav ml-auto my-second-step"},l.a.createElement(f.a,{className:"pr-2 custom-dropdown",options:this.state.dropdownOptions,onChange:this.updateDate,value:this.state.selectedValue,placeholder:"Select an option"}))),l.a.createElement(ee,{className:"body"},l.a.createElement(ee,{className:"container-fluid pr-5 pl-5 pr-5 pl-5 pr-5 pl-5"},l.a.createElement(ee,{className:"row my-fourth-step"},l.a.createElement(V,{name:"New Cases Recorded",data:this.state.newCases,place:this.state.selectedPlace,date:this.state.selectedValue,prev:0}),l.a.createElement(V,{name:"Total Confirmed Cases",data:this.state.totalCases,place:this.state.selectedPlace,date:this.state.selectedValue,prev:this.state.totCasesprev}),l.a.createElement(V,{name:"New Deaths Recorded",data:this.state.newDeaths,place:this.state.selectedPlace,date:this.state.selectedValue,prev:0}),l.a.createElement(V,{name:"Total Deaths Recorded",data:this.state.totalDeaths,place:this.state.selectedPlace,date:this.state.selectedValue,prev:this.state.totDeathsprev}),l.a.createElement(V,{name:"New Recoveries",data:this.state.newRecov,place:this.state.selectedPlace,date:this.state.selectedValue,prev:0}),l.a.createElement(V,{name:"Total Recoveries",data:this.state.totalRecov,place:this.state.selectedPlace,date:this.state.selectedValue,prev:this.state.totRecovprev})),l.a.createElement(ee,{className:"my-fifth-step"},l.a.createElement(Q,{cap:"New Cases Confirmed",xname:"New Cases",yname:"Date Reported",data:this.state.newCasesData,sub:this.state.selectedPlace}),l.a.createElement(Q,{cap:"Total Cases Confirmed",xname:"Total Cases Confirmed",yname:"Date Reported",data:this.state.casesData,sub:this.state.selectedPlace}),l.a.createElement(Q,{cap:"New Deaths Reported",xname:"New Deaths Reported",yname:"Date Reported",data:this.state.newDeathsData,sub:this.state.selectedPlace}),l.a.createElement(Q,{cap:"Total Deaths Reported",xname:"Total Deaths Reported",yname:"Date Reported",data:this.state.deathsData,sub:this.state.selectedPlace}),l.a.createElement(Q,{cap:"New Recoveries",xname:"New Recoveries",yname:"Date Reported",data:this.state.newRecovData,sub:this.state.selectedPlace}),l.a.createElement(Q,{cap:"Total Recoveries",xname:"Total Recoveries",yname:"Date Reported",data:this.state.recovData,sub:this.state.selectedPlace})))))))}}]),a}(l.a.Component);t(106),t(108),t(110),t(112);c.a.render(l.a.createElement(re,null),document.getElementById("root"))},37:function(e,a,t){e.exports=t.p+"static/media/covid.74121b1b.jpg"},52:function(e,a,t){e.exports=t(114)}},[[52,2,1]]]);
//# sourceMappingURL=main.d34f49c8.chunk.js.map