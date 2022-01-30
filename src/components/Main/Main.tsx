import * as S from './styles'

const Main = () => {
  return (
    <>
      <S.Wrapper>
        <S.Logo
          src="/assets/logo.svg"
          alt="Athom Pink Image and Title Text next to it"
        />
        <S.Title>Howdy! Welcome to this Boilerplate!</S.Title>
        <S.Description>
          Here you have an enviroment using TypeScript, ReactJs, NextJs, Styled
          Components and Jest set up, so all you need to worry about is coding
          the fun part :)
        </S.Description>
        <S.Illustration
          src="/assets/hero-illustration.svg"
          alt="Human Developer coding in front of his monitors"
        />
      </S.Wrapper>
    </>
  )
}
export default Main
