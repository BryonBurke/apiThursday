import { LyricFetch } from './../src/js/lyrics.js';

describe('LyricFetch', () => {

  let lyricFetch;

  beforeEach(() => {
    lyricFetch = new LyricFetch();
  });

  test('should return lyrics', async () => {
    const lyrics = await lyricFetch.getLyricsPromise('daft punk','around the world');
    expect(lyrics.lyrics).toEqual("Around the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world");
  });

});
