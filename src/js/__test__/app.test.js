import sortedDataByProperties from '../sortedDataByProperties';

test('Проверка на корректную сортировку данных функцией', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const objectsSortByKeys = ['name', 'level'];

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ];

  const received = sortedDataByProperties(obj, objectsSortByKeys);

  expect(received).toEqual(expected);
});