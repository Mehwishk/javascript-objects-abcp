var playlist = { SonuNigam:"Tuu", A.R.Rahman:"Jai Ho", Arjit Singh: "Sun zara"};
function updatePlaylist (obj, artist, song){
  return Object.assign({}, obj, artist, song)
}