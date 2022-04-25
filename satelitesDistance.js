const localizacionSatelites = [
  {
    name: 'Kenobi',
    location: [-500, -200],
  },
  {
    name: 'Skywalker',
    location: [100, -100],
  },
  {
    name: 'Sato',
    location: [500, 100],
  },
];

const GetDistance = (x, y) => {
  const distances = parseFloat(Math.pow(x, 2) + Math.pow(y, 2));
  return distances;
};

localizacionSatelites.forEach((e) => {
  const result = GetDistance(e.location[0], -e.location[1]);
  console.log(
    `La distancia del satelite ${e.name}  a la nave del imperio galactico es: ${result}`
  );
});
