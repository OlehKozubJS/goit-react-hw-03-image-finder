import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { fetchImages } from './js/fetchImages';

export class ImageFinder extends Component {
  state = {
    hasJustEntered: true,
    images: [],
    isLoading: false,
    isError: false,
    searchResult: '',
    page: 1,
    totalHits: 0,
    isLoadMore: false,
    isModal: false,
    modalImageLink: '',
  };

  getSearchResults = searchResultData => {
    this.setState({
      hasJustEntered: false,
      images: [],
      searchResult: searchResultData,
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.searchResult !== prevState.searchResult
    ) {
      this.setState({ isLoading: true });
      try {
        let imagesData = await fetchImages(
          this.state.searchResult,
          this.state.page
        );
        this.setState(prev => ({
          images: [...prev.images, ...imagesData.hits],
          isLoadMore: prev.page < Math.ceil(imagesData.totalHits / 12),
          totalHits: imagesData.totalHits,
        }));
      } catch (error) {
        this.setState({ isError: true, error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  openModal = largeImageLink => {
    this.setState({
      isModal: true,
      modalImageLink: largeImageLink,
    });
  };

  closeModal = event => {
    if (
      event.type === 'click' ||
      (event.type === 'keydown' && event.key === 'Escape')
    ) {
      this.setState({ isModal: false });
    }
  };

  loadMoreFunction = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    return (
      <div>
        {this.state.isModal && (
          <Modal
            clickFunction={this.closeModal}
            imageLink={this.state.modalImageLink}
          />
        )}
        <Searchbar submitFunction={this.getSearchResults} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            imageGalleryItems={this.state.images}
            itemClickFunction={this.openModal}
          />
        )}
        <Button
          hasJustEntered={this.state.hasJustEntered}
          isLoadMore={this.state.isLoadMore}
          clickFunction={this.loadMoreFunction}
        />
      </div>
    );
  }
}
