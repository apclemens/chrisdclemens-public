(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2dz/":function(e,t,n){},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,i=n("q1tI"),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function d(){u=e(l.map((function(e){return e.props}))),s.canUseDOM?t(u):n&&(u=n(u))}var s=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),d()},a.componentDidUpdate=function(){d()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(s,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(s,"canUseDOM",c),s}}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n("dRSK");var r=n("Cvgj"),i=n("q1tI"),o=n.n(i),a=n("Wbzz"),c=n("7o+z"),u=n("vrFN"),l=(n("9eSz"),n("bb4b")),d=n.n(l);n("t+Ps"),n("2dz/");var s=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){return o.a.createElement(a.StaticQuery,{query:"1970426093",render:function(e){return o.a.createElement(d.a,{className:"front"},o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:"Chris D Clemens"}),o.a.createElement("header",null,o.a.createElement(a.Link,{id:"front-title",to:"/"},"Chris Clemens")),o.a.createElement("div",{id:"front-links"},o.a.createElement(c.a,{link:"/commissioned",text:"Commissioned Work",image:e.allFile.edges.find((function(e){return"front/other.png"===e.node.relativePath})).node.childImageSharp.fluid}),o.a.createElement(c.a,{link:"/comics",text:"Comics",image:e.allFile.edges.find((function(e){return"front/comics.png"===e.node.relativePath})).node.childImageSharp.fluid}),o.a.createElement(c.a,{link:"/videos",text:"videos",image:e.allFile.edges.find((function(e){return"front/videos.png"===e.node.relativePath})).node.childImageSharp.fluid}),o.a.createElement(c.a,{link:"/original",text:"Original Articles",image:e.allFile.edges.find((function(e){return"front/original.png"===e.node.relativePath})).node.childImageSharp.fluid}),o.a.createElement(c.a,{link:"/drawings",text:"Drawings",image:e.allFile.edges.find((function(e){return"front/drawings.jpg"===e.node.relativePath})).node.childImageSharp.fluid}),o.a.createElement(c.a,{link:"/about",text:"About",image:e.allFile.edges.find((function(e){return"front/about.jpeg"===e.node.relativePath})).node.childImageSharp.fluid}))))},data:r})},i}(o.a.Component)},Tze0:function(e,t,n){"use strict";n("qncB")("trim",(function(e){return function(){return e(this,3)}}))},bb4b:function(e,t,n){"use strict";n("Tze0"),n("V+eJ"),n("bWfx"),n("0l/t"),n("KKXr");var r=n("q1tI"),i=n("8+s/"),o=n("17x9");function a(e){return e.split(/\s+/)}function c(e){return e.children?r.Children.only(e.children):null}c.displayName="BodyClassName",c.cache=[],c.propTypes={className:o.string.isRequired},e.exports=i((function(e){return e.map((function(e){return e.className})).filter((function(e,t,n){return n.indexOf(e)===t})).join(" ")}),(function(e){var t=a(document.body.className).filter((function(e){return-1===c.cache.indexOf(e)})),n=a(e);c.cache=n,document.body.className=t.concat(n).join(" ").trim()}))(c)},rq6D:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},"t+Ps":function(e,t,n){},vrFN:function(e,t,n){"use strict";var r=n("rq6D"),i=n("q1tI"),o=n.n(i),a=n("TJpk"),c=n.n(a);function u(e){var t=e.description,n=e.lang,i=e.meta,a=e.title,u=r.data.site,l=t||u.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s",meta:[{name:"description",content:l},{property:"og:title",content:a},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:a},{name:"twitter:description",content:l}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""},t.a=u}}]);
//# sourceMappingURL=component---src-pages-index-js-02b98cd49f15c9845e97.js.map