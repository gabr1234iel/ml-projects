import React, { useEffect, useRef, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { fromLonLat } from 'ol/proj';
import { Fill, Stroke, Style } from 'ol/style';
import malaysia from '../components/data/malaysia.json'; 
import SubmissionForm from './SubmissionForm';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

const MalaysiaMap = () => {
  const mapRef = useRef(null);
  const [submissionCounts, setSubmissionCounts] = useState({});
  const [overlayContent, setOverlayContent] = useState('');

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'submissions'));
        const submissionsByState = {};
        querySnapshot.forEach(doc => {
          const data = doc.data();
          submissionsByState[data.livingState] = (submissionsByState[data.livingState] || 0) + 1;
        });
        setSubmissionCounts(submissionsByState);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };
    fetchSubmissions();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const geoJsonLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(malaysia, { featureProjection: 'EPSG:3857' })
      }),
      style: feature => {
        const stateName = feature.get('shapeName');
        const cases = submissionCounts[stateName] || 0;
        return new Style({
          fill: new Fill({ color: getColorForCases(cases) }),
          stroke: new Stroke({ color: '#fff', width: 1 })
        });
      }
    });

    const olMap = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() }), geoJsonLayer],
      view: new View({
        center: fromLonLat([101.9758, 4.2105]),
        zoom: 6,
      })
    });

    olMap.on('singleclick', function (evt) {
      olMap.forEachFeatureAtPixel(evt.pixel, function (feature) {
        const stateName = feature.get('shapeName') || 'Unknown State';
        const cases = submissionCounts[stateName] || 'N/A';
        const content = `<strong>State:</strong> ${stateName}<br/><strong>Cases:</strong> ${cases}`;
        setOverlayContent(content);
      }, { layerFilter: layer => layer === geoJsonLayer });
    });

    return () => {
      olMap.setTarget(null);
    };
  }, [submissionCounts]);

  const getColorForCases = (cases) => {
    if (cases > 3) return 'rgba(68, 1, 84, 1)';
    if (cases > 2) return 'rgba(59, 82, 139, 1)';
    if (cases > 1) return 'rgba(33, 145, 140, 1)';
    if (cases > 0) return 'rgba(94, 201, 98, 1)';
    return 'rgba(253, 231, 37, 1)';
  };

  return (
    <>
    <SubmissionForm />
      <div ref={mapRef} style={{ position: 'relative', width: '100%', height: '80vh' }}>
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid black',
            maxWidth: '20%', 
            maxHeight: '50%', 
            overflow: 'auto', 
            zIndex: 1000 
          }} dangerouslySetInnerHTML={{ __html: overlayContent }}
        />
      </div>
      
    </>
  );
};

export default MalaysiaMap;
