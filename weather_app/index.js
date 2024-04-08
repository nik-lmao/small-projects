fetch("https://api.weatherapi.com/v1/current.json?key=ffcdf1c758394ad0b2f203234232802&q=Traunstein")
    .then(response => response.json())
    .then(data => {
        var temperature_c = data.current.temp_c;
        var temperature_h = temperature_c / 5
        var temperature_k = temperature_c + 273.15
        var temperature_r = temperature_c * 9 / 5 + 491.67
        var temperature_f = temperature_c * 9 / 5 + 32
        var temperature_re = temperature_c * 8 / 10

        document.getElementById("temperature_h").innerHTML = temperature_h + "°h";
        document.getElementById("temperature_k").innerHTML = temperature_k + "K";
        document.getElementById("temperature_c").innerHTML = temperature_c + "°C";
        document.getElementById("temperature_r").innerHTML = temperature_r + "°R";
        document.getElementById("temperature_f").innerHTML = temperature_f + "°F";
        document.getElementById("temperature_re").innerHTML = temperature_re + "°Re";
    });