import DataTile from '../../../../src/ol/source/DataTile.js';
import Map from '../../../../src/ol/Map.js';
import TileLayer from '../../../../src/ol/layer/WebGLTile.js';
import View from '../../../../src/ol/View.js';

const size = 256;

const data = new Float32Array(size * size);
for (let row = 0; row < size; ++row) {
  for (let col = 0; col < size; ++col) {
    data[row * size + col] = (row + col) % 2 === 0 ? 1 : 0;
  }
}

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new DataTile({
        maxZoom: 0,
        loader: () => data,
        bandCount: 1,
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 4,
  }),
});

render({tolerance: 0.03});
