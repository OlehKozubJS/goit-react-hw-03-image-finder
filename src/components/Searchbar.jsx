import { Component } from 'react';

export class Searchbar extends Component {
  enterSearchData = event => {
    event.preventDefault();

    const searchData = event.currentTarget.elements.searchInput.value;
    this.props.submitFunction(searchData);

    event.currentTarget.reset();
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.enterSearchData}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="searchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
