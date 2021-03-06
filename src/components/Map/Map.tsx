import { Router, useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps /* { center, zoom, markers } */) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, slug, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            position={[latitude, longitude]}
            title={name}
            key={`place-${id}`}
            eventHandlers={{ click: () => router.push(`/place/${slug}`) }}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
