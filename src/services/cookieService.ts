
const cookieService = (ftype:string , name:string , value:string , daysToLive:number):any => {
    
    const setCookie = (name:string , value:string , daysToLive:number) => {
        // Encode value in order to escape semicolons, commas, and whitespace
        try{
            let cookie:string = name + "=" + encodeURIComponent(value);
            if(typeof daysToLive === "number") {
                /* Sets the max-age attribute so that the cookie expires
                after the specified number of days */
                cookie += "; max-age=" + (daysToLive*24*60*60);
                
                document.cookie = cookie;
            }
        }catch{
            console.log("SetCookie Method Error");
        }
    }

    const getCookie = (name?:string):string => {
        // Split cookie string and get all individual name=value pairs in an array
        var cookieArr = document.cookie.split(";");
        
        // Loop through the array elements
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            
            /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
            if(name == cookiePair[0].trim()) {
                // Decode the cookie value and return
                return decodeURIComponent(cookiePair[1]);
            }
        }
        
        // Return null if not found
        return "";
    }

    if(ftype==="set"){
        setCookie(name , value , daysToLive);   
    }else{
        return getCookie(name);
    }
}

export default cookieService;