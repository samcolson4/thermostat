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
    if(this.temperature < 10) {
    this.temperature = 10 } // resetting to ten
  }








}

