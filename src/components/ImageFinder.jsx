import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
//import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { fetchImages } from './js/fetchImages';

export class ImageFinder extends Component {
  state = {
    data: [],
    isLoading: false,
    isError: false,
    searchResult: '',
    page: 1,
    totaHits: 0,
    isModal: false,
    modalImageLink: '',
  };

  getSearchResults = searchResultData => {
    this.setState({ searchResult: searchResultData });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.closeModal.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal.bind(this));
  }

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

  openModal = imageLink => {
    this.setState({
      isModal: true,
      modalImageLink: this.state.data.find(
        dataItem => dataItem.webformatURL === imageLink
      ).largeImageURL,
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
            imageGalleryItems={this.state.data}
            itemClickFunction={this.openModal}
          />
        )}
      </div>
    );
  }
}
/**
 * <Button />
 * <Modal />
 * 
 * this.setState(prev =>({
 images: [...prev.images, ...hits],
 isLoadMore: this.state.page < Math.ceil(totalHits / 12 )
}))
 */
