import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor (props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction (isRemoval) {
    return this.props.isRemoval ? <a className="Track-action" onClick={this.removeTrack}>-</a>
      : <a className="Track-action" onClick={this.addTrack}>+</a>;
  }

  addTrack () {
    return this.props.onAdd(this.props.track);
  }

  removeTrack () {
    return this.props.onRemove(this.props.track);
  }

  render () {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{ this.props.track.name }</h3>
          <p>{ this.props.track.artist }</p>
        </div>
        <a className="Track-action">{this.renderAction}</a>
      </div>
    );
  }
}

export default Track;
