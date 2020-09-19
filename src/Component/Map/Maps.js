import React from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

const MapShow = () => {
  return <GoogleMap defaultZoom={8} defaultCenter={{ lat: 23.684994, lng: 90.356331 }} />;
};

const WrappedMap = withScriptjs(withGoogleMap(MapShow));
const Maps = () => {
  return (
    <>
      <div>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDI1SP55esGS9Jh0PB_D1JgCSt9KOqjV-o`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
};

export default Maps;
