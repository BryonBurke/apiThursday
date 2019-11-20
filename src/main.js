// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { LyricFetch } from './js/lyrics.js';


// Images
// import earth from './img/earth.png';


// USER INTERFACE
$(document).ready(function(){

  $('#userInput').submit(async (event) => {
    event.preventDefault();

    const artist = $("#artist").val();
    const title = $("#title").val();
    const lyrics = await lyricFetch.getLyricsPromise(artist, title);
    console.log(lyricFetch.count);
    $('#lyrics').text('');
    if (lyrics.lyrics) {
      console.log(lyrics.lyrics);
      const cleanLyrics = `<p>${lyrics.lyrics}</p>`;
      $('#lyrics').append(cleanLyrics);
    } else if (lyrics.error) {
      $('#lyrics').text(lyrics.error);
    } else {
      console.log('OUCH!!!');
    }

  });

  $('#bike').click( async () => {
    const bikes = await lyricFetch.getBikes();
    console.log(bikes);
  });




  const lyricFetch = new LyricFetch();


});
