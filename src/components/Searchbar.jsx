import { Component } from 'react';
import SearchbarCSS from './styles/Searchbar.module.css';

export class Searchbar extends Component {
  enterSearchData = event => {
    event.preventDefault();

    const searchData = event.currentTarget.elements.searchInput.value;
    this.props.submitFunction(searchData);

    event.currentTarget.reset();
  };

  render() {
    return (
      <header className={SearchbarCSS.Searchbar}>
        <form
          className={SearchbarCSS.SearchForm}
          onSubmit={this.enterSearchData}
        >
          <button type="submit" className={SearchbarCSS.SearchFormButton}>
            <span className={SearchbarCSS.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className="input"
            name={SearchbarCSS.SearchFormInput}
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
