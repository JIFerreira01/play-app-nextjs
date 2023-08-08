import { RequestToken } from "./Requests";
import nookies from 'nookies';

// const ACCESS_TOKEN = "ACCESS_TOKEN";
// const objectRequest = nookies.get(null).ACCESS_TOKEN ? nookies.get(null).ACCESS_TOKEN : await RequestToken();
export function withAccessToken(action: any) {
    return async (props: any) => {
        try {
            const objectRequest = await RequestToken();
            const modifiedProps = {
                ...props,
                data: objectRequest

            }
            return action(modifiedProps);
        } catch (error) {
            console.log('deu erro no withAccessToken', error)
        }
    }
}

export function requestPlaylist(){

}
