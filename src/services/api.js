export default class api{
    static GET =async(param)=>{
        var response =  await fetch(
            "https://api.jikan.moe/v4" + param 
        )
        
        var data = await response.json()
        return data.data;
    }
}