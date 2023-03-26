import { Cloudinary } from "@cloudinary/url-gen";

export const cloud = new Cloudinary({
	cloud: {
		cloudName: 'demo'
	}
});