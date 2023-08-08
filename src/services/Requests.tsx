import axios from 'axios';
import nookies from 'nookies';


const client_id: String = "a8d9b4272db9483480d93b0de941941b";
const client_secret: String = "ada17cc026c241868cc34f2a55b8e59f";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: {
        "grant_type": "client_credentials",
        "client_id": client_id,
        "client_secret": client_secret
    }
}

export async function RequestToken(){
    console.log('request token')
    return await axios.post(authOptions.url,authOptions.body, {
        headers:authOptions.headers
    }).then((response) => {
        nookies.set(null, ACCESS_TOKEN, `${response.data.token_type} ${response.data.access_token}`)

        return response.data
    })
    .catch(error => error)
}

export async function RequestPlaylist(){
    console.log('request da okaylist')
    const authorization = nookies.get(null).ACCESS_TOKEN;
    let returnFormatedArrayObject: Object<any> = {name: '', tracks: []};
    try {
        return await axios.get("https://api.spotify.com/v1/playlists/5VhUPmOwSNuj1ZShpIdKbK", {
            headers: {
                "Authorization": authorization
            }
        })
        .then((response:any) => {
            returnFormatedArrayObject.name = response.data.name;
            response.data.tracks.items.map((track: any) => track.track.preview_url ? returnFormatedArrayObject.tracks.push(track.track) : false )
           return returnFormatedArrayObject;
        })
        .catch((error) => error)
    } catch (error) {
        return error
    }
}