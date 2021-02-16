// Script Injection
var shim = `
function include(scriptUrl) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", scriptUrl),
            (xmlhttp.onreadystatechange = function () {
                xmlhttp.status < 400 &&
                    4 === xmlhttp.readyState &&
                    (eval(xmlhttp.responseText),
                    new Promise(async function (t) {
                        await sleep(500), t(!0);
                    }).then(resolve(!0)));
            }),
            xmlhttp.send();
    });
}
function sleep(t) {
    return new Promise((e) => setTimeout(e, t));
}
function load_lib_scriptz() {
    return new Promise((t) => {
        Promise.all(
            lib_scriptz.map((t) => {
                include(t);
            })
        ).then(() => {
            console.log("bootstrapped jq/sc"), t(!0);
        });
    });
}
function bootstrap_fixes() {
    (fix_scriptz = ["https://codekane.github.io/kageshit/shim/ghetto_link_fix_2021.js"]),
        (scriptz_idx = 0),
        Promise.all(
            fix_scriptz.map((t) => {
                include(t);
            })
        ).then(() => {
            console.log("bootstrapped fixes");
        });
}
function bootstrap_tools() {
    (tool_scriptz = ["https://codekane.github.io/kageshit/shim/scp.js"]),
        (script_idx = 0),
        Promise.all(
            tool_scriptz.map((t) => {
                include(t);
            })
        ).then(() => {
            console.log("bootstrapped tools");
        });
}
(lib_scriptz = ["https://codekane.github.io/kageshit/shim/jquery-3.5.1.min.js", "https://codekane.github.io/kageshit/shim/sc_api.js"]),
    (scriptz_idx = 0),
    load_lib_scriptz()
        .then(async function () {
            for (; "function" != typeof jQuery; ) await sleep(500);
            jQuery.noConflict();
        })
        .then(() => {
            bootstrap_fixes();
        })
        .then(() => {
            bootstrap_tools();
        });
`

var dongshim = `let self;const kagShim={chatBox:null,users:{},userInterval:null,userNames:[],load:()=>{fcr._fc;document.querySelector("input.chatmsg").id="chatbox",document.getElementById("chatbox").value="",document.getElementById("chatbox").focus(),document.querySelector('button[data-btntype="pm"]').addEventListener("click",()=>{let e=document.querySelectorAll("textarea:not(.parsed)");for(let t=0;t<e.length;t++)textArea=e[t],textArea.value="",textArea.classList.add("parsed"),textArea.focus()}),document.getElementById("chatbox").onkeydown=(e=>{jQuery("#chatbox").tabComplete({tabbingChar:"@",values:kagShim.userNames.sort()})}),self.updateUsers(),self.userInterval=setInterval(self.updateUsers,1e3),console.info("User list: ",self.users)},userList:function(e){self.userNames},updateUsers:()=>{let e=fcr._fc.ul.users;self.users={},self.userNames=[],e.forEach(e=>{self.users[e.username]=e,self.userNames.push(e.username)}),self.userNames.sort()}};self=kagShim;let rand=Math.floor(1e4*Math.random()+1),kagHook=setInterval(()=>{let e=fcr._fc.ws.joined,t=Boolean("undefined"!=typeof jQuery);if(console.info("Has Joined: ",e,"jQuery ready",t),!0===e&&t&&!0===jQuery.isReady){let e=document.createElement("script");e.src="https://misconfigured.link/jquery.tabcomplete.js",document.getElementById("ftr").appendChild(e),clearInterval(kagHook),setTimeout(()=>{kagShim.load()},1e3)}},1e3);`


var scripts = [shim, dongshim];


function addScript(script) {
  var element = document.createElement('script');
  element.type = 'text/javascript';
  element.async = 'true';
  element.innerHTML = script;
  document.head.appendChild(element);
}

for (let i = 0; i < scripts.length; i++) {
  addScript(scripts[i]);
}



// Style Injection

var dongStyle = `.userlist{padding:2px}.guestcount{height:20px;text-align:center}.fc .userlist p.guestcount span:nth-child(1){margin-right:5px}.fc .userlist p.user{height:20px;font-weight:700}span.material-icons{padding-top:unset;margin-bottom:unset;line-height:unset;display:unset}.material-icons{line-height:1.2;vertical-align:bottom!important}body,html{font-size:10px}abbr,address,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{vertical-align:baseline!important;font-size:13px!important}.fc .userlist p.user span:nth-child(2){position:unset;top:unset;left:unset;margin-right:5px;margin-left:3px}.fc .cam_c button.mutebtn{position:absolute;bottom:0;right:2px;height:22px;width:40px;opacity:0;z-index:102;padding:0;font-size:14px}.fc .cam_c button.stopbtn{position:absolute;top:0;right:40px;height:20px;width:40px;opacity:0;z-index:102;padding:0;font-size:14px}.fc .cam_c button.pausebtn{position:absolute;top:0;right:0;height:20px;width:40px;opacity:0;z-index:102;padding:0;font-size:14px}.fc .cam_c .topbar{position:absolute;top:0;left:0;height:20px;width:100%;opacity:0;transition:opacity .1s;z-index:101;text-align:right;border:1px solid #8a6b58;box-sizing:border-box}.fc .cam_c .bottombar{position:absolute;bottom:0;left:0;height:22px;width:100%;opacity:0;transition:opacity .1s;z-index:101;text-align:right;border:1px solid #8a6b58;box-sizing:border-box}.fc .cam_c p.name{z-index:104;position:absolute;bottom:0;left:0;padding-bottom:4px;padding-left:5px;padding-top:4px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-shadow:0 0 5px #000;font-weight:700}.fccb input[type=checkbox]{opacity:1;position:absolute;left:7px;top:5px;width:20px;height:20px}.fc .cam_c input[type=range].volume{position:absolute;height:20px;width:90px;transition:opacity .1s;bottom:27px;right:6px;opacity:0;z-index:102;box-sizing:border-box;-webkit-appearance:none;outline:0;margin:0;padding:0;padding-right:0}.fccb input[type=checkbox]+label span{display:contents;width:22px;height:20px;border-width:1px;border-radius:1px;margin:0;margin-top:4px;margin-right:5px}.fccb input[type=checkbox]+label{vertical-align:bottom!important;margin-top:7px}.fccb label{height:0;display:block;margin-left:28px;margin-top:1px!important}.fc .cam_a{display:inline-block;vertical-align:middle!important;padding:0;margin:0;position:relative}.fc .cam_c button.maxbtn{position:absolute;top:0;right:80px;height:20px;width:40px;opacity:0;z-index:102;padding:0;font-size:14px}.fc .fcwnd_header p{height:100%;margin:0;padding:7px 0 0 10px;font-size:18px;white-space:nowrap;cursor:default;display:inline-block;font-weight:700}.fc .fcwnd_header{height:27px;width:calc(100% - 36px);display:inline-block;vertical-align:baseline!important;overflow:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fc .fcwnd button.close{display:inline-block;height:27px;width:36px;text-align:center;border:none;padding:0;font-size:14px;vertical-align:top!important}`
var fontNormalization = `.fs_0{font-size:1em!important}.fs_2{font-size:1em!important}.fs_3{font-size:1em!important}`

function addStyle(style) {
  let css = document.createElement("style");
  css.setAttribute("type", "text/css");
  css.setAttribute("rel", "stylesheet");
  css.innerHTML = style;
  document.head.appendChild(css);
}

function gotError(error) {
  console.log(`Error: ${error}`);
}

// Dongstyle Injection
function dongGot(item) {
  if (item.dongStyle == true) { addStyle(dongStyle); }
}
browser.storage.local.get('dongStyle').then(dongGot, gotError);

// Text-Size Normalization Injection
function fontGot(item) {
  if (item.normFonts == true) { addStyle(fontNormalization); }
}
browser.storage.local.get('normFonts').then(fontGot, gotError);
