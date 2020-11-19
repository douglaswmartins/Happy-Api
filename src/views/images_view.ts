import Image from '../models/Image';

export default {
  renger(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.0.171:3333/uploads/${image.path}`
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.renger(image));
  }
}