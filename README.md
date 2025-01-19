
![Logo]([https://private-user-images.githubusercontent.com/12028621/243114574-21267d89-5e82-4e7e-9c81-caf30b237683.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzcyODU3NDcsIm5iZiI6MTczNzI4NTQ0NywicGF0aCI6Ii8xMjAyODYyMS8yNDMxMTQ1NzQtMjEyNjdkODktNWU4Mi00ZTdlLTljODEtY2FmMzBiMjM3NjgzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTE5VDExMTcyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3N2MyN2E1OTJlYWNiN2EzNDEzZWUxYjQ3M2JjNDRhYjMwYmU1YjU4ZGM5YjA1YTk0NDBlNjU3ZWMxM2MyMTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.pstXgOb-5G0gHLxGXMrf9zadn-hZXvFExZ7M9iMSpmc](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVjFkh3Dkkwsfk6PqYq4qyj8Byd5QMaUDilYxfhg-k-UE5uplHOkm6r31_BBb6ylYMa0&usqp=CAU))


## How to Use

### 1. **Login to Eleven Labs**
- Go to the Eleven Labs website: [Eleven Labs](https://elevenlabs.io/)
- If you already have an account, log in with your credentials.
- If you don't have an account, you’ll need to sign up by creating a new account.

### 2. **Get Your API Key**
After logging in:
- Navigate to the **Dashboard** or **API section** (you may find it under your profile or in a developer section).
- You should find an option to **generate an API key**.
- Copy the generated API key (this key will be used in your code).

## Dashboard Login Screenshot

![App Screenshot](https://eleven-public-cdn.elevenlabs.io/payloadcms/xfry6n765w-Screenshot%202024-12-02%20at%2016.48.44.webp)

## Demo

https://elevenlabs.io/app/speech-synthesis/text-to-speech


# Eleven Labs Text-to-Speech API Node.js Package
This open-source Node.js package provides a simple and efficient way to interact with the Eleven Labs Text-to-Speech API. It enables seamless integration of advanced text-to-speech functionality into your applications, making it easier to generate high-quality audio from text.


## Installation

Install text-to-speech with npm

```bash
  npm install @eleven-app/text-to-speech

```
    
## Usage/Examples

```javascript
import { setApiKey } from '@eleven-app/text-to-speech';

// Set your API key for Eleven Labs Text-to-Speech
setApiKey('your_api_key_here');

```

```javascript
import { textToSpeech } from '@eleven-app/text-to-speech';

// Generate speech from text
textToSpeech("Voice_id", "Hello, world!", "eleven_multilingual_v2", "customPath")
  .then(async (res) => {
    console.log("Audio file saved at:", res); // Path to the generated audio file
  })
  .catch((err) => {
    console.error("Error:", err);
  });
```

```javascript
import { VoiceListing } from '@eleven-app/text-to-speech';

// Retrieve available voice listings
VoiceListing()
  .then((voices) => {
    console.log("Available Voices:", voices);
  })
  .catch((err) => {
    console.error("Error fetching voice listings:", err);
  });
```
## Features

- **Text-to-Speech Conversion**: Easily generate high-quality audio from text using the Eleven Labs API.
- **Voice Listing**: Retrieve and explore all available voices for text-to-speech generation, enabling customizable experiences.



# Hi, I'm Vipin Singh! 👋

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vsingh-portfolio.netlify.app/)[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vipinstack/)[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/VipinCh18728797)



## 🚀 About Me

I'm a passionate **Full Stack Developer** with **3 years of experience** specializing in building high-performance web applications. I focus on both **frontend** and **backend** development, using modern technologies and best practices to deliver seamless, user-friendly experiences.

I’ve created this package to help developers like you integrate **text-to-speech functionality** with ease, utilizing the **Eleven Labs API**.

### Skills & Expertise:
- **Frontend Development**: JavaScript, React.js, Next.js, TypeScript, HTML, CSS, Redux
- **Backend Development**: Node.js, NestJS, MySQL, MongoDB, Redis, Microservices
- **DevOps & Tools**: Docker, System Design, Debugging
- **Specializations**: Web Application Development, API Design, Performance Optimization

I'm dedicated to crafting **scalable**, **maintainable**, and **innovative** solutions that enhance user experience and improve application performance.


## Authors

- [@Vipinstack](https://github.com/Vipinstack)

