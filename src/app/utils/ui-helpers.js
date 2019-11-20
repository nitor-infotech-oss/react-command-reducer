const UIHelpers = {
  getThumbUrl: (preview, author, size) => {
    const imageSize = size ? `${size}x${size}` : '50x50';
    const placeHolder = `http://via.placeholder.com/${imageSize}/1?text=${author}`;
    // let placeHolder = `http://lorempixel.com/50/50/abstract/${author}`; let
    // placeHolder = `http://lorempixel.com/${imageSize}/abstract/${author}`;

    if (!preview) {
      return placeHolder;
    }

    const { images } = preview;
    if (!images) {
      return placeHolder;
    }

    if (images.length <= 0) {
      return placeHolder;
    }

    return images[0].source.url;
  },
};

export default UIHelpers;
