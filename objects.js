var playlist = {
  SonuNigam:'Tuu', 
  ArRahman: 'Jai Ho', 
  ArjitSingh: 'Sun zara',
  PhilOchs : "My Bloody Valentine"
}
  
function updatePlaylist (targetObject,updatesObject){
  return Object.assign({},targetObject,updatesObject)
}
function removeFromPlaylist(obj)
