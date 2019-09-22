import React from 'react';

class SearchBar extends React.Component {

  /*Utilizing state turns this into a controlled component and ensures
  we are saving our data inside the component and not inside the DOM*/
  state = { term: ''};

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //TODO: Make sure we call callback from parent component
  };
  /*onChange is a special name for the attribute below and gets called 
   any time input gets changed; if we do not use it for the callback 
   function we will not be able to change the value of our state*/
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;