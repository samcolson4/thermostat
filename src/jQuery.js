$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);
  $('#energyUsage').text(thermostat.energyUsage());
  $('#powersaving').text(thermostat.powerSavingCheck());

  
  $('#temperatureIncrease').on('click', function() {
    thermostat.increase(1);
    $('#temperature').text(thermostat.temperature);
    $('#energyUsage').text(thermostat.energyUsage());
  })

  $('#temperatureDecrease').on('click', function() {
    thermostat.decrease(1);
    $('#temperature').text(thermostat.temperature);
    $('#energyUsage').text(thermostat.energyUsage());
  })

  $('#switchPowerSaving').on('click', function() {
    thermostat.switchMode(true);
    $('#temperature').text(thermostat.temperature);
    $('#energyUsage').text(thermostat.energyUsage());
    $('#powersaving').text(thermostat.powerSavingCheck());
  })

  $('#resetTemperature').on('click', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
    $('#energyUsage').text(thermostat.energyUsage());
  })

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=79734182354473bd1378b3db74651f2d';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }
})