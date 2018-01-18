var playlist = {
  SonuNigam:'Tuu', 
  ArRahman: 'Jai Ho', 
  ArjitSingh: 'Sun zara'}
  
function updatePlaylist (obj, artist, song){
  return Object.assign({}, obj, artist, song)
}