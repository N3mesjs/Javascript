// Simulazione di oggetti Utente (che arrivano dal DB o Auth)
const userMario = { id: 1, name: "Mario" };
const userLuigi = { id: 2, name: "Luigi" };
const userPeach = { id: 3, name: "Peach" };

let roleMap = new Map([
    [userMario, 'admin'],
    [userLuigi, 'guest']
]);

// Simulazione di una configurazione complessa che arriva dal server
const appConfig = {
  appName: "SuperApp",
  version: "1.0.0",
  settings: {
    tracking: {
      checkInterval: 5000,
      maxRetries: 3
    },
    ui: {
      theme: "dark"
    }
  }
};

const loginStream = [1, 2, 1, 3, 2, 4, 1];

function init(config) {
    let {
        appName: ID_Progetto,
        settings: {
            tracking: {
                checkInterval,
            } = {},
            ui: {
                theme = "light"
            } = {}
        } = {},
    } = config;

    console.log(ID_Progetto, checkInterval, theme)
}

function getRole(userObj) {
    if (roleMap.has(userObj)) {
        console.log(`l'utente ${userObj.id} di nome${userObj.name}`+
            ` e' ${roleMap.get(userObj)}`
        )
    } else {
        console.log(`l'utente ${userObj.id} di nome${userObj.name}`+
            ` e' User`
        )
    }
}

function loggedPersons(arr) {
    let logSet = new Set(arr);
    return logSet.size;
}

init(appConfig);
console.log(loggedPersons(loginStream));
getRole(roleMap);