(this.webpackJsonpimagefinder=this.webpackJsonpimagefinder||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),o=(a(79),a(17)),i=a(146),m=a(148),u=a(144),s=a(150),g=a(61),d=a.n(g),p=a(131),b=a(134),f=a(136),E=a(137),h=a(138),v=a(139),y=a(140),j=a(66),O=a.n(j),w=a(64),x=a.n(w),k=a(65),C=a.n(k),S=a(147),B=a(141);function I(e){var t=e.images,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],i=r[1],m=Object(p.a)((function(e){return{appBar:{position:"relative"},root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))(),u=l.a.useState(!1),s=Object(o.a)(u,2),g=s[0],d=s[1],j=function(e){i(e),d(!0)},w=function(){d(!1)};return l.a.createElement("div",{className:m.root},l.a.createElement(b.a,{cellHeight:180,cols:3,style:{minHeight:"80vh"}},t.map((function(e){return l.a.createElement(f.a,{key:e.previewURL},l.a.createElement("img",{src:e.webformatURL,alt:e.tags,onClick:function(){j(e.largeImageURL)}}),l.a.createElement(E.a,{title:e.tags,subtitle:l.a.createElement("span",null,"by: ",e.user),actionIcon:l.a.createElement(h.a,{"aria-label":"info about ".concat(e.title),className:m.icon,onClick:function(){j(e.largeImageURL)},name:e.webformatURL},l.a.createElement(x.a,null))}))}))),l.a.createElement(S.a,{style:{padding:"0"},fullScreen:!0,onClose:w,"aria-labelledby":"customized-dialog-title",open:g},l.a.createElement(v.a,{className:m.appBar},l.a.createElement(y.a,null,l.a.createElement(h.a,{edge:"start",color:"inherit",onClick:w,"aria-label":"close"},l.a.createElement(C.a,null)),l.a.createElement("a",{href:c,download:!0,target:"_blank",title:"Download"},l.a.createElement(h.a,{edge:"end",color:"inherit","aria-label":"download"},l.a.createElement(O.a,null))))),l.a.createElement(B.a,{dividers:!0,style:{padding:"0",margin:"auto"}},l.a.createElement("img",{style:{maxWidth:"100%",maxHeight:"100%",margin:"auto"},src:c,alt:""}))),l.a.createElement("footer",{style:{height:"2rem",marginTop:"1rem",background:"#333",bottom:"0px",width:"100%",color:"#eee",textAlign:"center",paddingTop:"1rem"}},"Nandan Kumar, \xa9 2020"))}function L(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),g=Object(o.a)(c,2),p=g[0],b=g[1],f=Object(n.useState)(5),E=Object(o.a)(f,2),h=E[0],v=E[1],y=Object(n.useState)(!1),j=Object(o.a)(y,2),O=j[0],w=j[1],x=Object(n.useState)(""),k=Object(o.a)(x,2);k[0],k[1];return Object(n.useEffect)((function(){d.a.get("https://pixabay.com/api/?key=14838845-97aff471166809fe19bd2c3a9&q="+p+"&image_type=photo&per_page="+h).then((function(e){r(e.data.hits)})).catch((function(e){console.log(e)}))}),[h,p]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{background:"#333",textAlign:"center",color:"#eee",padding:"10px",marginBottom:"1rem"}},l.a.createElement("h1",{style:{margin:0}},"Image Finder")),l.a.createElement(i.a,{id:"outlined-basic",label:"Search Images",variant:"outlined",defaultValue:p,fullWidth:!0,onChange:function(e){return b(e.target.value)}}),l.a.createElement(m.a,{style:{width:"100px",marginTop:"5px"}},l.a.createElement("em",null,"Hits")),l.a.createElement(u.a,{style:{width:"100px",marginBottom:"8px"},open:O,onClose:function(){return w(!1)},onOpen:function(){return w(!0)},value:h,onChange:function(e){return v(e.target.value)}},l.a.createElement(s.a,{value:5},"5"),l.a.createElement(s.a,{value:10},"10"),l.a.createElement(s.a,{value:20},"20"),l.a.createElement(s.a,{value:30},"30"),l.a.createElement(s.a,{value:50},"50")),a.length?l.a.createElement(I,{images:a}):" ")}var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(L,null))};c.a.render(l.a.createElement(N,null),document.getElementById("root"))},74:function(e,t,a){e.exports=a(102)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.1e2eca1c.chunk.js.map