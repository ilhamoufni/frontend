
import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import './map.css';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import axios from 'axios';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style';
import { Cluster } from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import data from './data';

const MapComponent = () => {
    const mapRef = useRef(null);
    const [search, setSearch] = useState('');
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // Création de la carte
        const initialMap = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([-6.358226377534578, 32.33482459561404]),
                zoom: 12
            })
        });

        // Charger les données GeoJSON depuis le fichier data.js
        const geoJsonFormat = new GeoJSON();
        const features = geoJsonFormat.readFeatures(data, {
            featureProjection: initialMap.getView().getProjection()
        });

        // Source de vecteur pour les marqueurs
        const vectorSource = new VectorSource({
            features: features
        });

        // Source de cluster pour regrouper les marqueurs
        const clusterSource = new Cluster({
            distance: 40,
            source: vectorSource
        });

        // Style pour les clusters
        const clusterStyle = new Style({
            image: new CircleStyle({
                radius: 10,
                stroke: new Stroke({
                    color: '#fff'
                }),
                fill: new Fill({
                    color: '#3399CC'
                })
            }),
            text: new Text({
                text: '',
                fill: new Fill({
                    color: '#fff'
                })
            })
        });

        // Couche de vecteur pour les clusters
        const clusterLayer = new VectorLayer({
            source: clusterSource,
            style: function (feature) {
                const size = feature.get('features').length;
                clusterStyle.getText().setText(size.toString());
                return clusterStyle;
            }
        });

        // Ajouter la couche de cluster à la carte
        initialMap.addLayer(clusterLayer);

        // Création de l'Overlay de popup
        const overlay = new Overlay({
            element: document.getElementById('popup'),
            autoPan: true,
            autoPanAnimation: {
                duration: 250,
            },
        });

        // Ajouter l'overlay à la carte
        initialMap.addOverlay(overlay);

        // Fermer le popup lors du clic sur le bouton de fermeture
        document.getElementById('popup-closer').onclick = function () {
            overlay.setPosition(undefined);
            return false;
        };

        // Afficher le popup sur clic
        initialMap.on('singleclick', function (event) {
            if (initialMap.hasFeatureAtPixel(event.pixel) === true) {
                const coordinate = event.coordinate;
                const features = initialMap.getFeaturesAtPixel(event.pixel);
                if (features.length > 0) {
                    const clusterFeatures = features[0].get('features');
                    if (clusterFeatures.length === 1) {
                        // Afficher les informations pour un seul marqueur
                        const feature = clusterFeatures[0];
                        const localityName = feature.get('name');
                        const pdfUrl = feature.get('pdfUrl'); // Assuming each feature has a 'pdfUrl' property
                        document.getElementById('popup-content').innerHTML = `<b>Nom du lieu:</b> ${localityName}<br>` +
                                                                              ` <a href="${pdfUrl}" download>Download PDF</a>`;
                        overlay.setPosition(coordinate);
                    } else {
                        // Gérer l'affichage pour plusieurs marqueurs
                        // ...
                    }
                }
            } else {
                overlay.setPosition(undefined);
            }
        });

        setMap(initialMap);

        // Nettoyage à la sortie du composant
        return () => {
            initialMap.setTarget(undefined);
        };
    }, []);

    const handleSearch = async () => {
        if (!search.trim()) return;

        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}`);
            if (response.data[0]) {
                const { lon, lat } = response.data[0];
                map.getView().animate({
                    center: fromLonLat([parseFloat(lon), parseFloat(lat)]),
                    zoom: 15,
                    duration: 1000
                });
            }
        } catch (error) {
            console.error('Erreur lors de la recherche :', error);
        }
    };

    return (

        <div className="map-wrapper">
           <div>
           <h1 className="map-title">Carte de localisation des documents d'urbanisme</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Rechercher une adresse"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button onClick={handleSearch}>Rechercher</button>
            </div>
            <div id="popup" className="ol-popup">
                <a href="#" id="popup-closer" className="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
            <div ref={mapRef} className="map-container" />
           </div>
        </div>
        
    );
};

export default MapComponent;