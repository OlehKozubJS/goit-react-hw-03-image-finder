import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
//import { Button } from './Button';
import { Loader } from './Loader';
import css from './styles/styles.module.css';
import axios from 'axios';

export class ImageFinder extends Component {
  state = {
    data: [],
    isLoading: false,
    isError: false,
    searchResult: '',
    page: 1,
  };

  async fetchImages(searchResult) {
    const searchParams = new URLSearchParams({
      key: '37447910-ed3fb6b843fd00e4ff71a16f5',
      q: searchResult,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: 1,
      per_page: 12,
    });

    const response = await axios.get(
      'https://pixabay.com/api/?' + searchParams
    );
    return await response.data;
  }

  getSearchResults = searchResultData => {
    this.setState({ searchResult: searchResultData });
    console.log(searchResultData);
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchResult !== prevState.searchResult
    ) {
      this.setState({ isLoading: true });
      try {
        let imagesData = await this.fetchImages(this.state.searchResult);
        this.setState({ data: imagesData.hits });
      } catch (error) {
        this.setState({ isError: true, error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <div>
        <Searchbar submitFunction={this.getSearchResults} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery imageGalleryItems={this.state.data} />
        )}
      </div>
    );
  }
}
/**
 * <Button />
 * <Modal />
 */
/*this.state.page !== prevState.page ||*/
