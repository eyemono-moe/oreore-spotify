export const getMaxImage = (images: Spotify.Image[]): Spotify.Image => {
  if (images.length === 0) {
    throw new Error("No images");
  }

  const maxImage = images.slice(1).reduce((max, image) => {
    if (!image.width || !max.width) {
      return max;
    }
    if (image.width > max.width) {
      return image;
    }
    return max;
  }, images[0]);
  return maxImage;
};

type SpotifyUri = {
  type: string;
  id: string;
};

export const parseSpotifyUri = (uri: string): SpotifyUri => {
  const [type, id] = uri.split(":").slice(1);
  return { type, id };
};

export const getOpenSpotifyUri = (uri: string): string => {
  const { type, id } = parseSpotifyUri(uri);
  return `https://open.spotify.com/${type}/${id}`;
};
