export interface NewsElement {
  category: {
    name: string;
    iconURL: string;
  };
  subtitle: string;
  imageURLs: {imageURL: string}[];
  title: string;
  video: {
    videoURL: string;
  };
  articleID: number;
  releasedate: string;
}
