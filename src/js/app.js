import sortedDataByProperties from './sortedDataByProperties';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const objectsSortByKeys = ['name', 'level'];

console.log(sortedDataByProperties(obj, objectsSortByKeys));
