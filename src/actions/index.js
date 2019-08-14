// Action creator
// named export
export const SelectSong = song => {
  // return an action
  return {
    type: 'SONG-SELECTED',
    payload: song
  };
};
