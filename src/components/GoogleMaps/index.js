import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { defaultCoords, google_map } from "./deps/defaultValues";
import "./deps/style.css";
import Geocode from "react-geocode";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { location, marker } from "./deps/icons/index";

const containerStyle = {
  height: "300px",
};

Geocode.setApiKey(google_map);

export default function Map(props) {
  const [lat, setLat] = useState(props.lat ? props.lat : defaultCoords.lat);
  const [lng, setLng] = useState(props.lng ? props.lng : defaultCoords.lng);
  const [address, setAddress] = useState(props.address ? props.address : "");
  const [area, setArea] = useState(props.area ? props.area : "");
  const [places, setPlaces] = useState("");

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onMapDragEnd = () => {
    let newLat = map.getCenter().lat();
    let newLng = map.getCenter().lng();

    Geocode.fromLatLng(newLat, newLng).then((response) => {
      const address = response.results[0].formatted_address,
        addressArray = response.results[0].address_components,
        area = getArea(addressArray);

      setLat(newLat);
      setLng(newLng);
      setArea && setArea(area);
      setAddress(address);
      props?.getLocation &&
        props.getLocation({
          area: area,
          address: address,
          latitude: lat,
          longitude: lng,
        });
    });
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const success = (pos) => {
    let crd = pos.coords;

    let newLat = crd.latitude;
    let newLng = crd.longitude;
    Geocode.fromLatLng(newLat, newLng).then((response) => {
      const address = response.results[0].formatted_address,
        addressArray = response.results[0].address_components,
        area = getArea(addressArray);

      setLat(newLat);
      setLng(newLng);
      setArea(area);
      setAddress(address);
      props?.getLocation &&
        props.getLocation({
          area: area,
          address: address,
          latitude: lat,
          longitude: lng,
        });
    });
  };

  const error = (error, newLat = lat, newLng = lng) => {
    Geocode.fromLatLng(newLat, newLng).then((response) => {
      const address = response.results[0].formatted_address,
        addressArray = response.results[0].address_components,
        area = getArea(addressArray);

      setArea(area);
      setLat(newLat);
      setLng(newLng);
      setAddress(address);
      props?.getLocation &&
        props.getLocation({
          area: area,
          address: address,
          latitude: lat,
          longitude: lng,
        });
    });
  };

  const getArea = (addressArray) => {
    let area = "";
    for (let index = 0; index < addressArray.length; index++) {
      if (addressArray[index].types[0]) {
        for (let j = 0; j < addressArray.length; j++) {
          if (
            "sublocality_level_1" === addressArray[index].types[j] ||
            "locality" === addressArray[index].types[j]
          ) {
            area = addressArray[index].long_name;
            return area;
          }
        }
      }
    }
  };

  const getTrimedAddress = () => {
    let add = address.includes("+")
      ? address.substring(address.indexOf(",") + 2)
      : address;
    add = add.length > 50 ? add.substring(0, 48).concat(" . .") : add;
    return add.toUpperCase();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5EY6eaMSuDV_wREo6bUWKVrczpOmQPw4&libraries=places";
    script.id = "googleMapAPI";
    script.async = true;

    if (!document.getElementById("googleMapAPI")) {
      document.body.appendChild(script);
    }

    navigator.geolocation.getCurrentPosition(success, error);

    if (!area && lat && lng) {
      Geocode.fromLatLng(lat, lng).then((response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          area = getArea(addressArray);
        setAddress(address);
        setArea(area);
      });
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []); // eslint-disable-line

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setPlaces(value);
    error("", latLng.lat, latLng.lng);
  };

  const handleSuggestions = () => {
    return (
      <PlacesAutocomplete
        value={places}
        onChange={setPlaces}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="map-overlay">
            <div className="map-search">
              <i className="fas fa-search" style={{ color: "grey" }} />
              <input
                className="form-control"
                {...getInputProps({ placeholder: "Type Address" })}
              />
            </div>
            <div className="suggestion-list">
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  background: suggestion.active ? "aliceblue" : "",
                  cursor: "pointer",
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    <img alt="location" src={location} height={20} width={15} />
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  };

  return document.getElementById("googleMapAPI") ? (
    <div style={{ width: "100%" }}>
      <PlacesAutocomplete
        value={places}
        onChange={setPlaces}
        onSelect={handleSelect}
      >
        {handleSuggestions}
      </PlacesAutocomplete>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={14}
        center={{ lat: lat, lng: lng }}
        position={{ lat: lat, lng: lng }}
        zoomControl={true}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onDragEnd={onMapDragEnd}
        options={{
          fullscreenControl: false,
        }}
      >
        <img alt={""} src={marker} className="map-marker" />
      </GoogleMap>
      <div className="map_address">
        <img src={"/marker.svg"} height={30} alt={""} /> {getTrimedAddress()}
      </div>
    </div>
  ) : null;
}
