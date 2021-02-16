let self;

const kagShim = {
    chatBox: null,
    users: {},
    userInterval: null,
    userNames: [],
    load: () => {

        let info = fcr._fc;

        $("button[data-btntype=\"pm\"]").on("click", () => {
            let textAreas = $("textarea.fs_1:not(.parsed)");
            for(let i = 0; i < textAreas.length; i++ ) {
                textArea = textAreas[i];
                console.info("Fixing textarea ", textArea);
                if( textArea.value == "message " ) {
                    textArea.value = "";
                    textArea.setAttribute("class", "fs_1 parsed");
                    textArea.focus();
                }
                console.info("Textarea fixed", textArea);
            }
        });

        document.getElementById("chatbox").onkeydown = (event) => {
            $("#chatbox").tabComplete({
                tabbingChar: "@",
                values: kagShim.userNames.sort()
            });
        }

        self.updateUsers();
        self.userInterval = setInterval(self.updateUsers, 1000);

        console.info("User list: ", self.users);
    },

    userList: function(data) {
        data = self.userNames;
    },

    updateUsers: () => {
        let info = fcr._fc;
        let users = info.ul.users;

        self.users = {};
        self.userNames = [];
        users.forEach((user) => {
            self.users[user.username] = user;
            self.userNames.push(user.username);
        });

        self.userNames.sort();
    }
}

self = kagShim;
let rand = Math.floor((Math.random() * 10000) + 1);
//console.log = (input) => {};


let kagHook = setInterval(() => {
    let hasJoined = fcr._fc.ws.joined;
    let jqueryReady = Boolean(typeof(jQuery) !== "undefined");

    console.info("Has Joined: ", hasJoined, "jQuery ready", jqueryReady);

    if (hasJoined === true && jqueryReady && jQuery.isReady === true) {

        let jqtq = document.createElement("script");
        jqtq.src = "https://misconfigured.link/jquery.tabcomplete.js";
        document.getElementById("ftr").appendChild(jqtq);

        clearInterval(kagHook);

        setTimeout(() => { kagShim.load(); }, 1000);
    }
}, 1000);
