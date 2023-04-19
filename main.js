
const {app, BrowserWindow} = require('electron') //importation du module 'electron'
const path = require('path') // importation du module 'path'
let mainWindow
function createWindow () { //fonction pour creer la fenetre
  mainWindow = new BrowserWindow({width: 800, height: 600, icon: path.join(__dirname, 'assets/icons/icon.ico')}) //creation de la fenetre avec un taille et une icone
  mainWindow.loadFile('index.html') //liaison avec le fichier html
  mainWindow.on('closed', function () { //si toutes les fenetre sont fermées, ça quitte le programme
    mainWindow = null
  })
}
app.on('ready', createWindow) //pour lancer la creation de la fenetre
app.on('window-all-closed', function () { //interdir la creation pourl es utilisateur de MacOS
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () { //euhhhhh je sais pas ce que ça fait ...
  if (mainWindow === null) {
    createWindow()
  }
})
