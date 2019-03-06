import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Alert from '../src/alert';
import Button from '../src/button';
import ButtonList from '../src/button-list';
import FullscreenModal from '../src/full-screen-modal';
import ImageLibrary, { SGLibraryImage } from '../src/image-library';

const stories = storiesOf('Image Library', module);

let imageIdCounter = 0;
const makeLibraryImage = (width: number, height: number) => ({
  id: 'abcd-ef01-' + imageIdCounter++,
  name: 'name_abcd-ef01-' + imageIdCounter,
  created: 100000,
  originalUrl: `https://via.placeholder.com/${width}x${height}`,
  thumbnailUrl: `https://via.placeholder.com/${width}x${height}`,
  width,
  height,
});

const images = [
  makeLibraryImage(100, 300),
  makeLibraryImage(300, 300),
  makeLibraryImage(300, 100),
  makeLibraryImage(25, 25),
  makeLibraryImage(50, 400),
  makeLibraryImage(400, 50),
];

const fileReader = new FileReader();

interface ExampleContainerState {
  images: Array<SGLibraryImage>;
  showDetailsSuccess: boolean;
  uploadingImage?: SGLibraryImage;
}

// some stuff i did in here might be dubious but this was done mostly for me to
// better understand the requirements of the ui-components designed
class ExampleContainer extends Component<any, ExampleContainerState> {
  public state: ExampleContainerState = {
    images: [],
    showDetailsSuccess: false,
    uploadingImage: null,
  };

  public componentDidMount() {
    fileReader.onload = (e: any) => {
      this.setState(prevState => {
        const { uploadingImage } = prevState;
        const { result } = e.target;
        return {
          uploadingImage: {
            ...uploadingImage,
            thumbnailUrl: result,
            originalUrl: result,
            width: 999, // can't easily get width or height from filereader result
            height: 888,
          },
        };
      });
    };
  }

  public render() {
    const images = this.getImages();

    return (
      <FullscreenModal hasPadding={false} isOpen title="Image Library">
        <ImageLibrary
          dateFormatter={millis => new Date(millis).toString()}
          detailsAlert={this.getDetailsAlert()}
          maximumImageBytes={4 * (1 << 20) /* 4 MB */}
          onUpload={this.handleUpload}
          onUploadFailure={action('invalid upload')}
          {...this.props}
          images={images}
          renderImageDetailsActions={image => (
            <ButtonList>
              <Button type="secondary" onClick={() => {}}>
                Delete
              </Button>
              <Button type="primary" onClick={this.handleConfirm}>
                Insert Image
              </Button>
            </ButtonList>
          )}
        />
      </FullscreenModal>
    );
  }

  private handleConfirm = () => {
    // i don't want to use real transition group code here to avoid bloating the pkg.json
    this.setState({ showDetailsSuccess: true });
    setTimeout(() => this.setState({ showDetailsSuccess: false }), 3500);
  };

  private getDetailsAlert = () => {
    if (!this.state.showDetailsSuccess) {
      return null;
    }

    // consumer will use "real" transition group code.
    // wrapped in a div to prove we don't type check that the alert has "AlertProps".
    return (
      <div>
        <Alert type="success" dismissable={false}>
          Wow! A good thing happened.
        </Alert>
      </div>
    );
  };

  private getImages = () => {
    const { uploadingImage } = this.state;
    const images = this.state.images.concat(this.props.images);

    if (!uploadingImage || !uploadingImage.thumbnailUrl) {
      return images;
    }

    return [uploadingImage].concat(images);
  };

  private handleUpload = (file: File) => {
    fileReader.readAsDataURL(file);

    const uploadIllusion = () => {
      this.setState((prevState: any) => {
        const { uploadingImage } = prevState;
        const uploadPercent = uploadingImage.uploadPercent + 1;

        if (uploadPercent < 100) {
          setTimeout(uploadIllusion, 18);
        } else {
          this.handleUploadComplete();
        }

        return { uploadingImage: { ...uploadingImage, uploadPercent } };
      });
    };

    setTimeout(uploadIllusion, 18);
    this.setState({
      uploadingImage: {
        id: file.name,
        name: file.name,
        uploadPercent: 0,
        created: (new Date() as any) - 0, // date math is valid but ts complains
      },
    });
  };

  private handleUploadComplete = () => {
    this.setState(prevState => {
      const { images, uploadingImage } = prevState;
      return {
        images: [uploadingImage].concat(images),
        uploadingImage: null,
      };
    });
  };
}

stories.add('without upload alert, with images', () => (
  <ExampleContainer images={images} />
));

stories.add('with initial image that does not exist in the library', () => (
  <ExampleContainer
    images={[]}
    initialImage={{
      id: 'story-fake-id',
      name: 'image.jpeg',
      originalUrl: 'https://via.placeholder.com/45x15',
    }}
  />
));

stories.add('with upload alert, no images', () => (
  <ExampleContainer
    uploadAlert={
      <Alert type="danger">
        The image you're attempting to upload exceeds our per-image size limit.
      </Alert>
    }
    images={[]}
  />
));
