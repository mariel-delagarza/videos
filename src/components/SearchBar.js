import React from 'react';

class SearchBar extends React.Component {

  /*Utilizing state turns this into a controlled component and ensures
  we are saving our data inside the component and not inside the DOM*/
  state = { term: ''};

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;