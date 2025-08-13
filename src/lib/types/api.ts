interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

interface SpotifyExternalUrls {
  spotify: string;
}

interface SpotifyExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

interface SpotifyArtist {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

interface SpotifyAlbum {
  album_type: "album" | "single" | "compilation";
  total_tracks: number;
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  type: "album";
  uri: string;
  artists: SpotifyArtist[];
}

interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: SpotifyExternalIds;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

interface SpotifyContext {
  type: "album" | "artist" | "playlist";
  href: string;
  external_urls: SpotifyExternalUrls;
  uri: string;
}

interface SpotifyPlayHistoryItem {
  track: SpotifyTrack;
  played_at: string;
  context: SpotifyContext;
}

interface SpotifyCursors {
  after: string;
  before: string;
}

export interface SpotifySong {
  href: string;
  limit: number;
  next: string | null;
  cursors: SpotifyCursors;
  items: SpotifyPlayHistoryItem[];
}

export interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}
