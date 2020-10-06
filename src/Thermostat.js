class Thermostat {
  constructor() {
    this.temperature = 20
  }

  temperature() {
    return this.temperature;
  }
  
  increase(value) {
    this.temperature += value
  }
 
  decrease(value) {
    this.temperature -= value
  }








}

