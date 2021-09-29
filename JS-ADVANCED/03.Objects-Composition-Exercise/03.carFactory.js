function carFactory(obj) {
  let myCar = {
    model: obj.model,
    engine: obj.power,
    carriage: {
      type: obj.carriage,
      color: obj.color,
    },
    wheels: [],
  };

  if (obj.power <= 90) {
    myCar.engine = { power: 90, volume: 1800 };
  } else if (obj.power <= 120) {
    myCar.engine = { power: 120, volume: 2400 };
  } else {
    myCar.engine = { power: 200, volume: 3500 };
  }

  if (obj.wheelsize % 2 == 0) {
    obj.wheelsize--;
  }

  myCar.wheels = new Array(4).fill(obj.wheelsize);

  return myCar;
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
