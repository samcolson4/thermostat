



Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default but it can also be turned off
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)


Starting value temperature = 20
Function up (function)
Function down (function)
Min. temp = 10 (variable)
Power Saving Mode = on(25max)/off(32max)
  - can be also completely turned off, on by default
Reset to default temperature 
Current Energy Usage: < low(18)   -> green
                      <= medium(25) -> black
                      > high -> red




INPUT    |      OUTPUT
20                20
+5                25
-5                15


 _this_ ALWAYS refers to (and holds the value of) an object—a singular object—and it is usually used inside a function or a method
  -> although it can be used outside a function in the global scope. Note that when we use strict mode, this holds the value of _undefined_ in global functions

_this_ inside of function contains the object that invokes function

_this_ is not assigned a value until an object invokes the function where this is defined
