var test = `function include(scriptUrl) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", scriptUrl);
        xmlhttp.onreadystatechange = function () {
            if ((xmlhttp.status < 400) && (xmlhttp.readyState === 4)) {
                eval(xmlhttp.responseText);
                new Promise(async function (r2) {
                    await sleep(500);
                    r2(true);
                }).then(resolve(true));
            }
        };
        xmlhttp.send();
    });

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


lib_scriptz = [
    'https://gist.githubusercontent.com/smokeyhere/ea9c607c11a0fbbbfeead6396a669408/raw/76ab2698455a62e70099435a185d7bc5177e09bd/sc.js',
    'https://gist.githubusercontent.com/smokeyhere/47415aac5187be1490d1ff9c26e5a23a/raw/60e1df5c2b4884d58ce176a890194c48fa2990d7/jq.js',
];
scriptz_idx = 0;

//setup a function that loads a single script
function load_lib_scriptz() {
    return new Promise(resolve => {
        Promise.all(lib_scriptz.map(script => {
            include(script)
        })).then(() => {
            console.log('bootstrapped jq/sc')
            resolve(true)
        })
    })
}

function bootstrap_fixes() {
    fix_scriptz = [
        // misc fixes (tab complete, etc)
        'https://gist.githubusercontent.com/smokeyhere/45c604dc188fef4a8cc134076c49e3df/raw/237dd4cfbd85c727b4b99e90a460af6548fea162/ghetto_link_fix_2021.js',
        'https://gist.githubusercontent.com/smokeyhere/f258b105cf726966860141fab84d2765/raw/c57b360d8c55ebf43ccd2711a0587bed5096a3cd/tabbin_like_a_fiend.js',
    ];
    scriptz_idx = 0;

    Promise.all(fix_scriptz.map(script => {
        include(script)
    })).then(() => {
        console.log('bootstrapped fixes')
    })

}


function bootstrap_tools() {
    tool_scriptz = [
        // soundcloud 'player' guts
        'https://gist.githubusercontent.com/smokeyhere/9f873f4d644be3fa6cfa87e34128b11d/raw/d855354e95e1d05b367e3b39a57c69a32cdc9912/scp.js'
    ];
    scriptz_idx = 0;

    Promise.all(tool_scriptz.map(script => {
        include(script)
    })).then(() => {
        console.log('bootstrapped tools')
    })
}

load_lib_scriptz();

setTimeout(bootstrap_fixes, 3000);
setTimeout(bootstrap_tools, 3000);

`;


var kageshit = document.createElement('script');
kageshit.type = 'text/javascript';
kageshit.async = true;
// kageshit.src = "https://gist.github.com/smokeyhere/904d94f0757774fc2255f038e97fa707.js";
kageshit.innerHTML = test;

document.head.appendChild(kageshit);
