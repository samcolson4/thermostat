describe('Thermostat', function() {
// Starting value temperature = 20
  let thermostat

  beforeEach(function() {
    thermostat = new Thermostat();

  })
  
  it('should have a start temperature value of', function () {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should have a power saving mode', function () {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  describe('increase', function() {
    it('can increase the temperature', function() {
      thermostat.increase(5);
      expect(thermostat.temperature).toEqual(25);
    })
    it('cannot increase above 25 in power saving mode', function() {
      thermostat.increase(20);
      expect(thermostat.temperature).toEqual(25);
    })
    it('cannot increase above 32 in non power saving mode', function() {
      thermostat.switchMode();
      thermostat.increase(20);
      expect(thermostat.temperature).toEqual(32);
    })
  })

  describe('decrease', function() {
    it('can decrease the temperature', function() {
      thermostat.decrease(5);
      expect(thermostat.temperature).toEqual(15);
    })

    it('can decrease temperature to minimum of 10 degrees', function(){
      thermostat.decrease(15);
      expect(thermostat.temperature).toEqual(10);
    })
  })

  describe('switchMode', function() {
    it('can turn the power mode on', function() {
      thermostat.switchMode();
      expect(thermostat.powerSavingMode).toEqual(false)
    })

    it('can turn the power mode off', function() {
      thermostat.switchMode();
      thermostat.switchMode();
      expect(thermostat.powerSavingMode).toEqual(true)
    })
  })

  describe('reset', function() {
    it('can reset the temperature to default temperature', function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    })
  })


  //Current Energy Usage: < low(18) 
  //<= medium(25) 
  //> high

  describe('energyUsage', function() {
    it('can be low usage', function() {
      thermostat.decrease(5);
      expect(thermostat.energyUsage()).toBe ('low')
    })
    it('can be medium usage', function() {
      thermostat.increase(5);
      expect(thermostat.energyUsage()).toBe ('medium')
    })

    it('can be high usage', function() {
      thermostat.switchMode();
      thermostat.increase(25);
      expect(thermostat.energyUsage()).toBe ('high')
    })
    //if in  power mode, it cannot go to high

  })








})
