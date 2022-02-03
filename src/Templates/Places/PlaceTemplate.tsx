import LinkWrapper from 'components/LinkWrapper/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'

type ImageProps = {
  url: string
  height: number
  width: number
}
export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
    }
    gallery: ImageProps[]
  }
}
export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label={'Go Back to Map'} />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>
            <h1>{place.name}</h1>
          </S.Heading>
          <S.Body>
            <div
              dangerouslySetInnerHTML={{
                __html: place.description?.html || ''
              }}
            />
          </S.Body>
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
