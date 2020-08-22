import React, {Fragment, useEffect, useState} from "react"
import GoogleMapReact from 'google-map-react'
import googleKey from '../local_configs';

const ISS_URL = "http://api.open-notify.org/iss-now.json"

const IssTracker = () => {
    const [coordinates, setCoordinates] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(ISS_URL)
                .then(r => r.json())
                .then(d => {
                    const issPosition = d.iss_position;
                    setCoordinates({lat: issPosition.latitude, lng: issPosition.longitude})
                })
        }, 1500);
        return () => clearInterval(interval);
    }, [])

    const IMG = <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--Cv1gg7c4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/292773/4f40a694-ebac-4f91-a3cf-d92cfd3d8935.jpeg"
        alt="iss" height="30px"/>
    const SpaceStation = ({IMG}) => <div>{IMG}</div>

    return (<Fragment>
        <p>{coordinates && coordinates.lat}</p>
        <p>{coordinates && coordinates.lng}</p>
        {coordinates && <div className="map" style={{height: '100vh', width: '100%'}}>
            <GoogleMapReact bootstrapURLKeys={googleKey}
                            center={{center: coordinates}}
                            zoom={1}>
                <SpaceStation
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    img={IMG}
                />
            </GoogleMapReact>
        </div>}
    </Fragment>)
}

export default IssTracker;
