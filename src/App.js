import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  addTrack() {
    console.log("add track:", this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  }

  searchTrack() {
    console.log("search track:", this.searchInput.value);
    this.props.onSearchTrack(this.searchInput.value);
  }

  render() {
    console.log("store: ", this.props.tracks);
    return (
      <div>
        <div>
          <input
            type="text"
            ref={input => {
              this.trackInput = input;
            }}
          />
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input
            type="text"
            ref={input => {
              this.searchInput = input;
            }}
          />
          <button onClick={this.searchTrack.bind(this)}>Search track</button>
        </div>

        <ul>
          {this.props.tracks.map((track, index) => (
            <li key={index}>{track.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track =>
      track.name.includes(state.filterTracks)
    )
  }),
  dispatch => ({
    onAddTrack: trackName => {
      const payload = {
        id: Date.now().toString(),
        name: trackName
      };
      dispatch({ type: "ADD_TRACK", payload: payload });
    },
    onSearchTrack: searchTrack => {
      dispatch({ type: "SEARCH_TRACK", payload: searchTrack });
    }
  })
)(App);
