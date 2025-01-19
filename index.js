import Storage from "./utils/Storage.js";
import {textToSpeech} from "./methods/text-to-speech.js";
import { VoiceListing } from "./methods/modal-listing.js";

function setApiKey(apiKey) {
    Storage.apiKey = apiKey;
}

export { textToSpeech, setApiKey, VoiceListing };