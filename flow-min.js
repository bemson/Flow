/* Flow v0.3.2 + Panzer v0.2.5 + genData v2.0.0 | github.com/bemson | (c) 2012, MIT */
;((typeof exports!="undefined"?exports:window).genData=function a(b){function q(a,b){this.name=a,this.value=b}if(this instanceof a)return this;var c,d,e,f=[["",b]],g,h,i,j,k={},l,m,n=[].slice.call(arguments).slice(1).filter(function(a){return typeof a=="function"}),o=n.length,p=[];q.prototype=(typeof this=="function"?this:a).prototype;while(f.length){j=f.shift(),d=new q(j[0],j[1]),c=0,l={omit:0,scan:1,exit:0,parent:0},m=[j[0],j[1],j[2],p,l,k];while(c<o&&!l.exit)n[c++].apply(d,m);l.omit?d._OMIT=!0:p.push(d);if(l.exit)f=[];else{i=[],h=typeof l.parent=="object",g=h?l.parent:d.value;if(l.scan&&typeof g=="object"){for(e in g)g.hasOwnProperty(e)&&i.push([e,g[e],h?g:d]);f=i.concat(f)}}}return p}).spawn=function b(){function d(b){return this instanceof d?this:a.apply(typeof this=="function"?this:d,[b].concat(c,[].slice.call(arguments).slice(1)))}var a=this,c=[].slice.call(arguments).filter(function(a){return typeof a=="function"});return d.prototype=new a,d.spawn=b,d};
!function(a,b,c,d,e,f){function o(a,b,c,e){var f=this;f.panzer=i=a,f.y=[{},{},function(b,c){return b===a?c?(f.pkgs[a.i[c]]||{}).inst||!1:f:j}],a.d.forEach(function(a){var b=a.def.attributeKey,c=a.def.invalidKey;a.c={af:typeof b=="function"?b:0,ar:b&&b instanceof d?b:0,nf:typeof c=="function"?c:0,nr:c&&c instanceof d?c:0}}),f.nodes=l(c),i=0,f.nodes[0].parentIndex=f.nodes[0].childIndex=0,f.nodes.unshift(l()[0]),f.nodes[0].children.push(1),f.nodes[0].name="PNULL",f.nodes[0].index=0,f.nodes[0].depth=0,f.nodes[0].path="..//",f.nodes[0].ctx=1,f.nodes[0].firstChildIndex=f.nodes[0].lastChildIndex=1,f.tank={id:a.c++,currentIndex:0,targetIndex:-1,go:function(a){var b=f.nodes[a];return b&&(f.target=b,f.tank.targetIndex=b.index),f.stop=0,f.go()},stop:function(){return f.stop=1,!!f.loop},post:function(a){switch(typeof a){case"function":return f.posts.push(a)-1;case"number":if(f.posts[a])return f.posts[a]=0,!0}return!1}},f.posts=[],f.current=f.nodes[0],f.target=f.loop=0,f.pkgs=a.d.map(function(a){function c(){}var b={name:a.name,inst:new a.def};return c.prototype=a.proxy.prototype,f.y[0][a.name]=b.proxy=new c,f.y[1][a.name]=b.inst,b.inst.pkgs=f.y[1],b.inst.nodes=m.call(a.node,f.nodes),b.inst.tank=f.tank,typeof a.def.init=="function"&&a.def.init.call(b.inst,e),b}),f.pkgs.forEach(function(a,c,d){a.proxy.pkgs=f.y[0],a.proxy.toString=f.y[2],a.inst.proxy=b}),b.pkgs=f.y[0],b.toString=f.y[2],this.ret=1}function p(a,b){return typeof b=="string"&&a&&this.d[a-1].proxy.prototype[b]||!1}function q(a){var b=this;if(arguments.length){if(typeof a=="string"&&/\w/.test(a)){if(!b.i.hasOwnProperty(a)){function c(c){if(!(this instanceof arguments.callee))return c instanceof b.d[0].proxy&&c.toString(b,a)}c.getSuper=function(a){return p.call(b,this.index,a)},c.init=c.attributeKey=c.invalidKey=c.onBegin=c.onEnd=c.onTraverse=0;function d(){}d.prototype=new b.Y,b.P.prototype=c.proxy=d.prototype,b.Y=d;function e(){}c.node=e.prototype,c.index=b.i[a]=b.d.push({name:a,def:c,proxy:d,node:e})-1}return b.d[b.i[a]].def}return!1}return b.d.map(function(a){return a.name})}if(!a&&e.Panzer)return;var g=a?exports:e,h=(a?require("genData"):e).genData,i,j={}.toString(),k=function(a,b,c){var d=a+"f",f=a+"r";return i.d.some(function(a){if(a.c[d])return a.c[d].call(e,b,c);if(a.c[f])return a.c[f].test(b)})},l=h.spawn(function(a,b,c,d,e,g){var h=this,i=c&&k("n",a,b),j=c&&!i&&k("a",a,b);i||j?(e.omit=1,e.scan=0,j&&!i&&(c.attributes[a]=b)):(h.ctx=h.parentIndex=h.previousIndex=h.nextIndex=h.firstChildIndex=h.lastChildIndex=h.childIndex=f,h.index=d.length+1,h.depth=c?c.depth+1:1,h.name=c?a:"PROOT",h.attributes={},h.path=c?c.path+a+"/":"//",h.children=[],c&&(h.parentIndex=c.index,c.children.length||(c.firstChildIndex=h.index),h.childIndex=c.children.push(h.index)-1,c.lastChildIndex=h.index,h.childIndex&&(h.previousIndex=c.children[h.childIndex-1],d[h.previousIndex-1].nextIndex=h.index)))}),m=h.spawn(function(a,b,c,d,e){if(!c)e.omit=1;else{e.scan=0;for(var f in b)b.hasOwnProperty(f)&&f!=="ctx"&&(this[f]=b[f])}}),n=b.prototype;o.prototype={go:function(){var a=this,b=a.nodes,c=a.tank,d,e=0,f=a.current,g=0,h=0,i;if(a.loop)return!!a.target;a.posts=[],a.loop=1,a.fire("Begin");while(a.loop)a.target&&!a.stop?(i=0,d=a.target.index-f.index,d?d>0&&f.index<2||!a.target.path.indexOf(f.path)?f.ctx?(g=0,h=f.firstChildIndex):(g=1,h=1,f.ctx=1):f.ctx?(g=1,h=2,f.ctx=0):(a.target.path.indexOf(b[f.parentIndex].path)&&(d=-1),h=d<0?4:3,f.lastEvent===2||f.lastEvent===h||f.lastEvent+h===7?(g=0,h=d>0?f.nextIndex:f.previousIndex||f.parentIndex):g=1):(g=1,h=f.ctx?0:1,f.ctx&&(a.target=0,c.targetIndex=-1),f.ctx=1),g?(f.lastEvent=h,e++,a.fire("Traverse",[h])):(f.lastEvent=0,f=a.current=b[h],c.currentIndex=h)):!i&&(a.stop||!a.target)?(i=1,a.fire("End")):a.loop=0;return a.posts.forEach(function(a){a&&a()}),e},fire:function(a,b){var c=this.panzer;if(!this.ret)return;b=b||[],b.unshift(a.toLowerCase()),this.pkgs.forEach(function(d){var e=c.d[c.i[d.name]].def["on"+a];typeof e=="function"&&e.apply(d.inst,b)})}},g.Panzer={version:"0.2.5",create:function(){function b(b,c){if(!(this instanceof arguments.callee))throw new Error("Missing new operator.");new o(a,this,b,typeof c=="object"?c:{})}var a={c:0,d:[],i:{},Y:function(){},P:b};return b.pkg=function(b){return q.apply(a,arguments)},b}}}(typeof require!="undefined",Array,Object,RegExp,this);
!function(a,b,c,d){function l(b){return a?require(b):c}function m(a){return a!=null&&/\w/.test(a)}if(!a&&c.Flow)return;var e=l("Panzer").Panzer.create(),f=l("genData").genData,g=e.pkg("core"),h=f.spawn(function(a,c,e,f,g,h){var i=this,j=1,k={name:i.name,value:i.value,use:1};g.omit=1,i.O=typeof c=="object",i.A=c instanceof b,e?e.A?i.O&&(j=0):g.scan=0:(h.keys||(h.keys={}),i.O&&(j=0));if(j){if(!e||e.A)k.name=c,k.value=d,k.use=0;m(k.name)&&(k.name+="",h.keys.hasOwnProperty(k.name)&&f.splice(h.keys[k.name],1),h.keys[k.name]=f.push(k)-1)}}),i=f.spawn(function(a,b,c,d,e){var f=this,g="/";f.set=0,f.parent=c,f.done=0,typeof b=="string"&&(~b.indexOf(g)?f.value=b.split(g):b.charAt(0)==="["&&(f.value=b.slice(1,-1).split("|"),f.set=1)),typeof f.value=="string"?(c&&c.set&&(f.set=1,c.last=f),f.first=!d.length):e.omit=1}),j=[],k=b.prototype;e.version="0.3.2",g.actives=[],g.events=["on","in","out","over","bover"],g.attributeKey=/^_/,g.invalidKey=/^\W+$|^toString$|^[@\[]|[\/\|]/,g.init=function(a){var c=this;c.args=[],c.calls=[],c.route=[],c.data={},c.delay={},c.cache={indexOf:{}},c.trust=0,c.locked=0,c.nodeIds={},c.pending=0,c.pendees=[],c.targets=[],c.phase=0,c.nodes[0].name="_flow",c.nodes[1].name="_program",c.nodes.forEach(function(a,b){var d=c.nodes[a.parentIndex];c.nodeIds[a.path]=b,a.pkg=c,a.pendable=d&&!d.pendable?0:a.attributes.hasOwnProperty("_pendable")?!!a.attributes._pendable:1,a.root=b<2?1:a.attributes._root&&a.index||d.root,a.restrict=a.attributes.hasOwnProperty("_restrict")?a.attributes._restrict&&a.index||-1:d&&d.restrict||-1,a.restrict=a.attributes.hasOwnProperty("_restrict")?a.attributes._restrict&&a.index||-1:d&&d.restrict||-1,a.map=function(){var a=[].slice.call(arguments);return a.unshift(b),c.proxy.target.apply(c.proxy,a)},a.map.toString=function(){return a.path},a.data=h(a.attributes._data),a.index&&(d.map[a.name]=a.map),a.fncs=g.events.map(function(b){return b="_"+b,typeof a.attributes[b]=="function"?a.attributes[b]:0}),!a.fncs[0]&&typeof a.value=="function"&&(a.fncs[0]=a.value)}),a.hasOwnProperty("hostKey")&&(c.hostKey=a.hostKey),a.cedeHosts instanceof b&&(c.allowed=function(){return c.trust||j.length>1&&~a.cedeHosts.indexOf(j[1].hostKey)})},g.prototype={indexOf:function(a,b){var c=this,d=c.nodes,e=c.nodeIds,f,g,h,j,k,l=-1;b=b||c.nodes[c.tank.currentIndex];switch(typeof a){case"object":a!==null&&(a=a.index);case"number":d[a]&&(l=a);break;case"function":a+="";case"string":if(a=="")break;if(a==="..//"||a==="//")l=a==="//"?1:0;else{j=a.match(/^(?:(?:\.{1,2}|[@\[][^\/]+)\/?)+/);if(j){if(!c.cache.indexOf.hasOwnProperty(a+b.index)&&!c.cache.indexOf.hasOwnProperty(a)){f=a.substr(j[0].length),h=0,j=i(j[0]),l=b.index;while((g=d[l])&&j.length){k=j.shift();if(!k.set||!k.parent.done){switch(k.value){case"@firstchild":l=g.firstChildIndex;break;case"@lastchild":l=g.lastChildIndex;break;case"@next":l=g.nextIndex;break;case"@parent":case"..":l=g.parentIndex;break;case"@previous":l=g.previousIndex;break;case"@root":l=g.root;break;case"@program":case"@flow":k.first&&(h=1),l=~k.value.indexOf("f")?0:1;break;case"@oldest":case"@youngest":l=d[g.parentIndex]?d[g.parentIndex][(~k.value.indexOf("y")?"firstChild":"lastChild")+"Index"]:-1;break;case"@self":case".":l=g.index;break;default:k.value&&(l=-1)}k.set&&(l>-1?k.parent.done=1:k.parent.last!==k&&(l=g.index))}}l=g&&(!f||(g=d[e[g.path+f.replace(/([^\/])$/,"$1/")]]))?g.index:-1,c.cache.indexOf[a+(h?"":b.index)]=l}l=c.cache.indexOf.hasOwnProperty(a+b.index)?c.cache.indexOf[a+b.index]:c.cache.indexOf[a]}else a.charAt(0)!=="/"?a=b.path+a:a.charAt(1)!=="/"&&(a=d[b.root].path+a.substr(1)),a.slice(-1)!=="/"&&(a+="/"),l=e.hasOwnProperty(a)?e[a]:-1}}return l},vetIndexOf:function(a,b){var c=this,d=c.indexOf(a,b);return b=b||c.nodes[c.tank.currentIndex],~d&&(c.allowed()||b.canTgt(c.nodes[d]))?d:-1},getData:function(a,b){var c=this;return m(a)&&(c.data.hasOwnProperty(a)?c.data[a]:c.data[a]={name:a,values:arguments.length>1?[b]:[]})},go:function(){var a=this;return a.pause=0,a.delTimer(),a.pending?0:a.tank.go(a.targets[0])},delTimer:function(){var a=this;a.delay.timer&&(clearTimeout(a.delay.timer),a.delay.timer=0)},allowed:function(){return this.trust}},g.onBegin=function(a){var b=this,c=b.delay.callback;j.unshift(b),g.actives.unshift(b.proxy),b.delTimer(),b.delay.callback=0,c&&(b.trust=1,c.call(b.proxy),b.trust=0)},g.onTraverse=function(a,b){var c=this,d=c.tank,e=c.nodes[d.currentIndex];c.trust=1,c.outNode&&(c.outNode.scopeData(1),c.outNode=0);switch(b){case 1:e.scopeData();break;case 2:c.outNode=e}c.phase=b,e.index!==c.route.slice(-1)[0]&&c.route.push(e.index),~d.targetIndex||c.targets.shift(),e.fncs[b]&&(c.calls.push(e.index+"."+b),c.result=e.fncs[b].apply(c.proxy,c.targets.length?[]:c.args)),c.pending&&d.stop(),c.trust=0},g.onEnd=function(a){var b=this,c=b.tank,d=j[1],e=b.pause||b.pending||b.phase;!e&&b.targets.length?c.go(b.targets[0]):(e?(b.pending||(b.pause=1),d&&d.nodes[d.tank.currentIndex].pendable&&b.nodes[c.currentIndex].pendable&&!b.pendees[d.tank.id]&&(d.pending++,b.pendees[d.tank.id]=d)):(b.args=[],b.calls=[],b.route=[],b.pendees.length&&(b.pendees.forEach(function(a){a.pending--}),c.post(function(){b.pendees.splice(0).forEach(function(a){!a.pending&&!a.pause&&a.go()})}))),j.shift(),g.actives.shift())},g.node.canTgt=function(a){var b=this.pkg.nodes[this.restrict];return!b||a.within(b)},g.node.scopeData=function(a){var b=this,c=b.pkg;b.data.forEach(function(b){var d=c.getData(b.name);a?(d.values.shift(),d.values.length||delete c.data[b.name]):d.values.unshift(b.use?b.value:d.values[0])})},g.node.within=function(a){var b=arguments.length?typeof a=="object"?a:this.pkg.nodes[a]:this.pkg.nodes[this.pkg.tank.currentIndex];return b?b!==this&&(!b.index||!this.path.indexOf(b.path)):!1},g.proxy.map=function(){return g(this).nodes[1].map},g.proxy.query=function(a){var b=g(this),c=arguments,d=[];return c.length&&[].slice.call(arguments).every(function(a){var c=b.vetIndexOf(a),e=0;return~c&&(d.push(b.nodes[c].path),e=1),e})?d.length>1?d:d[0]:!1},g.proxy.lock=function(a){var b=g(this);return arguments.length?b.allowed()?(b.locked=!!a,!0):!1:!!b.locked},g.proxy.bless=function(a){var b=g(this);return b.allowed()&&typeof a=="function"?function(){var c=b.trust,d;return b.trust=1,d=a.apply(this,arguments),b.trust=c,d}:!1},g.proxy.data=function(a,b){var c=g(this),d=arguments.length,e,f=!1;if(d)typeof a=="string"&&/\w/.test(a)&&(e=c.getData(a),d>1?(e.values[0]=b,f=!0):f=e.values[0]);else{f=[];for(e in c.data)c.data.hasOwnProperty(e)&&f.push(e);f.sort()}return f},g.proxy.args=function(a,c){var e=g(this),f=e.args,h=arguments.length,i=typeof a;if(h===1||h&&(e.allowed()||!e.locked)){if(a instanceof b)return e.args=[].concat(a),!0;if(i==="number"&&!isNaN(a)&&a>=0)return h>1?(c===d&&a===f.length-1?f.pop():f[a]=c,!0):f[a]}else if(!h)return[].concat(f);return!1},g.proxy.target=function(a){var b=g(this),c=b.allowed()||!b.locked?b.vetIndexOf(a):-1;return~c?(b.args=[].slice.call(arguments).slice(1),b.targets=[c],b.go(),b.allowed()?!b.pending:b.phase||b.pause?!1:b.result===d||b.result):!1},g.proxy.go=function(a){var b=g(this),c=b.pause,d=[],e=0;return(b.allowed()||!b.locked)&&[].slice.call(arguments).every(function(a){var c=b.vetIndexOf(a);return d.push(c),~c})&&(d.length&&(d.slice(-1)[0]===b.targets[0]&&d.pop(),b.targets=d.concat(b.targets)),e=b.go()||c),!!e},g.proxy.wait=function(){var a=g(this),b=arguments,c=b.length,d=c<2,e=d?0:b[0],f=typeof e=="function",h=a.indexOf(e),i=b[c-1],j=0;return a.allowed()&&(!c||i>=0&&typeof i=="number"&&(d||~h||f))&&(a.pause=1,a.tank.stop(),a.delTimer(),a.delay.timer=c?setTimeout(function(){!d&&~h?a.proxy.pkgs.core.target(h):(f&&(a.delay.callback=e),a.go())},~~i):1,j=1),!!j},g.proxy.status=function(){function d(b){return a.nodes[b].path}var a=g(this),b=a.nodes[a.tank.currentIndex],c=a.allowed()||a.pause||a.pending;return{trust:!!a.allowed(),loops:Math.max((a.calls.join().match(new RegExp("\\b"+b.index+"."+a.phase,"g"))||[]).length-1,0),depth:b.depth,paused:!!a.pause,pending:!!a.pending,pendable:!!b.pendable,targets:a.targets.map(d),route:a.route.map(d),path:b.path,index:b.index,phase:c?g.events[a.phase]:"",state:b.name}},(a?exports:c).Flow=e}(typeof require!="undefined",Array,this);