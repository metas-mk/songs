// Action creator
// named export
export const selectSong = song => {
  // return an action
  return {
    type: 'SONG-SELECTED',
    payload: song
  };
};
