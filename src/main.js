// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { LyricFetch } from './js/lyrics.js';


// Images
// import earth from './img/earth.png';

// AUDIO
// import sunMp3 from './mp3/sun.mp3';
// const sunSound = new Audio();
// sunSound.src = sunMp3;


// TEMPLATING
// import { buildPlanetInfo, buildSunInfo } from './js/templates.js';


// USER INTERFACE
$(document).ready(function(){

  $('#userInput').submit(async (event) => {
    event.preventDefault();

    const artist = $("#artist").val();
    const title = $("#title").val();
    const lyrics = await lyricFetch.getLyricsPromise(artist, title);
    console.log(lyricFetch.count);
    if (lyrics.lyrics) {
      $('#lyrics').text(lyrics.lyrics);
    } else if (lyrics.error) {
      $('#lyrics').text(lyrics.error);
    } else {
      console.log('OUCH!!!');
    }

  });




  const lyricFetch = new LyricFetch();


});
