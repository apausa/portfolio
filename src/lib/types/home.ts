export interface SpotifySong {
  link: string;
  name: string;
  image: string;
  artists: string[];
}

export interface SpotifyError {
  error: string;
}

export type SpotifyResponse = SpotifySong | SpotifyError;
