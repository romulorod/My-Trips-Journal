import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

export type PageTemplateProps = {
  heading: string
  body: string
}
const AboutTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>
    <S.Heading>{heading}</S.Heading>
    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default AboutTemplate
