import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url),
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url),
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url),
});

function MapComponent() {
  const enchenteCentro = [
    [-20.6515, -41.9108],
    [-20.6510, -41.9088],
    [-20.6530, -41.9080],
    [-20.6535, -41.9102],
  ];

  const enchenteCampestre = [
    [-20.6548, -41.9045],
    [-20.6540, -41.9030],
    [-20.6558, -41.9022],
    [-20.6564, -41.9040],
  ];

  const deslizamentoRuaCaparao = [
    [-20.6598, -41.9012],
    [-20.6590, -41.8995],
    [-20.6605, -41.8988],
    [-20.6612, -41.9005],
  ];

  return (
    <MapContainer center={[-20.65, -41.91]} zoom={15} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polygon positions={enchenteCentro} pathOptions={{ color: 'blue', fillOpacity: 0.4 }}>
        <Popup>Área de risco de enchente (Centro)</Popup>
      </Polygon>

      <Polygon positions={enchenteCampestre} pathOptions={{ color: 'blue', fillOpacity: 0.4 }}>
        <Popup>Área de risco de enchente (Campestre Clube)</Popup>
      </Polygon>

      <Polygon positions={deslizamentoRuaCaparao} pathOptions={{ color: 'brown', fillOpacity: 0.4 }}>
        <Popup>Área de risco de deslizamento (Rua Caparaó)</Popup>
      </Polygon>
    </MapContainer>
  );
}

export default MapComponent;
