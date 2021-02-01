var test = `console.log('testing!')
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://gist.githubusercontent.com/smokeyhere/a38a9b01fe4d98ec2097dad70355f545/raw/8a691cccf1fd4dc52122c0aa9e50702dacdd5cef/kageshit_shim.js");
xmlhttp.onreadystatechange = function () {
    if ((xmlhttp.status < 400) && (xmlhttp.readyState === 4)) {
        eval(xmlhttp.responseText);
    }
};
xmlhttp.send();

`;


var kageshit = document.createElement('script');
kageshit.type = 'text/javascript';
kageshit.async = true;
// kageshit.src = "https://gist.github.com/smokeyhere/904d94f0757774fc2255f038e97fa707.js";
kageshit.innerHTML = test;

document.head.appendChild(kageshit);
