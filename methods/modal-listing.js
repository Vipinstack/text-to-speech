import baseUrl from "../config/Api.js";

export async function VoiceListing(){
    const url = `${baseUrl}voices`;
    try{
       const response = await fetch(url);
       let data =  await response.json();
       return data;
    }catch(error){
        throw error;
    }

}