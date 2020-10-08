$(function () {

  var thermostat = new Thermostat();
  energyColor();
  switchSymobls();

  // $('#temperature').text(thermostat.temperature);
  getTemperature()
  $('#energyUsage').text(thermostat.energyUsage());
  $('#powersaving').text(thermostat.powerSavingCheck());
  
  $('#temperatureIncrease').on('click', function() {
    thermostat.increase(1);
    $('#temperature').text(thermostat.temperature);
    $('#energyUsage').text(thermostat.energyUsage());
    energyColor();
  })

  $('#temperatureDecrease').on('click', function() {
    thermostat.decrease(1);
    $('#temperature').text(thermostat.temperature);
    $('#energyUsage').text(thermostat.energyUsage());
    energyColor();
  })

  $('#switchPowerSaving').on('click', function() {
    thermostat.switchMode(false);
    $('#temperature').text(thermostat.temperature);
    $('#energyUsage').text(thermostat.energyUsage());
    $('#powersaving').text(thermostat.powerSavingCheck());
  })

  $('#resetTemperature').on('click', function() {
    thermostat.reset();
    energyColor();
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

  function getTemperature() {
    var url = 'http://localhost:9292/temp'
    $.get(url, function(data) {
      $('#temperature').text(data.temp);
    })
  }
  
  function energyColor() {
    if (thermostat.energyUsage() == 'low') {
      $('#energyUsage').css({color: 'green'});
      energyUsageBG();
    } else if (thermostat.energyUsage() === 'medium') {
      $('#energyUsage').css({color: 'yellow'});
      energyUsageBG();
    } else if (thermostat.energyUsage() === 'high') {
      $('#energyUsage').css({color: 'red'});
      energyUsageBG();
    }
  }

  function switchSymobls() {
    $('#temperatureIncrease').text('+')
    $('#temperatureDecrease').text('-')
    $('#resetTemperature').text('Reset')
    // $('#switchPowerSaving').text('Toggle power save mode')
  }

  function energyUsageBG() {
    if (thermostat.energyUsage() == 'low') {
      $('#energy_use_div').css({'background-image': 'url("https://cdn.shopify.com/s/files/1/0257/3903/4698/articles/7_Tips_To_Be_More_Eco-friendly_in_2019_1024x1024.jpg?v=1571826589")'});
    } else if (thermostat.energyUsage() === 'medium') {
      $('#energy_use_div').css({'background-image': 'url("https://theswitch.co.uk/sites/default/files/2020-01/uk-nuclear-power-plant.jpg")'});  
      
    } else if (thermostat.energyUsage() === 'high') {
      $('#energy_use_div').css({'background-image': 'url("https://ei.marketwatch.com/Multimedia/2017/03/30/Photos/ZQ/MW-FJ342_trump__20170330101411_ZQ.jpg?uuid=255421be-1553-11e7-bfbe-001cc448aede")'});        
    }
  }


})
