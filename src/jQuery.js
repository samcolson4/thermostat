$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  
  $('#temperatureIncrease').on('click', function() {
    thermostat.increase(1);
    $('#temperature').text(thermostat.temperature);
  })

  $('#temperatureDecrease').on('click', function() {
    thermostat.decrease(1);
    $('#temperature').text(thermostat.temperature);
  })

  $('#switchPowerSaving').on('click', function() {
    thermostat.switchMode(true);
    $('#temperature').text(thermostat.temperature);
  })

  $('#resetTemperature').on('click', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  })

  //$('#energyUsage').on('click', function() {
  //  thermostat.energyUsage();
  //  $('#temperature').text(thermostat.temperature);
  //})






})


 