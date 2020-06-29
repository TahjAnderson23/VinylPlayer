export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "9c2e39c0301b4002ab95e58bcb3fc9c4";
export const redirectUri = process.env.REACT_APP_SPOTIFYURI;

export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];