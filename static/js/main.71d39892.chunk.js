(this.webpackJsonpimagefinder=this.webpackJsonpimagefinder||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=(a(79),a(15)),i=a(146),u=a(148),m=a(144),s=a(150),g=a(61),p=a.n(g),d=a(131),b=a(134),E=a(136),f=a(137),h=a(138),v=a(139),y=a(140),x=a(66),O=a.n(x),j=a(64),w=a.n(j),k=a(65),C=a.n(k),S=a(147),B=a(141);function T(e){var t=e.images,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],i=r[1],u=Object(d.a)((function(e){return{appBar:{position:"relative"},root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))(),m=l.a.useState(!1),s=Object(o.a)(m,2),g=s[0],p=s[1],x=function(e){i(e),p(!0)},j=function(){p(!1)};return l.a.createElement("div",{className:u.root},l.a.createElement(b.a,{cellHeight:180,cols:3,style:{minHeight:"80vh"}},t.map((function(e){return l.a.createElement(E.a,{key:e.id},l.a.createElement("img",{src:e.webformatURL,alt:"",onClick:function(){x(e.largeImageURL)}}),l.a.createElement(f.a,{title:e.tags,subtitle:l.a.createElement("span",null,e.user?"by:":null," ",e.user),actionIcon:l.a.createElement(h.a,{"aria-label":"info about ".concat(e.title),className:u.icon,onClick:function(){x(e.largeImageURL)},name:e.webformatURL},l.a.createElement(w.a,null))}))}))),l.a.createElement(S.a,{style:{padding:"0"},fullScreen:!0,onClose:j,"aria-labelledby":"customized-dialog-title",open:g},l.a.createElement(v.a,{className:u.appBar},l.a.createElement(y.a,null,l.a.createElement(h.a,{edge:"start",color:"inherit",onClick:j,"aria-label":"close"},l.a.createElement(C.a,null)),l.a.createElement("a",{href:c,download:!0,target:"_blank",title:"Download"},l.a.createElement(h.a,{edge:"end",color:"inherit","aria-label":"download"},l.a.createElement(O.a,null))))),l.a.createElement(B.a,{style:{padding:"0",margin:"auto"}},l.a.createElement("img",{style:{maxWidth:"100%",maxHeight:"100%",margin:"auto"},src:c,alt:""}))),l.a.createElement("footer",{style:{height:"2rem",marginTop:"1rem",background:"#333",bottom:"0px",width:"100%",color:"#eee",textAlign:"center",paddingTop:"1rem"}},"Nandan Kumar, \xa9 2020"))}function I(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),g=Object(o.a)(c,2),d=g[0],b=g[1],E=Object(n.useState)(10),f=Object(o.a)(E,2),h=f[0],v=f[1],y=Object(n.useState)(!1),x=Object(o.a)(y,2),O=x[0],j=x[1],w=Object(n.useState)(!1),k=Object(o.a)(w,2),C=k[0],S=k[1],B=Object(n.useState)("Pixabay"),I=Object(o.a)(B,2),L=I[0],U=I[1],N=Object(n.useState)(setTimeout((function(){}),1e3)),P=Object(o.a)(N,2),H=P[0],R=P[1];return Object(n.useEffect)((function(){return clearTimeout(H),void R(setTimeout((function(){p.a.get("http://imageseeker.herokuapp.com/".concat(L.toLowerCase(),"/?q=").concat(d,"&hits=").concat(h)).then((function(e){r(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),1e3))}),[h,d,L]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{background:"#333",textAlign:"center",color:"#eee",padding:"10px",marginBottom:"1rem"}},l.a.createElement("h1",{style:{margin:0}},"Image Finder")),l.a.createElement(i.a,{id:"outlined-basic",label:"Search Images",variant:"outlined",defaultValue:d,fullWidth:!0,onChange:function(e){return b(e.target.value)}}),l.a.createElement(u.a,{style:{width:"100px",marginTop:"5px"}},l.a.createElement("em",null,"Hits")),l.a.createElement(m.a,{style:{width:"100px",marginBottom:"8px"},open:O,onClose:function(){return j(!1)},onOpen:function(){return j(!0)},value:h,onChange:function(e){return v(e.target.value)}},l.a.createElement(s.a,{value:5},"5"),l.a.createElement(s.a,{value:10},"10"),l.a.createElement(s.a,{value:20},"20"),l.a.createElement(s.a,{value:30},"30"),l.a.createElement(s.a,{value:50},"50")),l.a.createElement(u.a,{style:{width:"100px",marginTop:"5px"}},l.a.createElement("em",null,"Source")),l.a.createElement(m.a,{style:{width:"100px",marginBottom:"8px"},open:C,onClose:function(){return S(!1)},onOpen:function(){return S(!0)},value:L,onChange:function(e){return U(e.target.value)}},l.a.createElement(s.a,{value:"Pixabay"},"Pixabay"),l.a.createElement(s.a,{value:"Unsplash"},"Unsplash"),l.a.createElement(s.a,{value:"Pexels"},"Pexels"),l.a.createElement(s.a,{value:"Giphy"},"Giphy")),a.length?l.a.createElement(T,{images:a}):" ")}var L=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(I,null))};c.a.render(l.a.createElement(L,null),document.getElementById("root"))},74:function(e,t,a){e.exports=a(102)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.71d39892.chunk.js.map