import React from "react";
// import Map from "../../components/GoogleMaps";

export default function JobMap() {
  return (
    <>
      <div className="map-right map-block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0055995731173!2d75.8154668155572!3d26.871563183145515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67cda4edb8f%3A0x44a26758d0377e21!2sDotsquares%20Jhalana%20Office!5e0!3m2!1sen!2sin!4v1597321439048!5m2!1sen!2sin"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="map"
        />
        {/* <Map /> */}
      </div>
    </>
  );
}
