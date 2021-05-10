/**
 * Fetch data at the given URL. Returns a promise that resolves with the data.
 * Simulates random network latency up to 4 seconds.
 */
const API_URL = "/design/";

let obj = {
  designId: 1,
  shapes: [
    { shapeId: "basic-square", color: { r: 255, g: 255, b: 255 } },
    { shapeId: "basic-circle", color: { r: 255, g: 255, b: 255 } },
    { shapeId: "basic-diamond", color: { r: 255, g: 0, b: 0 } },
    { shapeId: "basic-rectangle", color: { r: 0, g: 255, b: 0 } }
  ]
};

function fetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(obj), Math.random() * 4000);
  });
}

function getPromises(url) {
  const promises = [];
  for (let i = 0; i <= 10; i++) {
    promises.push(fetch(url));
  }

  Promise.all(promises).then((results) => {
    console.log(results);
  });
}
getPromises(API_URL);

for (i = 0; i < 4; i++) {
  rch += shapes[i].color.r;
  gch += shapes[i].color.g;
  bch += shapes[i].color.b;
}
