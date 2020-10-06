describe('Thermostat', function() {
// Starting value temperature = 20

  beforeEach(function() {
    thermostat = new Thermostat();

  })
  
  it('should have a start temperature value of', function () {
    let thermostat = new Thermostat(); // 'let' because I don't want global variable
    expect(thermostat.temperature).toEqual(20);
  });

  it('should have a power saving mode', function () {
    let thermostat = new Thermostat(); // 'let' because I don't want global variable
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  describe('increase', function() {
    let thermostat = new Thermostat();
    it('can increase the temperature', function() {
      thermostat.increase(5);
      expect(thermostat.temperature).toEqual(25);
    })
  })

  describe('decrease', function() {
    let thermostat = new Thermostat();
    it('can decrease the temperature', function() {
      thermostat.decrease(5);
      expect(thermostat.temperature).toEqual(15);
    })

    it('can decrease temperature to minimum of 10 degrees', function(){
      let thermostat = new Thermostat();
      thermostat.decrease(15);
      expect(thermostat.temperature).toEqual(10);
    })
  })














})
