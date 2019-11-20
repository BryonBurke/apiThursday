export class Lyrics {
  constructor() {

  }

  getLyricsFetchAwait(artist, title) {
    const apiPull = async (artist, title) => {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const myJson = await response.json();
      console.log(myJson.lyrics);
    }
    return apiPull()
  }

  // getLyricsPromise(artist, title) {
  //
  // }



}
