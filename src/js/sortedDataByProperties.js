export default function sortedDataByProperties(obj, objectsSortByKeys) {
  const newArray = Object.entries(obj);

  const newArrayPart1 = []; // Первая часть итогового массива с сортировкой по ключам
  const newArrayPart2 = []; // Вторая часть итогового массива с сортировкой ключей по убыванию

  newArray.forEach((item) => {
    if (item[0] === objectsSortByKeys[0]) {
      newArrayPart1[0] = item;
    } else if (item[0] === objectsSortByKeys[1]) {
      newArrayPart1[1] = item;
    } else {
      newArrayPart2.push(item);
    }
  });

  // Сортируем вторую часть для итогового массив по убыванию
  newArrayPart2.sort((a, b) => {
    let result;
    if (a[0] > b[0]) {
      result = 1;
    } if (a[0] < b[0]) {
      result = -1;
    }
    return result;
  });

  const concatArray = newArrayPart1.concat(newArrayPart2);

  const newArray2 = [];

  concatArray.forEach((item) => {
    newArray2.push({ key: item[0], value: item[1] });
  });

  return newArray2;
}
