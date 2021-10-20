(this["webpackJsonpvanity-wallet"]=this["webpackJsonpvanity-wallet"]||[]).push([[0],{19:function(e,t,a){},2:function(e,t,a){"use strict";var r=this&&this.__read||function(e,t){var a="function"===typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,s,n=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)i.push(r.value)}catch(l){s={error:l}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(s)throw s.error}}return i},s=this&&this.__spreadArray||function(e,t){for(var a=0,r=t.length,s=e.length;a<r;a++,s++)e[s]=t[a];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.isHexString=t.searchAddresses=t.generateAddressFromSeed=t.generateRandomSeed=void 0;var n=a(30),i=a(33);function l(e,t,a,r,s){var n=e.substring(5);if(t){if(null==a)return!1;if(!n.startsWith(a.toLowerCase()))return!1}if(r){if(null==s)return!1;if(!n.endsWith(s.toLowerCase()))return!1}return!0}function c(e){return s([],r(new Uint8Array(e))).map((function(e){return e.toString(16).padStart(2,"0")})).join("")}t.generateRandomSeed=function(){var e=new Uint8Array(32);return i(e),c(e.buffer)},t.generateAddressFromSeed=function(e){var t=n.wallet.deriveKeyPairByIndex(e,0);return n.wallet.createAddressByPrivateKey(t.privateKey)},t.searchAddresses=function(e,t,a,r,s){for(var d="",o=0;o<s;o++){var u=new Uint8Array(32);i(u);var h=c(u.buffer),b=n.wallet.deriveKeyPairByIndex(h,0),p=n.wallet.createAddressByPrivateKey(b.privateKey);if(l(p.address,e,t,a,r))d+="Address: "+p.address+"\nSeed: "+h+"\nPrivate Key: "+p.privateKey+"\nPublic Key: "+p.publicKey+"\nOriginal Address: "+p.originalAddress+"\n\n"}return d},t.isHexString=function(e){return/^([0-9A-Fa-f])*$/.test(e)}},20:function(e,t,a){},36:function(e,t){},38:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(10),i=a.n(n),l=(a(19),a(11)),c=a(12),d=a(14),o=a(13),u=(a(20),a(5)),h=a.n(u),b=a(2),p=a(0),j=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var r;Object(l.a)(this,a),r=t.call(this,e);var s=Object(b.generateRandomSeed)(),n=Object(b.generateAddressFromSeed)(s);return r.state={seed:s,address:n.address,publicKey:n.publicKey,privateKey:n.privateKey},r}return Object(c.a)(a,[{key:"handleSeedChange",value:function(e){var t=this.state,a=e.target.value;t.seed=a;var r=Object(b.generateAddressFromSeed)(a);t.address=r.address,t.publicKey=r.publicKey,t.privateKey=r.privateKey,console.log(JSON.stringify(t)),this.setState({state:t})}},{key:"reset",value:function(e){var t=this.state.search;t.prefix="",t.suffix="",t.use_prefix=!1,t.use_suffix=!1,t.iterations=1e3,this.setState({search:t});var a=this.state.result;a.output="",this.setState({result:a})}},{key:"generateSeed",value:function(e){var t=Object(b.generateRandomSeed)();console.log("Seed is ",t);var a=this.state;a.seed=t;var r=Object(b.generateAddressFromSeed)(t);a.address=r.address,a.publicKey=r.publicKey,a.privateKey=r.privateKey,console.log(JSON.stringify(a)),this.setState({state:a})}},{key:"printQRCodes",value:function(e){var t=document.getElementById("output-area"),a=window.open("","QR Code","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0");a.document.write("<html><head><title>Print QR Codes</title>"),a.document.write('<link rel="stylesheet" type="text/css" href="./App.css"/>'),a.document.write("</head><body >"),a.document.write(t.innerHTML),a.document.write("</body></html>"),a.focus(),a.onload=function(){a.print()}}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"root",children:[Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("h2",{children:"Vite Paper Wallet Generator"})}),Object(p.jsxs)("div",{className:"input-section",children:[Object(p.jsxs)("div",{className:"input-text-row",children:[Object(p.jsx)("label",{className:"input-label",children:"Seed:"}),Object(p.jsx)("input",{type:"text",className:"text-input",id:"seed",name:"seed",value:this.state.seed,onChange:this.handleSeedChange.bind(this)})]}),Object(p.jsxs)("div",{className:"input-text-row",children:[Object(p.jsx)("label",{className:"input-label",children:"Address:"}),Object(p.jsx)("input",{type:"text",className:"text-input",id:"address",name:"address",value:this.state.address,readOnly:!0})]}),Object(p.jsxs)("div",{className:"input-text-row",children:[Object(p.jsx)("label",{className:"input-label",children:"Public Key:"}),Object(p.jsx)("input",{type:"text",className:"text-input",id:"publicKey",name:"publicKey",value:this.state.publicKey,readOnly:!0})]}),Object(p.jsxs)("div",{className:"input-text-row",children:[Object(p.jsx)("label",{className:"input-label",children:"Private Key:"}),Object(p.jsx)("input",{type:"text",className:"text-input-long",id:"privateKey",name:"privateKey",value:this.state.privateKey,readOnly:!0})]})]}),Object(p.jsxs)("div",{className:"input-button-row",children:[Object(p.jsx)("button",{type:"button",className:"input-button",name:"Generate",onClick:this.generateSeed.bind(this),children:"Generate New"}),Object(p.jsx)("button",{type:"button",className:"input-button",name:"Print",onClick:this.printQRCodes.bind(this),children:"Download"})]}),Object(p.jsxs)("div",{className:"output-area",id:"output-area",name:"output-area",children:[Object(p.jsxs)("div",{className:"output-label-row",children:[Object(p.jsx)("label",{className:"seed-label",children:"Seed:"}),Object(p.jsx)("label",{className:"address-label",children:"Address:"})]}),Object(p.jsxs)("div",{className:"output-row",children:[Object(p.jsx)(h.a,{value:this.state.seed,className:"qr-code"}),Object(p.jsx)(h.a,{value:this.state.address,className:"qr-code"})]})]}),Object(p.jsxs)("footer",{children:["Email: ",Object(p.jsx)("a",{className:"footer-link",href:"mailto:john.e.garnham@gmail.com",children:"john.e.garnham@gmail.com"}),"Twitter: ",Object(p.jsx)("a",{className:"footer-link",href:"https://twitter.com/ViNoDevErik",children:"ViNoDevErik"}),"Source: ",Object(p.jsx)("a",{className:"footer-link",href:"https://github.com/JohnGarnham/Vite-Paper-Wallet-Generator",children:"https://github.com/JohnGarnham/Vite-Paper-Wallet-Generator"})]})]})}}]),a}(s.a.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),s(e),n(e),i(e)}))};i.a.render(Object(p.jsxs)(s.a.StrictMode,{children:[Object(p.jsx)("title",{children:" Paper Wallet Generator "}),Object(p.jsx)(j,{})]}),document.getElementById("root")),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.87c0cef9.chunk.js.map