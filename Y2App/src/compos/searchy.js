//component for search bar, where user can type in stuff
// and get back search results for videos
import React, { Component } from 'react';

class Searchy extends Component {
  constructor(props){
      super(props);

      this.state = {searchStr: 'init'};
  }

  render(){
    return (
      <div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Search</span>
          <input type="text" className="form-control search-bar"
            placeholder="Video Name" aria-label="Video Name"
            aria-describedby="basic-addon1"
            onChange={ event => this.onInputChangethed(event.target.value) }
            value={this.state.searchStr}
             />
        </div>
        <div>Value of Input: {this.state.searchStr}</div>
      </div>
    );
  }

  onInputChangethed(terminology){
    this.setState({searchStr: terminology});
    this.props.searchesAChangin(terminology);
  }
}

export default Searchy;