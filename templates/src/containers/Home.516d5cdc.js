webpackJsonp([0],{154:function(e,t,a){"use strict";function n(e){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]="number"==typeof e[a]?e[a]:e[a].val);return t}t.__esModule=!0,t.default=n,e.exports=t.default},155:function(e,t,a){"use strict";function n(e){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=0);return t}t.__esModule=!0,t.default=n,e.exports=t.default},156:function(e,t,a){"use strict";function n(e,t,a,n,l,i,o){var s=-l*(t-n),u=-i*a,c=s+u,f=a+c*e,d=t+f*e;return Math.abs(f)<o&&Math.abs(d-n)<o?(r[0]=n,r[1]=0,r):(r[0]=d,r[1]=f,r)}t.__esModule=!0,t.default=n;var r=[0,0];e.exports=t.default},157:function(e,t,a){(function(t){(function(){var a,n,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(a()-r)/1e6},n=t.hrtime,a=function(){var e;return e=n(),1e9*e[0]+e[1]},r=a()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,a(11))},158:function(e,t,a){"use strict";function n(e,t,a){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(0!==a[n])return!1;var r="number"==typeof t[n]?t[n]:t[n].val;if(e[n]!==r)return!1}return!0}t.__esModule=!0,t.default=n,e.exports=t.default},159:function(e,t,a){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},160:function(e,t,a){e.exports=a.p+"static/logo.9ff8fc2e.png"},161:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var r=a(162);t.Motion=n(r);var l=a(163);t.StaggeredMotion=n(l);var i=a(164);t.TransitionMotion=n(i);var o=a(166);t.spring=n(o);var s=a(159);t.presets=n(s);var u=a(154);t.stripStyle=n(u);var c=a(167);t.reorderKeys=n(c)},162:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(155),u=n(s),c=a(154),f=n(c),d=a(156),p=n(d),m=a(157),y=n(m),h=a(28),v=n(h),b=a(158),g=n(b),E=a(0),S=n(E),_=a(1),w=n(_),k=1e3/60,O=function(e){function t(a){var n=this;r(this,t),e.call(this,a),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,a=n.state,r=a.currentStyle,l=a.currentVelocity,o=a.lastIdealStyle,s=a.lastIdealVelocity;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c=e[u];"number"==typeof c&&(t||(t=!0,r=i({},r),l=i({},l),o=i({},o),s=i({},s)),r[u]=c,l[u]=0,o[u]=c,s[u]=0)}t&&n.setState({currentStyle:r,currentVelocity:l,lastIdealStyle:o,lastIdealVelocity:s})},this.startAnimationIfNecessary=function(){n.animationID=v.default(function(e){var t=n.props.style;if(g.default(n.state.currentStyle,t,n.state.currentVelocity))return n.wasAnimating&&n.props.onRest&&n.props.onRest(),n.animationID=null,n.wasAnimating=!1,void(n.accumulatedTime=0);n.wasAnimating=!0;var a=e||y.default(),r=a-n.prevTime;if(n.prevTime=a,n.accumulatedTime=n.accumulatedTime+r,n.accumulatedTime>10*k&&(n.accumulatedTime=0),0===n.accumulatedTime)return n.animationID=null,void n.startAnimationIfNecessary();var l=(n.accumulatedTime-Math.floor(n.accumulatedTime/k)*k)/k,i=Math.floor(n.accumulatedTime/k),o={},s={},u={},c={};for(var f in t)if(Object.prototype.hasOwnProperty.call(t,f)){var d=t[f];if("number"==typeof d)u[f]=d,c[f]=0,o[f]=d,s[f]=0;else{for(var m=n.state.lastIdealStyle[f],h=n.state.lastIdealVelocity[f],v=0;v<i;v++){var b=p.default(k/1e3,m,h,d.val,d.stiffness,d.damping,d.precision);m=b[0],h=b[1]}var E=p.default(k/1e3,m,h,d.val,d.stiffness,d.damping,d.precision),S=E[0],_=E[1];u[f]=m+(S-m)*l,c[f]=h+(_-h)*l,o[f]=m,s[f]=h}}n.animationID=null,n.accumulatedTime-=i*k,n.setState({currentStyle:u,currentVelocity:c,lastIdealStyle:o,lastIdealVelocity:s}),n.unreadPropStyle=null,n.startAnimationIfNecessary()})},this.state=this.defaultState()}return l(t,e),o(t,null,[{key:"propTypes",value:{defaultStyle:w.default.objectOf(w.default.number),style:w.default.objectOf(w.default.oneOfType([w.default.number,w.default.object])).isRequired,children:w.default.func.isRequired,onRest:w.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,a=e.style,n=t||f.default(a),r=u.default(n);return{currentStyle:n,currentVelocity:r,lastIdealStyle:n,lastIdealVelocity:r}},t.prototype.componentDidMount=function(){this.prevTime=y.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=y.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(v.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&S.default.Children.only(e)},t}(S.default.Component);t.default=O,e.exports=t.default},163:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,a){for(var n=0;n<e.length;n++)if(!E.default(e[n],t[n],a[n]))return!1;return!0}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(155),c=n(u),f=a(154),d=n(f),p=a(156),m=n(p),y=a(157),h=n(y),v=a(28),b=n(v),g=a(158),E=n(g),S=a(0),_=n(S),w=a(1),k=n(w),O=1e3/60,T=function(e){function t(a){var n=this;r(this,t),e.call(this,a),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=n.state,a=t.currentStyles,r=t.currentVelocities,l=t.lastIdealStyles,i=t.lastIdealVelocities,s=!1,u=0;u<e.length;u++){var c=e[u],f=!1;for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var p=c[d];"number"==typeof p&&(f||(f=!0,s=!0,a[u]=o({},a[u]),r[u]=o({},r[u]),l[u]=o({},l[u]),i[u]=o({},i[u])),a[u][d]=p,r[u][d]=0,l[u][d]=p,i[u][d]=0)}}s&&n.setState({currentStyles:a,currentVelocities:r,lastIdealStyles:l,lastIdealVelocities:i})},this.startAnimationIfNecessary=function(){n.animationID=b.default(function(e){var t=n.props.styles(n.state.lastIdealStyles);if(i(n.state.currentStyles,t,n.state.currentVelocities))return n.animationID=null,void(n.accumulatedTime=0);var a=e||h.default(),r=a-n.prevTime;if(n.prevTime=a,n.accumulatedTime=n.accumulatedTime+r,n.accumulatedTime>10*O&&(n.accumulatedTime=0),0===n.accumulatedTime)return n.animationID=null,void n.startAnimationIfNecessary();for(var l=(n.accumulatedTime-Math.floor(n.accumulatedTime/O)*O)/O,o=Math.floor(n.accumulatedTime/O),s=[],u=[],c=[],f=[],d=0;d<t.length;d++){var p=t[d],y={},v={},b={},g={};for(var E in p)if(Object.prototype.hasOwnProperty.call(p,E)){var S=p[E];if("number"==typeof S)y[E]=S,v[E]=0,b[E]=S,g[E]=0;else{for(var _=n.state.lastIdealStyles[d][E],w=n.state.lastIdealVelocities[d][E],k=0;k<o;k++){var T=m.default(O/1e3,_,w,S.val,S.stiffness,S.damping,S.precision);_=T[0],w=T[1]}var P=m.default(O/1e3,_,w,S.val,S.stiffness,S.damping,S.precision),I=P[0],N=P[1];y[E]=_+(I-_)*l,v[E]=w+(N-w)*l,b[E]=_,g[E]=w}}c[d]=y,f[d]=v,s[d]=b,u[d]=g}n.animationID=null,n.accumulatedTime-=o*O,n.setState({currentStyles:c,currentVelocities:f,lastIdealStyles:s,lastIdealVelocities:u}),n.unreadPropStyles=null,n.startAnimationIfNecessary()})},this.state=this.defaultState()}return l(t,e),s(t,null,[{key:"propTypes",value:{defaultStyles:k.default.arrayOf(k.default.objectOf(k.default.number)),styles:k.default.func.isRequired,children:k.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,a=e.styles,n=t||a().map(d.default),r=n.map(function(e){return c.default(e)});return{currentStyles:n,currentVelocities:r,lastIdealStyles:n,lastIdealVelocities:r}},t.prototype.componentDidMount=function(){this.prevTime=h.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=h.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(b.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&_.default.Children.only(e)},t}(_.default.Component);t.default=T,e.exports=t.default},164:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,a){var n=t;return null==n?e.map(function(e,t){return{key:e.key,data:e.data,style:a[t]}}):e.map(function(e,t){for(var r=0;r<n.length;r++)if(n[r].key===e.key)return{key:n[r].key,data:n[r].data,style:a[t]};return{key:e.key,data:e.data,style:a[t]}})}function o(e,t,a,n){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(n[r].key!==t[r].key)return!1;for(var r=0;r<n.length;r++)if(!k.default(e[r],t[r].style,a[r]))return!1;return!0}function s(e,t,a,n,r,l,i,o,s){for(var u=b.default(n,r,function(e,n){var r=t(n);return null==r?(a({key:n.key,data:n.data}),null):k.default(l[e],r,i[e])?(a({key:n.key,data:n.data}),null):{key:n.key,data:n.data,style:r}}),c=[],f=[],p=[],m=[],y=0;y<u.length;y++){for(var h=u[y],v=null,g=0;g<n.length;g++)if(n[g].key===h.key){v=g;break}if(null==v){var E=e(h);c[y]=E,p[y]=E;var S=d.default(h.style);f[y]=S,m[y]=S}else c[y]=l[v],p[y]=o[v],f[y]=i[v],m[y]=s[v]}return[u,c,f,p,m]}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(155),d=n(f),p=a(154),m=n(p),y=a(156),h=n(y),v=a(165),b=n(v),g=a(157),E=n(g),S=a(28),_=n(S),w=a(158),k=n(w),O=a(0),T=n(O),P=a(1),I=n(P),N=1e3/60,x=function(e){function t(a){var n=this;r(this,t),e.call(this,a),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=s(n.props.willEnter,n.props.willLeave,n.props.didLeave,n.state.mergedPropsStyles,e,n.state.currentStyles,n.state.currentVelocities,n.state.lastIdealStyles,n.state.lastIdealVelocities),a=t[0],r=t[1],l=t[2],i=t[3],o=t[4],c=0;c<e.length;c++){var f=e[c].style,d=!1;for(var p in f)if(Object.prototype.hasOwnProperty.call(f,p)){var m=f[p];"number"==typeof m&&(d||(d=!0,r[c]=u({},r[c]),l[c]=u({},l[c]),i[c]=u({},i[c]),o[c]=u({},o[c]),a[c]={key:a[c].key,data:a[c].data,style:u({},a[c].style)}),r[c][p]=m,l[c][p]=0,i[c][p]=m,o[c][p]=0,a[c].style[p]=m)}}n.setState({currentStyles:r,currentVelocities:l,mergedPropsStyles:a,lastIdealStyles:i,lastIdealVelocities:o})},this.startAnimationIfNecessary=function(){n.unmounting||(n.animationID=_.default(function(e){if(!n.unmounting){var t=n.props.styles,a="function"==typeof t?t(i(n.state.mergedPropsStyles,n.unreadPropStyles,n.state.lastIdealStyles)):t;if(o(n.state.currentStyles,a,n.state.currentVelocities,n.state.mergedPropsStyles))return n.animationID=null,void(n.accumulatedTime=0);var r=e||E.default(),l=r-n.prevTime;if(n.prevTime=r,n.accumulatedTime=n.accumulatedTime+l,n.accumulatedTime>10*N&&(n.accumulatedTime=0),0===n.accumulatedTime)return n.animationID=null,void n.startAnimationIfNecessary();for(var u=(n.accumulatedTime-Math.floor(n.accumulatedTime/N)*N)/N,c=Math.floor(n.accumulatedTime/N),f=s(n.props.willEnter,n.props.willLeave,n.props.didLeave,n.state.mergedPropsStyles,a,n.state.currentStyles,n.state.currentVelocities,n.state.lastIdealStyles,n.state.lastIdealVelocities),d=f[0],p=f[1],m=f[2],y=f[3],v=f[4],b=0;b<d.length;b++){var g=d[b].style,S={},_={},w={},k={};for(var O in g)if(Object.prototype.hasOwnProperty.call(g,O)){var T=g[O];if("number"==typeof T)S[O]=T,_[O]=0,w[O]=T,k[O]=0;else{for(var P=y[b][O],I=v[b][O],x=0;x<c;x++){var M=h.default(N/1e3,P,I,T.val,T.stiffness,T.damping,T.precision);P=M[0],I=M[1]}var j=h.default(N/1e3,P,I,T.val,T.stiffness,T.damping,T.precision),C=j[0],A=j[1];S[O]=P+(C-P)*u,_[O]=I+(A-I)*u,w[O]=P,k[O]=I}}y[b]=w,v[b]=k,p[b]=S,m[b]=_}n.animationID=null,n.accumulatedTime-=c*N,n.setState({currentStyles:p,currentVelocities:m,lastIdealStyles:y,lastIdealVelocities:v,mergedPropsStyles:d}),n.unreadPropStyles=null,n.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return l(t,e),c(t,null,[{key:"propTypes",value:{defaultStyles:I.default.arrayOf(I.default.shape({key:I.default.string.isRequired,data:I.default.any,style:I.default.objectOf(I.default.number).isRequired})),styles:I.default.oneOfType([I.default.func,I.default.arrayOf(I.default.shape({key:I.default.string.isRequired,data:I.default.any,style:I.default.objectOf(I.default.oneOfType([I.default.number,I.default.object])).isRequired}))]).isRequired,children:I.default.func.isRequired,willEnter:I.default.func,willLeave:I.default.func,didLeave:I.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return m.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,a=e.styles,n=e.willEnter,r=e.willLeave,l=e.didLeave,i="function"==typeof a?a(t):a,o=void 0;o=null==t?i:t.map(function(e){for(var t=0;t<i.length;t++)if(i[t].key===e.key)return i[t];return e});var u=null==t?i.map(function(e){return m.default(e.style)}):t.map(function(e){return m.default(e.style)}),c=null==t?i.map(function(e){return d.default(e.style)}):t.map(function(e){return d.default(e.style)}),f=s(n,r,l,o,i,u,c,u,c),p=f[0];return{currentStyles:f[1],currentVelocities:f[2],lastIdealStyles:f[3],lastIdealVelocities:f[4],mergedPropsStyles:p}},t.prototype.componentDidMount=function(){this.prevTime=E.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=E.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(_.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&T.default.Children.only(t)},t}(T.default.Component);t.default=x,e.exports=t.default},165:function(e,t,a){"use strict";function n(e,t,a){for(var n={},r=0;r<e.length;r++)n[e[r].key]=r;for(var l={},r=0;r<t.length;r++)l[t[r].key]=r;for(var i=[],r=0;r<t.length;r++)i[r]=t[r];for(var r=0;r<e.length;r++)if(!Object.prototype.hasOwnProperty.call(l,e[r].key)){var o=a(r,e[r]);null!=o&&i.push(o)}return i.sort(function(e,a){var r=l[e.key],i=l[a.key],o=n[e.key],s=n[a.key];if(null!=r&&null!=i)return l[e.key]-l[a.key];if(null!=o&&null!=s)return n[e.key]-n[a.key];if(null!=r){for(var u=0;u<t.length;u++){var c=t[u].key;if(Object.prototype.hasOwnProperty.call(n,c)){if(r<l[c]&&s>n[c])return-1;if(r>l[c]&&s<n[c])return 1}}return 1}for(var u=0;u<t.length;u++){var c=t[u].key;if(Object.prototype.hasOwnProperty.call(n,c)){if(i<l[c]&&o>n[c])return 1;if(i>l[c]&&o<n[c])return-1}}return-1})}t.__esModule=!0,t.default=n,e.exports=t.default},166:function(e,t,a){"use strict";function n(e,t){return r({},o,t,{val:e})}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=n;var l=a(159),i=function(e){return e&&e.__esModule?e:{default:e}}(l),o=r({},i.default.noWobble,{precision:.01});e.exports=t.default},167:function(e,t,a){"use strict";function n(){}t.__esModule=!0,t.default=n;e.exports=t.default},56:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),u=n(s),c=a(29),f=a(160),d=(n(f),a(57)),p=n(d),m=a(58),y=a(161),h=a(59),v=n(h),b=a(55),g=n(b),E=(0,g.default)(),S=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={pathname:"home",logo:!1,main_logo:!1,name:!1,biomechanics:!1,neuroscience:!1,face:!1},a}return i(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this,t=location.pathname.split("/")[1];console.log("Chase G Rock"),e.setState({pathname:location.pathname.split("/")[1]}),setTimeout(function(){console.log("logo"),e.setState({logo:!0})},750),setTimeout(function(){console.log("name"),e.setState({name:!0})},1e3),setTimeout(function(){console.log("biomechanics"),e.setState({biomechanics:!0})},1250),setTimeout(function(){console.log("neuroscience"),e.setState({neuroscience:!0})},1450),setTimeout(function(){console.log("face"),e.setState({face:!0})},1700),t.length&&setTimeout(function(){console.log("scroller"),m.scroller.scrollTo(t,{duration:500,delay:100,smooth:!0})},2500)}},{key:"_setMainLogo",value:function(){this.setState({main_logo:!0})}},{key:"_setMessage",value:function(e){E.replace("/"+e)}},{key:"_onEnter",value:function(e,t){"above"==t.previousPosition&&E.replace("/"+e)}},{key:"_onLeave",value:function(e,t){"above"==t.currentPosition&&E.replace("/"+e)}},{key:"render",value:function(){var e=this.state,t=(e.pathname,e.logo),a=e.name,n=e.biomechanics,r=e.neuroscience,l=e.face,i=e.main_logo;return u.default.createElement("div",null,u.default.createElement("div",{className:"home_wrapper"},u.default.createElement("div",{className:"title_wrapper"},t?u.default.createElement(y.Motion,{key:"main_logo",defaultStyle:{x:400,opacity:-1},style:{x:(0,y.spring)(0),opacity:(0,y.spring)(1,y.presets.gentle)},onRest:this._setMainLogo.bind(this)},function(e){return u.default.createElement("svg",{className:i?(0,p.default)("main_logo_finished","chase_logo"):"chase_logo",x:"0px",y:"0px",viewBox:"0 0 125.7 197.3"},u.default.createElement("polygon",{id:"c_top",className:"c",style:{WebkitTransform:"translateX("+-e.x+"px)",transform:"translateX("+-e.x+"px)",opacity:e.opacity},points:"62.8,85.9 87.9,60.8 98.6,50.1 98.6,0 37.8,60.8 "}),u.default.createElement("g",{id:"R",className:"r",style:{WebkitTransform:"translateX("+e.x+"px)",transform:"translateX("+e.x+"px)",opacity:e.opacity}},u.default.createElement("polygon",{id:"r_top",points:"125.7,98.6 102.9,75.9 100.7,73.6 100.7,73.6 27.1,0 27,50.1 75.6,98.7 62.9,111.4 87.9,136.5 125.7,98.7 125.7,98.7 \t"}),u.default.createElement("polygon",{id:"r_bottom",points:"37.8,136.5 37.8,136.5 27.1,147.2 27.1,197.3 62.9,161.5 \t"}),u.default.createElement("polygon",{id:"r_edge",points:"62.9,111.4 62.9,111.4 98.7,147.2 98.7,197.3 37.8,136.5 37.8,136.5 37.8,136.5 \t"})),u.default.createElement("polygon",{id:"c_bottom",className:"c",style:{WebkitTransform:"translateX("+-e.x+"px)",transform:"translateX("+-e.x+"px)",opacity:e.opacity},points:"0,98.7 22.8,121.4 25,123.7 25,123.7 98.6,197.3 98.7,147.2 50.1,98.6 62.8,85.9 37.8,60.8 0,98.6 0,98.7 "}))}):u.default.createElement("svg",{className:"chase_logo",x:"0px",y:"0px",viewBox:"0 0 125.7 197.3",style:{opacity:0,width:"150px"}},u.default.createElement("g",{id:"R",className:"r"},u.default.createElement("polygon",{id:"r_top",points:"125.7,98.6 102.9,75.9 100.7,73.6 100.7,73.6 27.1,0 27,50.1 75.6,98.7 62.9,111.4 87.9,136.5 125.7,98.7 125.7,98.7 \t"}),u.default.createElement("polygon",{id:"r_bottom",points:"37.8,136.5 37.8,136.5 27.1,147.2 27.1,197.3 62.9,161.5 \t"}),u.default.createElement("polygon",{id:"r_edge",points:"62.9,111.4 62.9,111.4 98.7,147.2 98.7,197.3 37.8,136.5 37.8,136.5 37.8,136.5 \t"})),u.default.createElement("g",{id:"C",className:"c"},u.default.createElement("polygon",{id:"c_top",points:"62.8,85.9 87.9,60.8 98.6,50.1 98.6,0 37.8,60.8 "}),u.default.createElement("polygon",{id:"c_bottom",points:"0,98.7 22.8,121.4 25,123.7 25,123.7 98.6,197.3 98.7,147.2 50.1,98.6 62.8,85.9 37.8,60.8 0,98.6 0,98.7 "}))),a?u.default.createElement(y.Motion,{key:"name",defaultStyle:{x:100,opacity:0},style:{x:(0,y.spring)(0,y.presets.gentle),opacity:(0,y.spring)(1,y.presets.gentle)}},function(e){return u.default.createElement("h1",{style:{WebkitTransform:"translateY("+e.x+"px)",transform:"translateY("+e.x+"px)",opacity:e.opacity},className:"big_name"},"CHASE G ROCK")}):u.default.createElement("h1",{style:{opacity:0},className:"big_name"},"CHASE G ROCK"),n?u.default.createElement(y.Motion,{key:"biomechanics",defaultStyle:{x:100,opacity:0},style:{x:(0,y.spring)(0,y.presets.gentle),opacity:(0,y.spring)(1,y.presets.gentle)}},function(e){return u.default.createElement("h2",{className:"subheader",style:{WebkitTransform:"translateY("+e.x+"px)",transform:"translateY("+e.x+"px)",opacity:e.opacity}},"Biomechanics, M.S.")}):u.default.createElement("h2",{className:"subheader",style:{opacity:0}},"Biomechanics, M.S."),r?u.default.createElement(y.Motion,{key:"neuroscience",defaultStyle:{x:100,opacity:0},style:{x:(0,y.spring)(0,y.presets.gentle),opacity:(0,y.spring)(1,y.presets.gentle)}},function(e){return u.default.createElement("h2",{className:"subheader smaller",style:{WebkitTransform:"translateY("+e.x+"px)",transform:"translateY("+e.x+"px)",opacity:e.opacity}},"Neuroscience, B.S.")}):u.default.createElement("h2",{className:"subheader smaller",style:{opacity:0}},"Neuroscience, B.S.")),l?u.default.createElement(y.Motion,{key:"face",defaultStyle:{x:100,opacity:0},style:{x:(0,y.spring)(0,y.presets.gentle),opacity:(0,y.spring)(1,y.presets.gentle)}},function(e){return u.default.createElement("img",{src:"/face.svg",style:{WebkitTransform:"translateY("+e.x+"px)",transform:"translateY("+e.x+"px)",opacity:e.opacity},className:"face"})}):u.default.createElement("img",{src:"/face.svg",style:{opacity:0},className:"face"})),u.default.createElement(m.Element,{name:"bio"},u.default.createElement(v.default,{onLeave:this._onLeave.bind(this,"bio"),onEnter:this._onEnter.bind(this,""),threshold:0}),u.default.createElement("div",{className:"bio_wrapper"},u.default.createElement("div",{id:"bio",className:"wrapper"},u.default.createElement("h3",{className:"bio_heading"},"Bio"),u.default.createElement("p",null,"Currently a PhD student at the Georgia Institute of Technology, Chase is studying under Dr. Young-Hui Chang. Chase is in the Applied Physiology program, which specializes in investigating questions related to the physiology of movement. As a member of the Comparative Neuromechanics Laboratory, Chase’s PhD research involves understanding the body-wide adaptation to novel environments, such as reduced gravity. "),u.default.createElement("p",null,"Prior to starting at Georgia Tech, Chase received his Master’s degree in Exercise Physiology in 2017 from the Department of Biomechanics at the University of Nebraska at Omaha. With Dr. Kota Takahashi as his mentor, Chase completed a project that aimed to detect how changes in energy expenditure might be related to the variability of a person’s walking pattern."),u.default.createElement("a",{className:"cv_button",href:"/CRock_CV_08202018.pdf"},u.default.createElement("h4",null,"Curriculum Vitae"))))),u.default.createElement(m.Element,{name:"research"},u.default.createElement(v.default,{onEnter:this._onEnter.bind(this,"bio"),onLeave:this._onLeave.bind(this,"research"),threshold:0}),u.default.createElement("div",{className:"research_wrapper"},u.default.createElement("div",{className:"wrapper"},u.default.createElement("h3",{className:"research_heading"},"Research"),u.default.createElement("h4",null,"Presentations"),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"May 2017 - ",u.default.createElement("i",null,"Relationship Between Step-to-Step Variability and Metabolic Cost of Transport in Human Walking"),", ",u.default.createElement("a",{href:"https://www.unomaha.edu/college-of-education/cobre/events-outreach/conference.php",target:"_blank"},"2nd Annual Human Movement Variability Conference,")," ",u.default.createElement("a",{href:"http://www.unomaha.edu/",target:"_blank"},"University of Nebraska at Omaha,")," Omaha, NE ",u.default.createElement("br",null))),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"April 2017 - ",u.default.createElement("i",null,"Relationship Between Step-to-Step Variability and Metabolic Cost of Transport in Human Walking"),", ",u.default.createElement("a",{href:"https://sites.google.com/site/asbrockymountain/about-us",target:"_blank"},"7th Annual Meeting of the Rocky Mountain American Society of Biomechanics,")," Estes Park, CO ",u.default.createElement("br",null))),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"April 2017 - ",u.default.createElement("i",null,"Efficient Variability: Linking Fractal Walking Patterns with Metabolic Energy Savings"),", ",u.default.createElement("a",{href:"https://nebraskaacademyofsciences.wildapricot.org/",target:"_blank"},"Nebraska Academy of Sciences Annual Meeting,")," ",u.default.createElement("a",{href:"http://www.unl.edu/",target:"_blank"},"University of Nebraska at Lincoln,")," Lincoln, NE ",u.default.createElement("br",null))),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"March 2017 - ",u.default.createElement("i",null,"Efficient Variability: Linking Fractal Walking Patterns with Metabolic Energy Savings"),", ",u.default.createElement("a",{href:"https://www.unomaha.edu/office-of-research-and-creative-activity/students/research-and-creative-activity-fair.php",target:"_blank"},"Research and Creative Activity Fair,")," ",u.default.createElement("a",{href:"http://www.unomaha.edu/",target:"_blank"},"University of Nebraska at Omaha,")," Omaha, NE ",u.default.createElement("br",null))),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"October 2016 - ",u.default.createElement("i",null,"Relationship Between Metabolic Cost of Transport and Stride-to-Stride Variability"),", ",u.default.createElement("a",{href:"http://nric.nebraska.edu/",target:"_blank"},"Symposium on Biomechanics,")," ",u.default.createElement("a",{href:"http://www.unomaha.edu/",target:"_blank"},"University of Nebraska at Omaha,")," Omaha, NE ",u.default.createElement("br",null)),u.default.createElement("p",null,u.default.createElement("a",{className:"presentation_button",href:"/ChaseRock_UNOSymposium_2016.pdf"},"Poster"))),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"August 2016 - ",u.default.createElement("i",null,"Relationship Between Prosthetic Push-Off Work And Stride-To-Stride Fluctuations In Transtibial Prosthesis Users")," ",u.default.createElement("br",null),u.default.createElement("a",{href:"http://asb2016.asbweb.org/",target:"_blank"}," 40th Annual Meeting of the American Society of Biomechanics,")," Raleigh, NC"),u.default.createElement("p",null,u.default.createElement("a",{className:"presentation_button",href:"/ChaseRock_ASB 2016_poster.pdf"},"Poster"),u.default.createElement("a",{className:"presentation_button",href:"/ChaseRock_ASB2016_abstract.pdf"},"Abstract"))),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"June 2016 - ",u.default.createElement("i",null,"Metabolic Cost of Transport and the Persistence of Stride-to-Stride Fluctuations in Human Walking")," ",u.default.createElement("br",null),u.default.createElement("a",{href:"http://www.unomaha.edu/college-of-education/cobre/community-engagement/research-day.php",target:"_blank"}," Human Movement Variability Conference,")," Omaha, NE")),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"April 2016 – ",u.default.createElement("i",null,"Metabolic Cost of Transport and the Persistence of Stride-to-Stride Fluctuations in Human Walking")," ",u.default.createElement("br",null),u.default.createElement("a",{href:"https://sites.google.com/site/asbrockymountain/home",target:"_blank"}," 6th Annual Meeting of the Rocky Mountain American Society of Biomechanics,")," Estes Park, CO"),u.default.createElement("p",null,u.default.createElement("a",{className:"presentation_button",href:"/ChaseRock_RMASB_2016_poster.pdf"},"Poster"),u.default.createElement("a",{className:"presentation_button",href:"/ChaseRock_RMASB_2016_abstract.pdf"},"Abstract"))),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"March 2016 - ",u.default.createElement("i",null,"Relationship Between Prosthetic Push-Off Work And Stride-To-Stride Fluctuations In Transtibial Prosthesis Users")," ",u.default.createElement("br",null),u.default.createElement("a",{href:"http://www.unomaha.edu/office-of-research-and-creative-activity/students/research-and-creative-activity-fair.php",target:"_blank"}," Research and Creative Activity Fair,")," ",u.default.createElement("a",{href:"http://www.unomaha.edu/",target:"_blank"}," University of Nebraska at Omaha,")," Omaha, NE")),u.default.createElement("div",{className:"presentation"},u.default.createElement("p",null,"October 2015 – ",u.default.createElement("i",null,"Metabolic Cost and Long-Term Correlations in Human Gait")," ",u.default.createElement("br",null),u.default.createElement("a",{href:"http://www.unomaha.edu/college-of-education/health-physical-education-recreation/community-engagement/seminar-series/index.php",target:"_blank"}," School of HPER Seminar Series,")," ",u.default.createElement("a",{href:"http://www.unomaha.edu/",target:"_blank"}," University of Nebraska at Omaha,")," Omaha, NE"))))))}}]),t}(s.Component);t.default=(0,c.withSiteData)(S)}});
//# sourceMappingURL=Home.516d5cdc.js.map