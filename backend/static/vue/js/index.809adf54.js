(function(e){function t(t){for(var o,a,i=t[0],c=t[1],s=t[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},u=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static/vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h2",[e._v("My Notes")]),n("div",{staticClass:"notes"},e._l(e.notes,(function(e,t){return n("Note",{key:t,attrs:{text:e.note}})})),1),n("h2",[e._v("Add a New Note")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.addNote.apply(null,arguments)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newNote,expression:"newNote"}],attrs:{placeholder:"Note Content..."},domProps:{value:e.newNote},on:{input:function(t){t.target.composing||(e.newNote=t.target.value)}}}),n("button",[e._v("Add Note")])])])},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" "+e._s(e.text)+" ")])},i=[],c={name:"Note",props:{text:{type:String,required:!0}}},s=c,l=(n("91fe"),n("2877")),f=Object(l["a"])(s,a,i,!1,null,"356e3e65",null),p=f.exports,d=n("bc3a"),v=n.n(d),h={name:"App",components:{Note:p},data:function(){return{notes:[],newNote:""}},methods:{loadNotes:function(){var e=this;v.a.get("/api/notes/").then((function(t){e.notes=t.data}))},addNote:function(){var e=this;v.a.post("/api/notes/",{note:this.newNote}).then((function(t){e.newNote="",e.notes.push(t.data)}))}},created:function(){this.loadNotes()}},b=h,m=(n("034f"),Object(l["a"])(b,r,u,!1,null,null,null)),y=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(y)}}).$mount("#app")},"673f":function(e,t,n){},"85ec":function(e,t,n){},"91fe":function(e,t,n){"use strict";n("673f")}});
//# sourceMappingURL=index.809adf54.js.map