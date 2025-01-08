import baseUrl from "../config/Api.js";
import fs from "fs";
import Storage from "../utils/Storage.js";
import path from "path";
import { Readable } from "stream";

export async function textToSpeech(voiceId, text, modelId = "eleven_multilingual_v2", customPath) {
    const url = `${baseUrl}text-to-speech/${voiceId}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xi-api-key': Storage.apiKey,  // ElevenLabs requires the API key in headers
                "Accept": "audio/mpeg"
            },
            body: JSON.stringify({
                text: text,
                model_id: modelId,
                output_format: 'mp3_44100_128',
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        if (!fs.existsSync(customPath)) {
            fs.mkdirSync(customPath, { recursive: true });
        }

        const audioPath = path.join(customPath, `${voiceId}.mp3`);
        const writeStream = fs.createWriteStream(audioPath);

        // Convert the response body to a Node.js readable stream
        const readableStream = Readable.fromWeb(response.body);

        // Pipe the readable stream to the file
        readableStream.pipe(writeStream);

        // Return a promise that resolves when the stream finishes
        await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });

        console.log('Audio saved at:', audioPath);
        return audioPath;

    } catch (error) {
        console.error('Error during text-to-speech conversion:', error);
        throw error;
    }
}

