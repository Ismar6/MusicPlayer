const foreignSongs = [
  "Crazy_Town-Butterfly.mp3",
  "Kelly_Family-An_Angel.mp3",
  "Luniz-I_Got_5_On_It.mp3",
  "Safri_Duo-Played_A_Live.mp3",
  "Scatman_John-Scatmans_World.mp3",
  "UB_40-Cant_Help_Falling_In_Love.mp3",
];
const domesticSongs = [
  "Sako Polumenta - Ko te nocas ljubi nevjero.mp3",
  "Colonia - 1001 Noc 2013 Rework.mp3",
  "Ana Nikolic - Pilule"
];

const songs = [...foreignSongs, ...domesticSongs];

const createSongList = () => {
  const list = document.createElement("ol");

  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));

    list.appendChild(item);
  }
  return list;
};

document.getElementById("songList").appendChild(createSongList())

songList.onclick = (e) =>{
  const clickedItem = e.target;
  const source = document.getElementById('source');
  source.src='songs/' + clickedItem.innerText;
  console.log(clickedItem.innerText)

  document.getElementById("currentSong").innerText= clickedItem.innerText;
  document.getElementById('currentlyPlayingSong').innerText = "Currently playing: "

  player.load();
  player.play();
}
const playAudio = () => {
  if(player.readyState){
    player.play()
  }
}

const pauseAudio = () => {
  player.pause()
}

const slider = document.getElementById('volumeSlider');
slider.oninput=(e)=>{
  //console.log(e)
  const volume = e.target.value;
  //console.log(volume)
  player.volume = volume;
}

const updateProgress = () =>{
  if(player.currentTime>0) {
  const progressBar = document.getElementById('progress');
  progressBar.value=(player.currentTime/player.duration)*100
  }
}