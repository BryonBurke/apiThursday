export class Test {
  constructor() {
    this.calls = 0;
  }

  // getLyricsFetchAwait(artist, title) {
  //   const apiPull = async (artist, title) => {
  //     const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  //     const myJson = await response.json();
  //     return myJson;
  //   }
  //   return apiPull()
  // }

  getLyricsChain(artist, title) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then((res) => {
      return res.json();
    });
  }

  // getLyricsPromise(artist, title) {
  //   this.calls++;
  //   const lyrics = new Promise((resolve, reject) => {
  //     const requestObj = new XMLHttpRequest();
  //     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  //     requestObj.onload = function() {
  //       if (this.status === 200 || this.status === 404) {
  //         const parsedJson = JSON.parse(requestObj.response);
  //         resolve(parsedJson);
  //       } else {
  //         reject(Error(requestObj.statusText));
  //       }
  //     };
  //     requestObj.open("GET", url, true);
  //     requestObj.send();
  //   });
  //   return lyrics;
  // }



}
