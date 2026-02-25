'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix untuk icon marker Leaflet di Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom icon merah untuk marker
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

interface City {
  name: string
  position: [number, number]
  province: string
  price: number
}

interface IndonesiaMapProps {
  cities: City[]
}

function MapBounds({ cities }: { cities: City[] }) {
  const map = useMap()
  
  useEffect(() => {
    if (cities.length > 0) {
      const bounds = L.latLngBounds(cities.map(city => city.position))
      map.fitBounds(bounds, { padding: [50, 50] })
    }
  }, [cities, map])
  
  return null
}

export default function IndonesiaMap({ cities }: IndonesiaMapProps) {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border-4 border-cyan-400">
      <MapContainer
        center={[-2.5, 118]}
        zoom={5}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ background: '#a5f3fc' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapBounds cities={cities} />
        
        {cities.map((city, index) => (
          <Marker 
            key={index} 
            position={city.position}
            icon={redIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-lg text-primary-dark">{city.name}</h3>
                <p className="text-sm text-gray-600">{city.province}</p>
                <p className="text-xl font-bold text-primary mt-2">
                  Rp {city.price.toLocaleString('id-ID')}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
