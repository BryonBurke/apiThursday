// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { ApiFetch } from './js/lyrics.js';



// Images
// import earth from './img/earth.png';


// USER INTERFACE
$(document).ready(function(){

  // $('#userInput').submit(async (event) => {
  //   event.preventDefault();
  //   const artist = $("#artist").val();
  //   const title = $("#title").val();
  //   const lyrics = await apiFetch.getLyricsChain(artist, title);
  //   console.log(apiFetch.count);
  //   $('#lyrics').text('');
  //   if (lyrics.lyrics) {
  //     console.log(lyrics.lyrics);
  //     const cleanLyrics = `<p>${lyrics.lyrics}</p>`;
  //     $('#lyrics').append(cleanLyrics);
  //   } else if (lyrics.error) {
  //     $('#lyrics').text(lyrics.error);
  //   } else {
  //     console.log('OUCH!!!');
  //   }
  //
  // });

  $('#userInput').submit((event) => {
    event.preventDefault();
    const artist = $("#artist").val();
    const title = $("#title").val();
    $('#lyrics').text('');
    apiFetch.getLyricsChain(artist, title).then((lyrics) => {
      console.log(apiFetch.calls);
      if (lyrics.lyrics) {
        const cleanLyrics = `<p>${lyrics.lyrics}</p>`;
        $('#lyrics').append(cleanLyrics);
      } else if (lyrics.error) {
        $('#lyrics').text(lyrics.error);
      } else {
        console.log('OUCH!!!');
      }
    });
  });

  $('#author').click(() => {
    apiFetch.getAuthor().then((auth) => {
      $('.author-id').text(auth);
      console.log(auth);
    });
  });

  $('#coin').click(() => {
    apiFetch.getBC().then((auth) => {
      $('.bc').text(auth);
      console.log(auth);
    });
  });

  // $('#bike').click( async () => {
  //   const bikes = await apiFetch.getBikes();
  //   console.log(bikes);
  // });

  const apiFetch = new ApiFetch();


});
