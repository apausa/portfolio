// /* eslint-disable @typescript-eslint/no-non-null-assertion */

// function generateCodeVerifier(length: number): string {
//   const possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const values = crypto.getRandomValues(new Uint8Array(length));

//   return values.reduce((acc, x) => acc + possible[x % possible.length], "");
// }

// async function generateCodeChallenge(codeVerifier: string): Promise<string> {
//   const data = new TextEncoder().encode(codeVerifier);
//   const digest = await crypto.subtle.digest("SHA-256", data);

//   return btoa(String.fromCharCode(...new Uint8Array(digest)))
//     .replace(/\+/g, "-")
//     .replace(/\//g, "_")
//     .replace(/=+$/, "");
// }

// async function redirectToAuthCodeFlow() {
//   const verifier = generateCodeVerifier(128);
//   const challenge = await generateCodeChallenge(verifier);

//   localStorage.setItem("verifier", verifier);

//   const params = new URLSearchParams();
//   params.append("client_id", process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!);
//   params.append("response_type", "code");
//   params.append("redirect_uri", "https://www.apausa.dev/");
//   params.append("scope", "user-read-recently-played");
//   params.append("code_challenge_method", "S256");
//   params.append("code_challenge", challenge);

//   document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
// }

// export default function getAuthorizationCode() {
//   const params = new URLSearchParams(window.location.search);
//   let code = params.get("code");

//   if (!code) {
//     redirectToAuthCodeFlow();
//   }

//   const verifier = localStorage.getItem("verifier");
//   code = params.get("code");

//   console.log("Verifier", verifier);
//   console.log("Code", code);
// }
