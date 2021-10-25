import GoogleMapReact from "google-map-react";
import { googleMapsArguments } from "../utils/mapSettings";

const Map = () => {
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        const marker = new maps.Marker({
            position: googleMapsArguments.center,
            icon: googleMapsArguments.pin,
            map: map,
        });
        marker.setMap(map);
        map.setOptions({
            styles: googleMapsArguments.stylesDark,
            disableDefaultUI: true,
            gestureHandling: "none",
        });
    };

    const styles = {
        mapStyles: { height: "35em" },
        preventRunoff: { overflow: "hidden" },
    };

    //https://github.com/google-map-react/google-map-react
    return (
        <div className="container-hero" style={styles.preventRunoff}>
            <div className="row position-relative">
                <div className="col" style={styles.mapStyles}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                        }}
                        defaultCenter={googleMapsArguments.center}
                        defaultZoom={googleMapsArguments.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) =>
                            handleApiLoaded(map, maps)
                        }
                    ></GoogleMapReact>
                </div>
                <div className="col position-absolute mt-10">
                    <div className="container">
                        <div>
                            <div className="boxed contact-card m-2 p-3">
                                <h2>Available Remote</h2>
                                <ul className="list-group list-group-line">
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-map-pin2 fs-24 text-blue"></i>
                                        <span>San Antonio, TX USA</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-mail fs-24 text-blue"></i>
                                        <span className="email-text">
                                            davidtunnell9@gmail.com
                                        </span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-phone2 fs-24 text-blue"></i>
                                        <span>(210) 454-1039</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
