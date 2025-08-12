interface SuccessResponse {
  spotify: string;
  name: string;
}

interface ErrorResponse {
  error: string;
}

export type SpotifyFrontResponse = SuccessResponse | ErrorResponse;
