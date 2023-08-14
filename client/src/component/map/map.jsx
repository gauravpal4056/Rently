import  GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles'
import { useState } from 'react';
import { useEffect } from 'react';



export default function SimpleMap({handleLoc, loc}){
  const defaultProps = {
    center: {
      lat: 22.09483687164106,
      lng: 78.92565228605372
    },
    zoom: 11
  };
  const handleClick = (e) => {
    console.log(loc);
    handleLoc({lat:e.lat, lng:e.lng})
  }
  const AnyReactComponent = ({ text, lat }) => <div className='h-20 w-20 bg-black text-white'>{text} {loc.lng}</div>;
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        options={{ styles: mapStyles }}
        layerTypes={['TrafficLayer', 'TransitLayer']}
        defaultZoom={defaultProps.zoom}
        onClick={handleClick}
      >
        <AnyReactComponent
          lat={loc.lat}
          lng={loc.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}