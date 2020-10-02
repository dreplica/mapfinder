import Mapboxgl from "mapbox-gl";

export interface GEO extends Pick<Coordinates,"latitude" | "longitude">{
    error?:string
    active?:boolean
}

export default async function mapSetup(geol:Omit<GEO, "error">){
console.log("nfnn")



    Mapboxgl.accessToken = process.env.REACT_APP_MAPBOX as string;
            const map = await new Mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [ geol?.longitude,geol.latitude], // starting position [lng, lat]
            zoom: 5 // starting zoom 
            });
    
            const mark =  await new Mapboxgl.Marker()
            .setLngLat([geol.longitude,geol.latitude])
            .setDraggable(true)
            .setPopup(new Mapboxgl.Popup().setHTML("<h1>Somewhat close to your position :) </h1>")) // add popup
            .addTo(map);

            const  nav = await new Mapboxgl.NavigationControl();
            await map.addControl(nav, 'top-left');

            await map.addControl(new Mapboxgl.GeolocateControl({
                positionOptions: {
                enableHighAccuracy: true
                },
                trackUserLocation: true
                }));

            console.log("map connected")
        }