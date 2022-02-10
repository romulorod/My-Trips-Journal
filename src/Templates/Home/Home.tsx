import LinkWrapper from 'components/LinkWrapper/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { MapProps } from 'components/Map/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map/Map'), {
  ssr: false
})

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips Journal"
        description="A Simple project to show my trips with some detailed info such as the country, city, date, description and photos."
        canonical="https://mytripsjournal.com"
        openGraph={{
          url: 'https://mytripsjournal.com',
          title: 'My Trips Journal',
          description:
            'A Simple project to show my trips with some detailed info such as the country, city, date, description and photos.',
          images: [
            {
              url: 'https://mytripsjournal.com/img/icon-512.png',
              width: 512,
              height: 512,
              alt: 'My Trips Journal'
            }
          ],
          site_name: 'My Trips Journal'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
