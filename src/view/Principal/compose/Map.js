import React, { useEffect, useState } from 'react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { getSociais } from '../../../firebase';

import './Map.css';

const containerStyle = {
  height: '100vh',
};

const center = {
  lat: -25.45445,
  lng: -49.26269,
};

const Map = () => {
  const [list, setList] = useState();
  const [listMarker, setListMarker] = useState();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDXtFMCvHTzG3IEhbZ6Jql2XReZrnhF6UA',
  });

  const getListSociais = async () => {
    const r = await getSociais();
    setList(r);
  };

  useEffect(() => {
    getListSociais();
  }, []);

  useEffect(() => {
    if (!list) return;
    const auxListMarker = list.map((role, index) => {
      return (
        <Marker
          position={{ lat: role.lat, lng: role.lng }}
          key={index}
          cursor={null}
          options={{
            label: {
              text: role.tema,
              className: 'map-marker',
            },
          }}
        />
      );
    });
    setListMarker(auxListMarker);
  }, [list]);

  return isLoaded ? (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {listMarker}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default Map;
