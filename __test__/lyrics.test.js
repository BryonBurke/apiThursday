import { Lyrics } from './../src/js/stuff.js';

describe('Lyrics', () => {

  let lyrics;

  beforeEach(() => {
    lyrics = new Lyrics();
  });

  test('should return lyrics', async () => {
    let response = await lyrics.getLyricsFetchAwait('daft_punk','around_the_world');
    expect(response.lyrics).toEqual("Around the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\n\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world\nAround the world, around the world");
  });

});
