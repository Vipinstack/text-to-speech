# text-to-speech
This Node.js package is open source and uses Eleven Labs Text to Speech API.


import { textToSpeech, setApiKey } from '@vipin-singh/text-to-speech'; setApiKey('api_key');

textToSpeech("Voice_id", "text", "eleven_multilingual_v2", "customPath") .then(async (res) => { return res; // customPath audio path.. }) .catch((err) => { console.error("Error:", err); });