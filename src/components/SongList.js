import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    return <div>Song List!</div>;
  }
}

// state is the complete state of our Redux store
// mapStateToProps is naming convention
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
