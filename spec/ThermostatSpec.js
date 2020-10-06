describe('Thermostat', function() {
// Starting value temperature = 20
  
  
  it('should have a start temperature value of', function () {
    let thermostat = new Thermostat(); // let because I don't want global variable
    expect(thermostat.startTempValue).toEqual(20);
  })














})
