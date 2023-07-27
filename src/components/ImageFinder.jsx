import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
//import { Button } from './Button';
import { Loader } from './Loader';
import { fetchImages } from './js/fetchImages';

export class ImageFinder extends Component {
  state = {
    data: [],
    isLoading: false,
    isError: false,
    searchResult: '',
    page: 1,
  };

  getSearchResults = searchResultData => {
    this.setState({ searchResult: searchResultData });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchResult !== prevState.searchResult
    ) {
      this.setState({ isLoading: true });
      try {
        let imagesData = await fetchImages(this.state.searchResult);
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
