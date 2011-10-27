/* Core (Flow Package) v0.X, Bemi Faison, MIT */
!function(a,b,c,d,e,f,g){function m(a){return a!=null&&/\w/.test(a)}function n(a){var c=typeof a;return c==="object"&&~(new b).toString.call(a).indexOf("y")?"array":c}var h=e.pkg("core"),i=new genData(function(a,b,d,e,f,h){var i=this,j=1,k={name:i.name,value:i.value,use:1};f.omit=1,i.O=typeof b=="object",i.A=b instanceof c,d?d.A?i.O&&(j=0):f.scan=0:(h.keys||(h.keys={}),i.O&&(j=0));if(j){if(!d||d.A)k.name=b,k.value=g,k.use=0;m(k.name)&&(k.name+="",h.keys.hasOwnProperty(k.name)&&e.splice(h.keys[k.name],1),h.keys[k.name]=e.push(k)-1)}}),j=new genData(function(a,b,c,d,e){var f=this,g="/";f.set=0,f.parent=c,f.done=0,typeof b=="string"&&(~b.indexOf(g)?f.value=b.split(g):b.charAt(0)==="["&&(f.value=b.slice(1,-1).split("|"),f.set=1)),typeof f.value=="string"?(c&&c.set&&(f.set=1,c.last=f),f.first=!d.length):e.omit=1}),k=[],l=c.prototype;l.every||(l.every=function(a,b){for(var c=0,d=this.length;c<d;c++)if(!a.call(b,this[c],c,this))return!1;return!0}),l.indexOf||(l.indexOf=function(a,b){for(var c=b|0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1}),h.events=["on","in","out","over","bover"],h.dataKey=/^_/,h.invalidKey=/^\W+$|^toString$|^[@\[]|[\/\|]/,h.init=function(){var a=this;a.args=[],a.calls=[],a.route=[],a.vars={},a.delay={},a.cache={indexOf:{}},a.trust=0,a.locked=0,a.stateIds={},a.pending=0,a.penders={},a.parents=[],a.targets=[],a.phase=0,a.states.forEach(function(b,c){var d=c&&a.states[b.parentIndex];a.stateIds[b.path]=c,b.pkg=a,b.pendable=d&&!d.pendable?0:b.data.hasOwnProperty("_pendable")?!!b.data._pendable:1,b.isRoot=c<2?1:!!b.data._root,b.rootIndex=b.isRoot?b.index:d.rootIndex,b.restrict=!!(b.data._restrict||d&&d.restrict),b.map=function(){var b=[].slice.call(arguments),d=a.proxy.pkgs.core;return b.unshift(c),d.target.apply(d,b)},b.vars=i(b.data._vars),b.index&&(d.map[b.name]=b.map),b.map.toString=function(){return b.path},b.fncs=h.events.map(function(a){return a="_"+a,typeof b.data[a]=="function"?b.data[a]:0}),!b.fncs[0]&&typeof b.value=="function"&&(b.fncs[0]=b.value)})},h.prototype={indexOf:function(a,b){var c=this,d=c.states,e=c.stateIds,f,g,h,i,k,l=-1;b=b||c.states[c.tank.currentIndex];switch(typeof a){case"object":a!==null&&(a=a.index);case"number":d[a]&&(l=a);break;case"function":a+="";case"string":if(a=="")break;if(a==="..//"||a==="//")l=a==="//"?1:0;else{i=a.match(/^(?:(?:\.{1,2}|[@\[][^\/]+)\/?)+/);if(i){if(!c.cache.indexOf.hasOwnProperty(a+b.index)&&!c.cache.indexOf.hasOwnProperty(a)){f=a.substr(i[0].length),h=0,i=j(i[0]),l=b.index;while((g=d[l])&&i.length){k=i.shift();if(!k.set||!k.parent.done){switch(k.value){case"@child":l=g.firstChildIndex;break;case"@next":l=g.nextIndex;break;case"@parent":case"..":l=g.parentIndex;break;case"@previous":l=g.previousIndex;break;case"@root":l=g.rootIndex;break;case"@program":case"@flow":k.first&&(h=1),l=~k.value.indexOf("f")?0:1;break;case"@oldest":case"@youngest":l=d[g.parentIndex]?d[g.parentIndex][~k.value.indexOf("y")?"firstChildIndex":"lastChildIndex"]:-1;break;case"@self":case".":l=g.index;break;default:k.value&&(l=-1)}k.set&&(l>-1?k.parent.done=1:k.parent.last!==k&&(l=g.index))}}l=g&&(!f||(g=d[e[g.path+f.replace(/([^\/])$/,"$1/")]]))?g.index:-1,c.cache.indexOf[a+(h?"":b.index)]=l}l=c.cache.indexOf.hasOwnProperty(a+b.index)?c.cache.indexOf[a+b.index]:c.cache.indexOf[a]}else a.charAt(0)!=="/"?a=b.path+a:a.charAt(1)!=="/"&&(a=d[b.rootIndex].path+a.substr(1)),a.slice(-1)!=="/"&&(a+="/"),l=e.hasOwnProperty(a)?e[a]:-1}}return l},vetIndexOf:function(a,b){var c=this,d=c.indexOf(a,b);return b=b||c.states[c.tank.currentIndex],~d&&(c.trust||b.canTgt(c.states[d]))?d:-1},getVar:function(a,b){var c=this;return m(a)&&(c.vars.hasOwnProperty(a)?c.vars[a]:c.vars[a]={name:a,values:arguments.length>1?[b]:[]})},go:function(){var a=this;return a.pause=0,a.pending?0:a.tank.go(a.targets[0])}},h.onBegin=function(b){var c=this,d=c.delay.callback,e=k[0];e&&e.states[e.tank.currentIndex].pendable&&!c.penders[e.tank.id]&&(c.penders[e.tank.id]=1,e.pending++,~c.parents.indexOf(e)||c.parents.unshift(e)),k.unshift(c),a.clearTimeout(c.delay.timer),c.delay.callback=0,d&&(c.trust=1,d.call(c.proxy),c.trust=0)},h.onTraverse=function(a,b){var c=this,d=c.tank,e=c.states[d.currentIndex];c.trust=1,c.outState&&(c.outState.scopeVars(1),c.outState=0);switch(b){case 1:e.scopeVars();break;case 2:c.outState=e}c.phase=b,e.index!==c.route.slice(-1)[0]&&c.route.push(e.index),~d.targetIndex||c.targets.shift(),e.fncs[b]&&(c.calls.push(e.index+"."+b),c.result=e.fncs[b].apply(c.proxy,c.targets.length?[]:c.args)),c.pending&&d.stop(),c.trust=0},h.onEnd=function(a){var b=this,c=b.tank,d=!b.pause&&!b.pending;b.phase?k.shift():d&&b.targets.length?c.go(b.targets[0]):(k.shift(),d&&(b.args=[],b.calls=[],b.route=[],b.parents.length&&(b.parents.forEach(function(a){b.penders[a.tank.id]=0,a.pending--}),c.post(function(){var a=[].concat(b.parents);b.parents=[],a.forEach(function(a){a.pending|a.pause||a.go()})}))))},h.state.canTgt=function(a){var b=this;return!b.restrict||b!==a&&!a.path.indexOf(b.path)},h.state.scopeVars=function(a){var b=this,c=b.pkg;b.vars.forEach(function(b){var d=c.getVar(b.name);a?(d.values.shift(),d.values.length||delete c.vars[b.name]):d.values.unshift(b.use?b.value:d.values[0])})},h.proxy.map=function(){return h(this).states[1].map},h.proxy.query=function(a){var b=h(this),c=[];return a&&[].slice.call(arguments).every(function(a){var d=b.vetIndexOf(a),e=0;return~d&&(c.push(b.states[d].path),e=1),e})?c.length>0?c:c[0]:!1},h.proxy.lock=function(a){var b=h(this);return arguments.length?b.trust?(b.locked=!!a,!0):!1:!!b.locked},h.proxy.vars=function(a,b){var c=h(this),d=arguments.length,e,f=!1;if(d)typeof a=="string"&&/\w/.test(a)&&(e=c.getVar(a),d>1?(e.values[0]=b,f=!0):f=e.values[0]);else{f=[];for(e in c.vars)c.vars.hasOwnProperty(e)&&f.push(e);f.sort()}return f},h.proxy.args=function(a,b){var c=h(this),d=c.args,e=arguments.length,i=n(a);if(e===1||e&&(c.trust||!c.locked)){if(i==="array")return c.args=[].concat(a),!0;if(i==="number"&&!f(a)&&a>=0)return e>1?(b===g&&a===d.length-1?d.pop():d[a]=b,!0):d[a]}else if(!e)return[].concat(d);return!1},h.proxy.target=function(a){var b=h(this),c=b.trust||!b.locked?b.vetIndexOf(a):-1;if(~c)b.args=[].slice.call(arguments).slice(1),b.targets=[c],b.go();else return!1;return b.trust?!b.pending:b.phase||b.pause?!1:b.result===g||b.result},h.proxy.go=function(a){var b=h(this),c=b.pause,d=[],e=0;return(b.trust||!b.locked)&&[].slice.call(arguments).every(function(a){var c=b.vetIndexOf(a);return d.push(c),~c})&&(d.length&&(d.slice(-1)===b.targets[0]&&d.pop(),b.targets=d.concat(b.targets)),e=b.go()||c),!!e},h.proxy.wait=function(){var b=h(this),c=arguments,d=c.length,e=d<2,f=e?0:c[0],g=typeof f=="function",i=b.indexOf(f),j=~~c[d-1],k=0;return b.trust&&(!d||j>-1&&(e||~i||g))&&(b.pause=1,b.tank.stop(),a.clearTimeout(b.delay.timer),b.delay.timer=d?a.setTimeout(function(){!e&&~i?b.proxy.pkgs.core.target(i):(g&&(b.delay.callback=f),b.go())},j):1,k=1),!!k},h.proxy.status=function(){var a=this,b={};return e.pkg().forEach(function(c){var d=e.pkg(c),f,g;if(typeof d.addStatus=="function"&&typeof (f=d.addStatus.call(d(a),b))=="object")for(g in f)f.hasOwnProperty(g)&&(b[g]=f[g])}),b},h.addStatus=function(a){function f(a){return b.states[a].path}var b=this,c=b.states[b.tank.currentIndex],e=b.trust|b.pause|b.pending;return{trust:!!b.trust,loops:d.max((b.calls.join().match(new RegExp("\\b"+c.index+"."+b.phase,"g"))||[]).length-1,0),depth:c.depth,paused:!!b.pause,pending:!!b.pending,pendable:!!c.pendable,targets:b.targets.map(f),route:b.route.map(f),path:c.path,index:c.index,phase:e?h.events[b.phase]:"",state:c.name}}}(this,Object,Array,Math,Flow,isNaN);