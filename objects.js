var playlist = {
  SonuNigam:'Tuu', 
  ArRahman: 'Jai Ho', 
  ArjitSingh: 'Sun zara',
  PhilOchs : "My Bloody Valentine"
}
  
function updatePlaylist (){
  return Object.assign({},targetObject,updatesObject)
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return (playlist);
}
