
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import data from './data'; 

const { BaseLayer } = LayersControl;

const MapComponent = () => {
  // créer un marqueur personnalisé
  const createClusterCustomIcon = (cluster) => {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true),
    });
  };

  return (
    <MapContainer center={[32.339444, -6.360833]} zoom={8} style={{ height: '60vh', width: '60%' }}>
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        <BaseLayer name="Google Streets">
          <TileLayer
            maxZoom={20}
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            url="http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
          />
        </BaseLayer>
        <BaseLayer name="Google Satellite">
          <TileLayer
            maxZoom={20}
            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
            url="http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}"
          />
        </BaseLayer>
      </LayersControl>

      <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
        {data.features.map((feature, index) => (
          <Marker
            key={index}
            position={[
              feature.geometry.coordinates[1],
              feature.geometry.coordinates[0]
            ]}
          >
            <Popup>{feature.properties.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapComponent;
// import "./map.css";
// import "leaflet/dist/leaflet.css";
// import 'react-leaflet-markercluster/dist/styles.min.css';
// import React from "react";
// import data from "./data"
// import MarkerClusterGroup from 'react-leaflet-markercluster';
// import { MapContainer, TileLayer,GeoJSON } from 'react-leaflet';
// const MapComponent = () => {
//   const onEachFeature = (feature, layer) => {
//     if (feature.properties && feature.properties.popupContent) {
//       layer.bindPopup(feature.properties.popupContent);
//     }
//   };
//   return (
//     <>
//        <div className=" row">
//         <div className="col text-center">
//           <h1> AGENCE URBAINE DE BENI MELLAL </h1>
//           <h2>Carte de localisation des communes</h2>
//           <div className="col"></div>
//     <MapContainer center={[51.505, -0.09]} zoom={13}>
//       <TileLayer
//        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
      
//         <MarkerClusterGroup>
//           <GeoJSON data={data} onEachFeature={onEachFeature} />
//         </MarkerClusterGroup>
//        </MapContainer>
//         </div>
//        </div>
//     </>
//     );
//   };

// export default MapComponent 
