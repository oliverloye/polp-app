(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),l=a.n(c),o=a(40),i=a(4),s=a(5),u=a(8),m=a(7),d=a(9),p=a(41),h=a.n(p),f=a(32).config.url;function g(e){return e.ok?e.json():Promise.reject({status:e.status,fullError:e.json()})}var v=new(function(){function e(){var t=this;Object(i.a)(this,e),this.fetchData=function(e){var a=t.makeOptions("GET",!0);return fetch(f+"/api/info/"+e,a).then(g)},this.setToken=function(e){localStorage.setItem("jwtToken",e)},this.getToken=function(){return localStorage.getItem("jwtToken")},this.loggedIn=function(){return null!=t.getToken()},this.logout=function(){localStorage.removeItem("jwtToken")},this.getProfile=function(){return h()(t.getToken())},this.login=function(e,a){var n=t.makeOptions("POST",!0,{username:e,password:a});return fetch(f+"/api/login",n,!0).then(g).then(function(e){t.setToken(e.token)})},this.fetchAllSpaceships=function(){var e=t.makeOptions("GET");return fetch(f+"/api/swapi/info/spaceships",e,!0).then(g)},this.fetchAllPersons=function(){var e=t.makeOptions("GET");return fetch(f+"/api/swapi/person",e,!0).then(g)},this.fetchAllDummy=function(){var e=t.makeOptions("GET");return fetch(f+"/api/dummy",e,!0).then(g)},this.fetchSinglePerson=function(){var e=t.makeOptions("GET");return fetch(f+"/api/swapi/persons/1",e,!0).then(g)},this.fetchFavorites=function(){var e=t.makeOptions("GET");return fetch(f+"/api/swapi/favorit",e,!0).then(g)}}return Object(s.a)(e,[{key:"makeOptions",value:function(e,t,a){var n={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return t&&this.loggedIn()&&(n.headers["x-access-token"]=this.getToken()),a&&(n.body=JSON.stringify(a)),n}}]),e}()),b=a(112),E=a(113),j=a(111),O=a(114),k=a(12),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={dataFromServer:[]},a.mappedList=a.mappedList.bind(Object(k.a)(Object(k.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.facade.fetchFavorites().then(function(t){e.setState({dataFromServer:t})}).catch(function(e){return console.log(e)})}},{key:"mappedList",value:function(){var e=this.state.dataFromServer;console.log(e);var t=e.map(function(e,t){return console.log(e),r.a.createElement("li",{key:t},e.name)});return r.a.createElement("ul",null,t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Fetching from ",this.state.dataFromServer.length," different endpoints."),this.mappedList(),r.a.createElement(O.a,{activeClassName:"active",to:"/profilepage"},r.a.createElement("button",{className:"btn btn-default"},"Back")))}}]),t}(n.Component),x=a(15),S=a.n(x),F=a(17),w=a(22),N=a.n(w),P=(a(37),a(18)),C=a.n(P),T=a(23),D=a.n(T),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={names:[],msg:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(S.a.mark(function e(){var t=this;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.facade.fetchAllDummy().then(function(e){t.setState({names:e})}).catch(function(e){return console.log(e)});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){console.timeEnd("rendering")}},{key:"render",value:function(){var e=[{dataField:"id",text:"ID",sort:!0},{dataField:"firstName",text:"Firstname",filter:Object(P.textFilter)()},{dataField:"lastName",text:"Lastname",filter:Object(P.textFilter)()},{dataField:"email",text:"Email"}];return r.a.createElement("div",null,r.a.createElement("h3",null,"Build table client"),this.state.msg,r.a.createElement(N.a,{striped:!0,hover:!0,bootstrap4:!0,keyField:"id",data:this.state.names,columns:e,filter:C()(),pagination:D()()}))}}]),t}(n.Component),I="http://localhost:8084/jwtbackend/api/dummy",z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={names:[],sizePerPage:10,page:1,totalSize:0},a.handleTableChange=function(){var e=Object(F.a)(S.a.mark(function e(t,n){var r,c,l,o,i,s,u,m,d,p;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.page,c=n.sizePerPage,l=n.sortField,o=n.sortOrder,console.log(n),i=l&&o?"&_sort=".concat(l,"&_order=").concat(o):"",u=(s=(r-1)*c)+c,m="".concat(I,"?_start=").concat(s,"&_end=").concat(u).concat(i),e.next=8,fetch(m).then(function(e){var t=Number(e.headers.get("x-total-count"));return t&&a.setState({totalSize:t}),e.json()});case 8:return d=e.sent,e.next=11,d;case 11:p=e.sent,a.setState({page:r,sizePerPage:c,names:p});case 13:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(F.a)(S.a.mark(function e(){var t,a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,a=t.page,n=t.sizePerPage,this.handleTableChange("didMount",{page:a,sizePerPage:n});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){console.timeEnd("rendering")}},{key:"render",value:function(){var e=this.state,t=e.page,a=e.sizePerPage,n=e.totalSize;return r.a.createElement("div",null,r.a.createElement("h3",null,"Build Table Remote"),r.a.createElement(O.a,{activeClassName:"active",to:"/profilepage"},r.a.createElement("button",{className:"btn btn-default"},"Go Back")),r.a.createElement("hr",null),r.a.createElement(N.a,{striped:!0,remote:!0,bootstrap4:!0,keyField:"id",data:this.state.names,columns:[{dataField:"id",text:"ID",sort:!0},{dataField:"firstName",text:"Firstname"},{dataField:"lastName",text:"Lastname"},{dataField:"email",text:"Email"}],onTableChange:this.handleTableChange,pagination:D()({page:t,sizePerPage:a,totalSize:n})}))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={dataFromServer:[],species:[]},a.head=a.head.bind(Object(k.a)(Object(k.a)(a))),a.body=a.body.bind(Object(k.a)(Object(k.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.facade.fetchAllPersons().then(function(t){e.setState({dataFromServer:t.results})}).catch(function(e){return console.log(e)})}},{key:"head",value:function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Height"),r.a.createElement("th",null,"Mass"),r.a.createElement("th",null,"Gender")))}},{key:"body",value:function(){var e=this.state.dataFromServer.map(function(e,t){return console.log(e),r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.height," cm"),r.a.createElement("td",null,e.mass),r.a.createElement("td",null,e.gender))});return r.a.createElement("tbody",null,e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"table"},this.head(),this.body()),r.a.createElement(O.a,{activeClassName:"active",to:"/profilepage"},r.a.createElement("button",{className:"btn btn-default"},"Back")))}}]),t}(n.Component),L=(a(32).config.url,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).login=function(e){e.preventDefault(),a.props.login(a.state.username,a.state.password)},a.onChange=function(e){a.setState(Object(o.a)({},e.target.id,e.target.value))},a.state={username:"",password:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"loginBox",className:"absolute-center"},r.a.createElement("h3",{className:"text-center mb-4"},"Login"),r.a.createElement("form",{className:"text-center",onSubmit:this.login,onChange:this.onChange},r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("input",{className:"form-control text-center",type:"text",id:"username",placeholder:"username",required:!0})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("input",{className:"form-control text-center",type:"password",id:"password",placeholder:"password",required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Submit")))}}]),t}(n.Component)),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={dataFromServer:"Fetching!!"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=v.getProfile(this.state.dataFromServer).roles;v.fetchData(t).then(function(t){return e.setState({dataFromServer:t})}),console.log(v.getProfile(this.state.dataFromServer).roles)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,this.state.dataFromServer))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).logout=function(){v.logout(),a.setState({loggedIn:!1})},a.login=function(e,t){v.login(e,t).then(function(e){return a.setState({loggedIn:!0})})},a.state={loggedIn:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(E.a,null,r.a.createElement(j.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(q,null))}}),r.a.createElement(j.a,{path:"/getperson",render:function(){return r.a.createElement("div",null,r.a.createElement(A,{facade:v}))}}),r.a.createElement(j.a,{path:"/getfavorite",render:function(){return r.a.createElement("div",null,r.a.createElement(y,{facade:v}))}}),r.a.createElement(j.a,{path:"/getdummy",render:function(){return r.a.createElement("div",null,r.a.createElement(G,{facade:v}))}}),r.a.createElement(j.a,{path:"/getdummy2",render:function(){return r.a.createElement("div",null,r.a.createElement(z,{facade:v}))}}),r.a.createElement(j.a,{path:"/profilepage",render:function(){return r.a.createElement("div",null,e.state.loggedIn?r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(O.a,{to:"/",onClick:e.logout},"Logout"),r.a.createElement(_,null)):r.a.createElement(L,{login:e.login}))}}),r.a.createElement(j.a,{component:H})))))}}]),t}(n.Component),_=function(e){e.match;return r.a.createElement("div",null,r.a.createElement("ul",{className:"categoryList"},r.a.createElement("li",null,r.a.createElement(O.a,{exact:!0,to:"/getperson"},"Get Person")),v.getProfile().roles.includes("admin")?r.a.createElement("li",null,r.a.createElement(O.a,{exact:!0,to:"/getfavorite"},"Get Favorite")):null,r.a.createElement("li",null,r.a.createElement(O.a,{exact:!0,to:"/getdummy"},"Get Dummy Pagination Client")),r.a.createElement("li",null,r.a.createElement(O.a,{exact:!0,to:"/getdummy2"},"Get Dummy Pagination Remote"))))},J=function(e){e.match;return r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark mb-4"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{className:"nav-link",exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(O.a,{className:"nav-link",exact:!0,to:"/profilepage"},"Profile Page"))))},q=function(e){e.match;return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to CA3"),r.a.createElement("p",null,"Click ",r.a.createElement(O.a,{to:"/profilepage"},"here")," to go to your profile page."))},H=function(e){var t=e.location;return r.a.createElement("div",{className:"absolute-center text-center"},r.a.createElement("h1",null,"404"),r.a.createElement("h5",null,"page ",r.a.createElement("code",null,t.pathname)," not found"))},R=M;a(106),a(108);l.a.render(r.a.createElement(R,null),document.getElementById("root"))},32:function(e){e.exports={name:"ca3-react-project",version:"0.1.0",private:!0,dependencies:{bootstrap:"4.0.0","jwt-decode":"^2.2.0",react:"^16.6.3","react-bootstrap":"^0.32.4","react-bootstrap-table-next":"^1.4.1","react-bootstrap-table2-filter":"^1.1.0","react-bootstrap-table2-paginator":"^1.0.4","react-dom":"^16.6.3","react-router-dom":"^4.3.1","react-scripts":"2.1.1"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject"},eslintConfig:{extends:"react-app"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"],config:{url:"https://oloye.dk/ca3/"}}},44:function(e,t,a){e.exports=a(110)}},[[44,2,1]]]);
//# sourceMappingURL=main.034fe64b.chunk.js.map