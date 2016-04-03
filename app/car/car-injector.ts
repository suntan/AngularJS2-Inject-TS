import { Injector }         from 'angular2/core';

import {Car, Engine, Tires} from './car';
import {Logger}             from '../logger.service';

export function useInjector() {
  var injector:Injector;

/*
  // Cannot 'new' an Injector like this!
  var injector = new Injector([Car, Engine, Tires, Logger]);
*/

  injector = Injector.resolveAndCreate([Car, Engine, Tires, Logger]);
  var car = injector.get(Car);
  car.description = 'Injector';

  var logger = injector.get(Logger);
  logger.log('Injector car.drive() said: '+car.drive());

  return car;
}

