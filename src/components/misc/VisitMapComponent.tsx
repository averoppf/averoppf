import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

export function VisitMapComponent(): React.ReactElement {
  const mapRef = useRef<any>(null)
  const mapContainerRef = useRef<any>(null)
  useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlcm9zb2x1dGlvbnMiLCJhIjoiY21icHhqaWVvMDl1cTJyb2x5dGE4bDVndyJ9.TS6OtL8zGEQbKvUuPFr80w'
      mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          center: [151.12411012879127, -34.02491239230067],
          zoom: 15
      });

      new mapboxgl.Marker()
          .setLngLat([151.12411012879127, -34.02491239230067])
          .addTo(mapRef.current);

      return () => {
          mapRef.current.remove()
      }
  }, [])

  return (
    <div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-white text-center font-michroma">Visit Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className='h-fit flex flex-col items-center  p-4 rounded-xl'>
                <h3 className="text-2xl font-bold mb-6 text-white font-michroma">Operations</h3>
                <div className="space-y-4 text-center text-gray-300">
                    <div className="gap-3">

                        <p className="font-semibold">ADDRESS</p>
                        <p>F1/32-36 Box Road Caringbah NSW 2229</p>

                    </div>
                    <div className="gap-3">
                        <p className="font-semibold">MONDAY - FRIDAY</p>
                        <p>8:30 am - 5:00 pm</p>
                    </div>
                    <div className="gap-3">
                        <p className="font-semibold">MONDAY - FRIDAY</p>
                        <p>After hours by appointment only</p>
                    </div>
                    <div className="gap-3">
                        <p className="font-semibold">SATURDAY</p>
                        <p>By appointment only</p>
                    </div>
                    <div className="gap-3">
                        <p className="font-semibold">SUNDAY</p>
                        <p>Closed</p>
                    </div>
                </div>
            </div>
            <div style={{ minHeight: 400, width: "100%", borderRadius: 10 }} ref={mapContainerRef} />
        </div>
    </div>
    </div>
  );
}