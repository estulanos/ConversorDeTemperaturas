function calculo(){
  
    let optTemp = document.getElementById("optTemp").value
  
    if(optTemp == 'C'){
      let celsius_fahrenheit = parseFloat(graus.value * 1.8)+32  
      resultado1.innerHTML = parseFloat(celsius_fahrenheit).toFixed(2) + ' ( Fahrenheit ) '
  
      let celsius_kelvin = parseFloat(graus.value) + 273.15
      resultado2.innerHTML = parseFloat(celsius_kelvin).toFixed(2) + ' ( Kelvin ) '
  
      let celsius_rankine = parseFloat(graus.value) + 273.15 * 1.8
      resultado3.innerHTML = parseFloat(celsius_rankine).toFixed(2) + ' ( Rankine ) '
  
    }
    
    if(optTemp == 'F'){
      let fahrenheit_celsius = parseFloat(graus.value) - 32 / 1.8  
      resultado1.innerHTML = parseFloat(fahrenheit_celsius).toFixed(2) + ' ( Celsius ) '
  
      let fahrenheit_kelvin = parseFloat(graus.value) + 459.67 / 1.8
      resultado2.innerHTML = parseFloat(fahrenheit_kelvin).toFixed(2) + '  ( Kelvin ) '
  
      let fahrenheit_rankine = parseFloat(graus.value) + 459.67
      resultado3.innerHTML = parseFloat(fahrenheit_rankine).toFixed(2) + ' ( Rankine ) '
  
  
    }
  
    if(optTemp == 'K'){
      let kelvin_celsius = parseFloat(graus.value) - 273.15 
      resultado1.innerHTML = parseFloat(kelvin_celsius).toFixed(2) + ' ( Celsius )  '
  
      let kelvin_fahrenheit = parseFloat(graus.value * 1.8) - 459.67
      resultado2.innerHTML = parseFloat(kelvin_fahrenheit).toFixed(2) + ' ( Fahrenheit ) '
  
      let kelvin_rankine = parseFloat(graus.value) * 1.8
      resultado3.innerHTML = parseFloat(kelvin_rankine).toFixed(2) + ' ( Rankine ) '
  
  
    }
  
    if(optTemp == 'R'){
      let rankine_celsius = parseFloat(graus.value - 491.67) / 1.8
      resultado1.innerHTML = parseFloat(rankine_celsius).toFixed(2) + ' ( Celsius ) '
  
      let rankine_fahrenheit = parseFloat(graus.value) - 459.67
      resultado2.innerHTML = parseFloat(rankine_fahrenheit).toFixed(2) + ' ( Fahrenheit ) '
  
      let rankine_kelvin = parseFloat(graus.value) / 1.8
      resultado3.innerHTML = parseFloat(rankine_kelvin).toFixed(2) + '  ( Kelvin ) '
  
  
    }
  }