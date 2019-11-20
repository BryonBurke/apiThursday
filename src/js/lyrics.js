export class LyricFetch {
  constructor() {

  }

  getLyricsFetchAwait(artist, title) {
    const apiPull = async (artist, title) => {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const myJson = await response.json();
      return myJson;
    }
    return apiPull()
  }

  getLyricsPromise(artist, title) {
    const lyrics = new Promise((resolve, reject) => {
      const requestObj = new XMLHttpRequest();
      const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
      requestObj.onload = function() {
        if (this.status === 200) {
          const parsedJson = JSON.parse(requestObj.response);
          resolve(parsedJson.lyrics);
        } else {
          reject(Error(requestObj.statusText));
        }
      }
      requestObj.open("GET", url, true);
      requestObj.send();
    });
    return lyrics;
  }



}
