import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'
  }
});

export default cld;
