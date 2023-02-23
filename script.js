async function showData()
{
    let city = document.getElementById('city').value;
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
        if (city == "")
        {
            alert("Please enter your city name...");
        }
        
        if (res.status == 404)
        {
            alert('city not found');
        }

        let data = await res.json();
        let t = data.main.temp - 273.15;
        t = t.toFixed(2);
        document.getElementById('result').value = t + ' °C';
}