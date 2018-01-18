var playlist = {
  SonuNigam:'Tuu', 
  A.R.Rahman: 'Jai Ho', 
  ArjitSingh: 'Sun zara'}
  
function updatePlaylist (obj, artist, song){
  return Object.assign({}, obj, artist, song)
}