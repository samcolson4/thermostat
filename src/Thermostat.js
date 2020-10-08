'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20
    this.powerSavingMode = false
  }

  increase(value) {
    this.temperature += value
    if(this.powerSavingMode == true && this.temperature > 25) {
      this.temperature = 25
    }
    else if(this.powerSavingMode == false && this.temperature > 32) {
      this.temperature = 32
    }
  }
 
  decrease(value) {
    this.temperature -= value
    if(this.temperature < 10) {
    this.temperature = 10 } // resetting to ten
  }

  switchMode() {
    if(this.powerSavingMode == true) {
      this.powerSavingMode = false
    }
    else if(this.powerSavingMode == false) {
      this.powerSavingMode = true
    }
  }

  reset() {
     this.temperature = 20
    }
  
  energyUsage() {
    if(this.temperature < 18) {
      return 'low'
    }
    else if(this.temperature <= 25) {
      return 'medium'
    }
    else {
      return 'high'
    }
  }

  powerSavingCheck() {
    if(this.powerSavingMode == true) {
      return "Power saving mode is on."
    } else if(this.powerSavingMode == false) {
      return "Power saving mode is off."
    }
  }

}
