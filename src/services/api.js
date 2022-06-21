export default class api{
    static GET =async(param)=>{
        var response =  await fetch(
            "https://api.jikan.moe/v4" + param 
        )
        
        var data = await response.json()
        return data.data;
    }

    static GetById=async(param)=>{
        var response = await fetch(
            "https://api.jikan.moe/v4/anime/"+param+"/full"
        )
        var data = await response.json()
        console.log(data);
        return data.data;
    }
}