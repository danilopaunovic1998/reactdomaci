export default class api{
    //ovo je Get za anime
    static GET =async(param)=>{
        var response =  await fetch(
            "https://api.jikan.moe/v4" + param 
        )
        
        var data = await response.json()
        return data.data;
    }
    //get za anime po id-u
    static GetById=async(param)=>{
        var response = await fetch(
            "https://api.jikan.moe/v4/anime/"+param+"/full"
        )
        var data = await response.json()
        //console.log(data);
        return data.data;
    }

    //get za mange po id
    static GetMangaById = async(param) =>{
        var response = await fetch(
            "https://api.jikan.moe/v4/manga/"+param+"/full"
        )
        var data = await response.json()
        return data.data;
    }
}