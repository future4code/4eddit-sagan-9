(this["webpackJsonp4eddit-boilerplate"]=this["webpackJsonp4eddit-boilerplate"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=n(16),u=n(79),l=n(163),s=n(164),p=n(88),f=n(56),m=Object(p.a)({palette:{primary:f.a,secondary:{main:"#e5e8ed",light:"#ffffff",dark:"#272728"}}}),d=n(23),v=n(54),h=n(35),g=n(33),b=n(19),x=n(20),E=n(21),j=n(22),O=n(6),y=n(159),w=n(156),C=n(14),D=n(7);function k(){var e=Object(O.a)(["\n  display: flex;\n  margin: 10px;\n"]);return k=function(){return e},e}function S(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 10vh;\n"]);return S=function(){return e},e}function T(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 10vh;\n"]);return T=function(){return e},e}function I(){var e=Object(O.a)(["\nheight: 10vh;\n"]);return I=function(){return e},e}var P=D.a.img(I()),U=D.a.div(T()),L=Object(D.a)(w.a)(S()),V=D.a.div(k()),_=function(e){Object(j.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).goToFeed=function(){e.props.goToFeed()},e}return Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement(U,null,r.a.createElement(y.a,{position:"static"},r.a.createElement(L,null,r.a.createElement(P,{src:"https://user-images.githubusercontent.com/56808066/77929693-58d5ac00-7280-11ea-88df-ff8e6a32f424.jpg",onClick:this.goToFeed}),r.a.createElement(V,null,this.props.logOutButton))))}}]),n}(r.a.Component);var F=Object(c.c)(null,(function(e){return{goToFeed:function(){return e(Object(C.d)(Dt.postFeed))}}}))(_),q=n(12),B=n.n(q),N=n(29),A=n(30),M=n.n(A),R="https://us-central1-future-apis.cloudfunctions.net/fourEddit",X=function(e){return function(){var t=Object(N.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.a.post("".concat(R,"/login"),e,{headers:{}});case 3:a=t.sent,r=a.data.token,window.localStorage.setItem("token",r),n(Object(C.d)(Dt.postFeed)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),alert("Senha ou e-mail incorretos. Favor tentar novamente");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},J=function(){return function(){var e=Object(N.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.localStorage.getItem("token"),e.prev=1,e.next=4,M.a.get("".concat(R,"/posts"),{headers:{auth:n}});case 4:a=e.sent,t({type:"GET_ POSTS",payload:{posts:a.data.posts}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},z=function(e){return function(){var t=Object(N.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=window.localStorage.getItem("token"),t.prev=1,t.next=4,M.a.get("".concat(R,"/posts/").concat(e),{headers:{auth:a}});case 4:r=t.sent,n({type:"SEND_ID",payload:{postInfo:r.data}}),n(Object(C.d)(Dt.postDetails)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},G=n(126),H=n(160),K=n(165),Q=n(161);function W(){var e=Object(O.a)(["\n    background-color: #ff7828;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    color: white;\n    height: 5vh;\n"]);return W=function(){return e},e}var Y=D.a.div(W()),Z=function(){return r.a.createElement(Y,null,r.a.createElement("p",null,r.a.createElement("b",null,"Feito por Vin\xedcius Abuhid e Vitor Lopes")))};function $(){var e=Object(O.a)(["\n    &:hover {\n        color: #ff7828\n    }\n"]);return $=function(){return e},e}function ee(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  padding: 10px 20px 20px 50px;\n  color: #4f4f50;\n"]);return ee=function(){return e},e}function te(){var e=Object(O.a)(["\n  color: #ff9800;\n"]);return te=function(){return e},e}function ne(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  padding: 50px 10px 10px 40px;\n  color: #4f4f50;\n"]);return ne=function(){return e},e}function ae(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: #e5e9ed;\n  height: 90vh;\n  padding: 10vh;\n"]);return ae=function(){return e},e}function re(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100vh\n"]);return re=function(){return e},e}var oe=D.a.div(re()),ie=D.a.div(ae()),ce=D.a.form(ne()),ue=(D.a.h2(te()),D.a.div(ee())),le=D.a.p($()),se=function(e){Object(j.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).goToRegistration=function(){a.props.goToSignUp()},a.saveInfo=function(e){var t=e.target,n=t.name,r=t.value;a.setState({userInfo:Object(g.a)({},a.state.userInfo,Object(h.a)({},n,r))})},a.submitLogin=function(e){e.preventDefault(),a.props.sendDataToApi(a.state.userInfo)},a.state={userInfo:{}},a}return Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement(oe,null,r.a.createElement(F,null),r.a.createElement(ie,null,r.a.createElement(G.a,{elevation:10},r.a.createElement(ce,{onSubmit:this.submitLogin},r.a.createElement(H.a,{gutterBottom:!0,variant:"h5",align:"justify"},"Bem Vindo, usu\xe1rio!"),r.a.createElement(K.a,{label:"Email",style:{margin:12},onChange:this.saveInfo,name:"email",type:"text",required:!0}),r.a.createElement(K.a,{label:"Senha",style:{margin:12},onChange:this.saveInfo,name:"password",type:"password",required:!0}),r.a.createElement(ue,null,r.a.createElement(Q.a,{variant:"contained",color:"primary",type:onsubmit},"Entrar")),r.a.createElement(H.a,{gutterBottom:!0,align:"center",variant:"caption"},r.a.createElement(le,{onClick:this.goToRegistration},"Ainda n\xe3o tem cadastro? Clique aqui para cadastrar"))))),r.a.createElement(Z,null))}}]),n}(a.Component);var pe=Object(c.c)(null,(function(e){return{goToSignUp:function(){return e(Object(C.d)(Dt.registrationPage))},sendDataToApi:function(t){return e(X(t))}}}))(se);function fe(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  padding: 10px 20px 20px 50px;\n  color: #4f4f50;\n"]);return fe=function(){return e},e}function me(){var e=Object(O.a)(["\n    &:hover {\n        color: #ff7828\n    }\n"]);return me=function(){return e},e}function de(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  padding: 50px 10px 10px 40px;\n  color: #4f4f50;\n"]);return de=function(){return e},e}function ve(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-around;\n  width: 30vw;\n  height: 85vh;\n  margin: auto;\n  padding-top: 10vh;\n"]);return ve=function(){return e},e}function he(){var e=Object(O.a)(["\n  background-color: #e5e9ed;\n  max-height: 100vh;\n"]);return he=function(){return e},e}var ge=D.a.div(he()),be=D.a.form(ve()),xe=D.a.div(de()),Ee=D.a.u(me()),je=D.a.div(fe()),Oe=function(e){Object(j.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState({userData:Object(g.a)({},a.state.userData,Object(h.a)({},n,r))})},a.sendData=function(e){a.props.sendDataToApi(a.state.userData),e.preventDefault()},a.goToSignInPage=function(){a.props.goToLogIn()},a.state={userData:{}},a}return Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement(ge,null,r.a.createElement(F,null),r.a.createElement(be,{onSubmit:this.sendData},r.a.createElement(G.a,{elevation:10},r.a.createElement(xe,null,r.a.createElement(H.a,{gutterBottom:!0,variant:"h5",align:"justify"},"Crie uma conta para votar e comentar em todos os seus conte\xfados favoritos!"),r.a.createElement(K.a,{label:"Email",style:{margin:12},onChange:this.handleInputChange,name:"email",type:"text",required:!0}),r.a.createElement(K.a,{label:"Senha",style:{margin:12},onChange:this.handleInputChange,name:"password",type:"password",required:!0}),r.a.createElement(K.a,{label:"Nome de usu\xe1rio",style:{margin:12},onChange:this.handleInputChange,name:"username",type:"text",required:!0}),r.a.createElement(je,null,r.a.createElement(Q.a,{variant:"contained",color:"primary",type:onsubmit},"Cadastrar")),r.a.createElement(H.a,{gutterBottom:!0,align:"center",variant:"caption"},"J\xe1 possui uma conta? ",r.a.createElement(Ee,{onClick:this.goToSignInPage},"Fa\xe7a login."))))),r.a.createElement(Z,null))}}]),n}(a.Component);var ye=Object(c.c)(null,(function(e){return{goToSignUp:function(){return e(Object(C.d)(Dt.registrationPage))},goToLogIn:function(){return e(Object(C.d)(Dt.root))},sendDataToApi:function(t){return e(function(e){return function(){var t=Object(N.a)(B.a.mark((function t(n){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.a.post("".concat(R,"/signup"),e);case 3:t.sent,a={email:e.email,password:e.password},n(X(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Oe),we=n(162),Ce=n(53),De=n.n(Ce),ke=n(86),Se=n.n(ke);function Te(){var e=Object(O.a)(["\n  color: #ff7828;\n"]);return Te=function(){return e},e}function Ie(){var e=Object(O.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-right: 20px;\n"]);return Ie=function(){return e},e}function Pe(){var e=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return Pe=function(){return e},e}function Ue(){var e=Object(O.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 3vh;\n    margin-top: 10px;\n"]);return Ue=function(){return e},e}function Le(){var e=Object(O.a)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  color: #4f4f50;\n"]);return Le=function(){return e},e}function Ve(){var e=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Ve=function(){return e},e}var _e=D.a.div(Ve()),Fe=Object(D.a)(G.a)(Le()),qe=D.a.div(Ue()),Be=D.a.div(Pe()),Ne=D.a.div(Ie()),Ae=D.a.h3(Te()),Me=function(e){Object(j.a)(n,e);var t=Object(E.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return r.a.createElement(_e,null,r.a.createElement(Fe,{elevation:10},r.a.createElement("div",{onClick:this.props.seeDetails},r.a.createElement(Ae,null,this.props.post.username),r.a.createElement("h2",null,this.props.post.title),r.a.createElement("p",null,this.props.post.text)),r.a.createElement(Ne,null,r.a.createElement(Be,null,r.a.createElement("div",{onClick:this.props.votePlus},this.props.arrowUp),this.props.post.votesCount,r.a.createElement("div",{onClick:this.props.voteMinus},this.props.arrowDown)),r.a.createElement(qe,null,r.a.createElement(Se.a,{onClick:this.props.seeDetails}),this.props.post.commentsCount))))}}]),n}(r.a.Component),Re=n(38),Xe=n.n(Re),Je=n(39),ze=n.n(Je);function Ge(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 50px 10px 10px 40px;\n  color: #4f4f50;\n"]);return Ge=function(){return e},e}function He(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 15px;\n  width: 40%;\n  border: 1px #ff7828 dotted;\n"]);return He=function(){return e},e}function Ke(){var e=Object(O.a)(["\n  margin: 20px;\n  padding: 15px;\n  width: 40%;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background-color: #e5e9ed;\n  min-height: 90vh;\n"]);return Qe=function(){return e},e}function We(){var e=Object(O.a)(["\n  font-size: 12px;\n  margin: -5px;\n  padding: 0;\n"]);return We=function(){return e},e}function Ye(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  // width: 100%;\n  max-width: 100vw;\n"]);return Ye=function(){return e},e}var Ze=D.a.div(Ye()),$e=D.a.p(We()),et=D.a.div(Qe()),tt=Object(D.a)(G.a)(Ke()),nt=D.a.div(He()),at=D.a.form(Ge()),rt=function(e){Object(j.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).goToPostDetails=function(e){a.props.goToPostInfo(e)},a.setLogout=function(){a.props.goToLogin(),localStorage.clear()},a.sendPostContent=function(e){e.preventDefault(),a.props.sendPostContent(a.state.post),a.setState({post:{}})},a.saveContent=function(e){a.setState({post:Object(g.a)({},a.state.post,Object(h.a)({},e.target.name,e.target.value))})},a.voteUser=function(e,t,n){"vote +1"===e?(1===n?e=0:0!==n&&-1!==n||(e=1),a.props.voteUserDirection(e,t)):(-1===n?e=0:0!==n&&1!==n||(e=-1),a.props.voteUserDirection(e,t))},a.state={post:{}},a}return Object(x.a)(n,[{key:"componentDidMount",value:function(){null===window.localStorage.getItem("token")&&this.props.goToLogin(),this.props.getPosts()}},{key:"render",value:function(){var e=this;return r.a.createElement(Ze,null,r.a.createElement(F,{logOutButton:r.a.createElement(we.a,{onClick:this.setLogout,color:"inherit"},r.a.createElement("div",null,r.a.createElement(De.a,null),r.a.createElement($e,null,"Logout")))}),r.a.createElement(et,null,r.a.createElement(tt,{elevation:10},r.a.createElement(at,{onSubmit:this.sendPostContent},r.a.createElement(H.a,{gutterBottom:!0,variant:"h5",align:"justify"},"Compartilhe algo com o mundo!"),r.a.createElement(K.a,{label:"T\xedtulo do post",style:{margin:12},onChange:this.saveContent,name:"title",type:"text",required:!0,value:this.state.post.title||""}),r.a.createElement(K.a,{label:"conte\xfado do post",style:{margin:12},onChange:this.saveContent,name:"text",type:"text",required:!0,multiline:!0,rows:4,variant:"outlined",value:this.state.post.text||""}),r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"contained",color:"primary",type:onsubmit},"Postar")))),this.props.getMyPosts.map((function(t){return r.a.createElement(nt,{key:t.id},r.a.createElement(Me,{arrowUp:1===t.userVoteDirection?r.a.createElement(Xe.a,{color:"primary"}):r.a.createElement(Xe.a,null),arrowDown:-1===t.userVoteDirection?r.a.createElement(ze.a,{color:"primary"}):r.a.createElement(ze.a,null),seeDetails:function(){return e.goToPostDetails(t.id)},post:t,votePlus:function(){return e.voteUser("vote +1",t.id,t.userVoteDirection)},voteMinus:function(){return e.voteUser("vote -1",t.id,t.userVoteDirection)}}))}))),r.a.createElement(Z,null))}}]),n}(a.Component);var ot=Object(c.c)((function(e){return{getMyPosts:e.posts.postList}}),(function(e){return{getPosts:function(){return e(J())},goToPostInfo:function(t){return e(z(t))},sendPostContent:function(t){return e(function(e){return function(){var t=Object(N.a)(B.a.mark((function t(n){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=window.localStorage.getItem("token");try{M.a.post("".concat(R,"/posts"),e,{headers:{auth:a}}),n(J())}catch(r){alert("Falha na requisi\xe7\xe3o, favor tentar novamente mais tarde"),console.log(r)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},goToLogin:function(){return e(Object(C.d)(Dt.root))},voteUserDirection:function(t,n){return e(function(e,t){return function(){var n=Object(N.a)(B.a.mark((function n(a){var r,o;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=window.localStorage.getItem("token"),o={direction:e},n.prev=2,n.next=5,M.a.put("".concat(R,"/posts/").concat(t,"/vote"),o,{headers:{auth:r}});case 5:n.sent,a(J()),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))(rt);function it(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 15px;\n  width: 100%;\n  border: 1px #ff7828 dotted;\n"]);return it=function(){return e},e}function ct(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-right: 30px;\n"]);return ct=function(){return e},e}function ut(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: row;\n\n"]);return ut=function(){return e},e}function lt(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  padding: 15px;\n  width: 100%;\n"]);return lt=function(){return e},e}function st(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  color: #4f4f50;\n"]);return st=function(){return e},e}function pt(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  background-color: #e5e9ed;\n  min-height:85vh;\n"]);return pt=function(){return e},e}function ft(){var e=Object(O.a)(["\n  font-size: 12px;\n  margin: -5px;\n  padding: 0;\n"]);return ft=function(){return e},e}function mt(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40%;\n  margin: 0 auto;\n  margin-top: 20px;\n"]);return mt=function(){return e},e}function dt(){var e=Object(O.a)(["\n  min-height:100vh;\n"]);return dt=function(){return e},e}var vt=D.a.div(dt()),ht=D.a.div(mt()),gt=D.a.div(ft()),bt=D.a.div(pt()),xt=D.a.form(st()),Et=Object(D.a)(G.a)(lt()),jt=D.a.div(ut()),Ot=D.a.div(ct()),yt=D.a.div(it()),wt=function(e){Object(j.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).setLogout=function(){a.props.goToLogin(),localStorage.clear()},a.saveComment=function(e){a.setState({newComment:e.target.value})},a.sendComment=function(e){e.preventDefault(),a.props.createNewComment(a.state.newComment,a.props.postData.post.id),a.setState({newComment:""})},a.voteUser=function(e,t,n){"vote +1"===e?(1===n?e=0:0!==n&&-1!==n||(e=1),a.props.voteUserDirection(e,t)):(-1===n?e=0:0!==n&&1!==n||(e=-1),a.props.voteUserDirection(e,t))},a.voteUserComment=function(e,t,n,r){"vote +1"===e?(1===r?e=0:0!==r&&-1!==r||(e=1),a.props.commentVoteUserDirection(e,t,n)):(-1===r?e=0:0!==r&&1!==r||(e=-1),a.props.commentVoteUserDirection(e,t,n))},a.state={newComment:"",arrows:{up:"",down:""}},a}return Object(x.a)(n,[{key:"componentDidMount",value:function(){null===window.localStorage.getItem("token")&&this.props.goToLogin()}},{key:"render",value:function(){var e=this,t=this.props.postData.post,n="";return this.props.postData?n=r.a.createElement(ht,null,r.a.createElement(yt,null,r.a.createElement(Me,{post:t,arrowUp:1===t.userVoteDirection?r.a.createElement(Xe.a,{color:"primary"}):r.a.createElement(Xe.a,null),arrowDown:-1===t.userVoteDirection?r.a.createElement(ze.a,{color:"primary"}):r.a.createElement(ze.a,null),votePlus:function(){return e.voteUser("vote +1",t.id,t.userVoteDirection)},voteMinus:function(){return e.voteUser("vote -1",t.id,t.userVoteDirection)}})),r.a.createElement(Et,{elevation:10},r.a.createElement(xt,{onSubmit:this.sendComment},r.a.createElement(K.a,{label:"Comentar",style:{margin:12},onChange:this.saveComment,value:this.state.newComment,name:"text",type:"text",required:!0,multiline:!0,variant:"outlined"}),r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"contained",color:"primary",type:onsubmit},"enviar")))),t.comments.map((function(n,a){var o=function(){return e.voteUserComment("vote +1",t.id,n.id,n.userVoteDirection)},i=1===n.userVoteDirection?r.a.createElement(Xe.a,{color:"primary",onClick:o}):r.a.createElement(Xe.a,{onClick:o}),c=function(){return e.voteUserComment("vote -1",t.id,n.id,n.userVoteDirection)},u=-1===n.userVoteDirection?r.a.createElement(ze.a,{color:"primary",onClick:c}):r.a.createElement(ze.a,{onClick:c});return r.a.createElement(Et,{key:a,elevation:10},r.a.createElement("div",null,r.a.createElement(H.a,{display:"inline",variant:"body2"},r.a.createElement(H.a,{gutterBottom:!0,variant:"h6",color:"primary",display:"inline"},"".concat(n.username," ")),"respondeu:")),r.a.createElement(jt,null,r.a.createElement(Ot,null,i,n.votesCount||0,u),r.a.createElement("div",null,n.text)))}))):this.props.goToPostFeed(),r.a.createElement(vt,null,r.a.createElement(F,{logOutButton:r.a.createElement(we.a,{onClick:this.setLogout,color:"inherit"},r.a.createElement("div",null,r.a.createElement(De.a,null),r.a.createElement(gt,null,"Logout")))}),r.a.createElement(bt,null,n),r.a.createElement(Z,null))}}]),n}(a.Component);var Ct=Object(c.c)((function(e){return{postData:e.posts.postChoose}}),(function(e){return{goToLogin:function(){return e(Object(C.d)(Dt.root))},goToPostFeed:function(){return e(Object(C.d)(Dt.postFeed))},createNewComment:function(t,n){return e(function(e,t){return function(){var n=Object(N.a)(B.a.mark((function n(a){var r,o;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=window.localStorage.getItem("token"),o={text:e},n.prev=2,n.next=5,M.a.post("".concat(R,"/posts/").concat(t,"/comment"),o,{headers:{auth:r}});case 5:n.sent,a(z(t)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},voteUserDirection:function(t,n){return e(function(e,t){return function(){var n=Object(N.a)(B.a.mark((function n(a){var r,o;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=window.localStorage.getItem("token"),o={direction:e},n.prev=2,n.next=5,M.a.put("".concat(R,"/posts/").concat(t,"/vote"),o,{headers:{auth:r}});case 5:n.sent,a(z(t)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},commentVoteUserDirection:function(t,n,a){return e(function(e,t,n){return function(){var a=Object(N.a)(B.a.mark((function a(r){var o,i;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=window.localStorage.getItem("token"),i={direction:e},a.prev=2,a.next=5,M.a.put("".concat(R,"/posts/").concat(t,"/comment/").concat(n,"/vote"),i,{headers:{auth:o}});case 5:a.sent,r(z(t)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}}))(wt),Dt={root:"/",registrationPage:"/signup",postFeed:"/posts",postDetails:"/posts/detail"};var kt,St=function(e){return r.a.createElement(d.a,{history:e.history},r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:Dt.root,component:pe}),r.a.createElement(v.a,{exact:!0,path:Dt.registrationPage,component:ye}),r.a.createElement(v.a,{exact:!0,path:Dt.postFeed,component:ot}),r.a.createElement(v.a,{exact:!0,path:Dt.postDetails,component:Ct})))},Tt=n(28),It=n(36),Pt={postList:[],postChoose:""},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ POSTS":return Object(g.a)({},e,{postList:t.payload.posts});case"SEND_ID":return Object(g.a)({},e,{postChoose:t.payload.postInfo});default:return e}},Lt=n(77),Vt=Object(Tt.a)(),_t=[Object(It.a)(Object(Lt.a)(Vt),u.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],Ft=Object(It.e)((kt=Vt,Object(It.c)({router:Object(d.b)(kt),posts:Ut})),It.d.apply(void 0,_t)),qt=function(){return r.a.createElement(c.a,{store:Ft},r.a.createElement(l.a,{theme:m},r.a.createElement(s.a,null),r.a.createElement(St,{history:Vt})))},Bt=document.getElementById("root");i.a.render(r.a.createElement(qt,null),Bt)},96:function(e,t,n){e.exports=n(124)}},[[96,1,2]]]);
//# sourceMappingURL=main.f90fc425.chunk.js.map