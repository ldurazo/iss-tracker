import React, {Fragment, useEffect, useState} from "react"

const ISS_URL = "http://api.open-notify.org/iss-now.json"

const IssTracker = () => {
    const [coordinates, setCoordinates] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            fetch(ISS_URL)
                .then(r => r.json())
                .then(d => {
                    const issPosition = d.iss_position;
                    setCoordinates({lat: issPosition.latitude, lon: issPosition.longitude})
                })
        }, 1500);
        return () => clearInterval(interval);
    }, [])

    return (<Fragment>
        <p>{coordinates && coordinates.lat}</p>
        <p>{coordinates && coordinates.lon}</p>
    </Fragment>)
}

export default IssTracker;
