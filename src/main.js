// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { ApiFetch } from './js/apiFetch.js';


// USER INTERFACE
$(document).ready(function(){



  $('#coin').click(() => {
    apiFetch.getBC().then((auth) => {
      $('.bc').text(auth);
      console.log(auth);
    });
  });


  const apiFetch = new ApiFetch();


});
