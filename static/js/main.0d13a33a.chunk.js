(this["webpackJsonplucis-react"]=this["webpackJsonplucis-react"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(4),i=a.n(n),s=a(0);var l=function(){return Object(s.jsxs)("div",{id:"header",children:[Object(s.jsx)("h1",{children:"Cat Facts"}),Object(s.jsx)("h2",{children:"Lucis - React Tutorial"})]})},o=a(5),d=a(6),h=a(2),j=a(8),u=a(7);var g=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{id:"facts-container",children:[" ",e.error&&Object(s.jsx)("div",{id:"loading",children:Object(s.jsx)("h3",{className:"fact-div",children:e.error})}),e.renderAllFacts]})})};var b=function(e){return Object(s.jsxs)("div",{id:"paging",children:[Object(s.jsx)("div",{id:"page-nums",children:e.renderPageNumbers}),Object(s.jsxs)("div",{id:"move-btns",children:[Object(s.jsx)("button",{id:"back-btn",className:1===e.currentPage?"hide":"",onClick:function(){return e.data.moveClick(-1)},children:Object(s.jsx)("p",{children:"Back"})}),Object(s.jsx)("button",{id:"randomize",onClick:e.data.randomize,children:Object(s.jsx)("p",{children:"Randomize Facts"})}),Object(s.jsx)("button",{id:"next-btn",className:e.lastPage===e.currentPage?"hide":"show",onClick:function(){return e.data.moveClick(1)},children:Object(s.jsx)("p",{children:"Next"})})]})]})},m=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={isLoading:!0,allFacts:[],currentPage:null,factsPerPage:15,error:null},e.handleClick=e.handleClick.bind(Object(h.a)(e)),e.moveClick=e.moveClick.bind(Object(h.a)(e)),e.randomize=e.randomize.bind(Object(h.a)(e)),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;null!==localStorage.getItem("allFacts")?this.setState({isLoading:!1,allFacts:JSON.parse(localStorage.getItem("allFacts")),currentPage:localStorage.getItem("currentPage")}):fetch("https://catfact.ninja/facts?limit=1000").then((function(e){if(!e.ok)throw Error("Oh no! There was an error fetching the facts.");return e.json()})).then((function(t){var a=t.data;e.setState({isLoading:!1,allFacts:a,currentPage:1,error:null}),localStorage.setItem("allFacts",JSON.stringify(a)),localStorage.setItem("currentPage",JSON.stringify(1))})).catch((function(t){e.setState({error:t.message,isLoading:!1})}))}},{key:"handleClick",value:function(e){window.scrollTo({top:0,behavior:"smooth"}),this.setState({currentPage:localStorage.getItem("currentPage")});var t=Number(e.target.id);localStorage.setItem("currentPage",JSON.stringify(t)),this.setState({currentPage:t})}},{key:"moveClick",value:function(e){window.scrollTo({top:0,behavior:"smooth"}),this.setState({currentPage:JSON.parse(localStorage.getItem("currentPage"))});var t=this.state.currentPage+e;localStorage.setItem("currentPage",JSON.stringify(t)),this.setState({currentPage:t})}},{key:"randomize",value:function(){localStorage.removeItem("allFacts"),localStorage.removeItem("currentPage"),window.location.reload()}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.allFacts,r=t.currentPage,c=t.factsPerPage,n=r*c,i=n-c,l=a.slice(i,n),o=this.state.isLoading?Object(s.jsx)("div",{id:"loading",children:Object(s.jsxs)("h3",{className:"fact-div",children:["Please wait.",Object(s.jsx)("br",{})," The cats are disclosing their secrets."]})}):l.map((function(e,t){return Object(s.jsxs)("div",{className:"fact-div",children:[Object(s.jsxs)("p",{className:"fact-num",children:["Fact # ",t+1+(r-1)*c,":"]}),Object(s.jsx)("p",{className:"fact-txt",children:e.fact})]},t)})),d=[],h=1;h<=Math.ceil(a.length/c);h++)d.push(h);var j=d.length,u=d.map((function(t){return Object(s.jsx)("button",{id:t,onClick:e.handleClick,className:r===t?"mark-page":"",children:t},t)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(g,{error:this.state.error,renderAllFacts:o})}),Object(s.jsx)("div",{children:Object(s.jsx)(b,{data:this,currentPage:this.state.currentPage,lastPage:j,renderPageNumbers:u})})]})}}]),a}(c.a.Component);var O=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(l,{})}),Object(s.jsx)("div",{id:"main-container",children:Object(s.jsx)(m,{})})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0d13a33a.chunk.js.map