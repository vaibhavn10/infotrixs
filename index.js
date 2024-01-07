//FUNCTION FOR DISPLAYING TIME
let time="";

const setTime = () =>{
    time = new Date();
    let m = "AM";
    if(time.getHours()>=12 && time.getMinutes()>=0)
    {
        m="PM";        
    }

    if(time.getHours()>=7 && time.getHours()<=20)
    {
        document.getElementById("timeimg").src = "https://media.istockphoto.com/id/855604440/vector/yellow-segmented-geometric-sun-with-rays-vector.jpg?s=612x612&w=0&k=20&c=POvIcTi-hhmQg6bLMOGZIXfHkJI1Teu_eVwxr3eofTk=";
    }

    document.getElementById("time").innerHTML = time.getHours()+":"+time.getMinutes()+" "+m;
}

//FUNCTION TO GET TEMPERATURE OF AREA USING RAPID API: https://rapidapi.com/weatherapi/api/weatherapi-com/
const getTemp = async() =>{
    let location = document.getElementById("location").value;
    if(location==="")
    {
        location = "India";
    }
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`;
    const response = await fetch(url, {
            method: 'GET',
            headers: {
                //Subscribe at the given link and use your api key to get weather forecast.
                'X-RapidAPI-Key':'Enter Your API key Here.',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
    });
    const result = await response.json();
    document.getElementById("navtemp").innerHTML = result.location.name+", "+result.location.region+", "+result.location.country+"&nbsp;&nbsp;"+result.current.temp_c+"&deg;c";
    document.getElementById("temperature").innerHTML = result.current.temp_c +"&deg;c";
    document.getElementById("airquality").innerHTML = result.current.condition.text;
    document.getElementById("humidity").innerHTML = result.current.humidity+"%";
    document.getElementById("wind").innerHTML = result.current.wind_kph + "km/h";
    document.getElementById("gusts").innerHTML = result.current.gust_kph + "km/h";
}

const getmoredetails = () =>{
    let d = document.getElementById("details").style.display;
    if(d==="none")
    {
        document.getElementById("details").style.display = "flex";
    }
    else{
        document.getElementById("details").style.display = "none";
    }
}

setInterval(()=>{
    setTime();
    // If you want to get continuous updated data uncomment below line.
    // getTemp();
},1000)