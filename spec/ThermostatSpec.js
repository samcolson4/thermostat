describe('Thermostat', function() {
// Starting value temperature = 20

  
  
  it('should have a start temperature value of', function () {
    let thermostat = new Thermostat(); // let because I don't want global variable
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('increase', function() {
    let thermostat = new Thermostat();
    it('can increase the temperature', function() {
      thermostat.increase(5);
      expect(thermostat.getTemperature()).toEqual(25);
    })
  })

  describe('decrease', function() {
    let thermostat = new Thermostat();
    it('can decrease the temperature', function() {
      thermostat.decrease(5);
      expect(thermostat.getTemperature()).toEqual(15);
    })
  })














})
