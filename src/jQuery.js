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

})
