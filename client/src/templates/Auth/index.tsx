import Heading from 'components/Heading'
import Logo from 'components/Logo'
import React from 'react'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Heading>All your favorites games in one place</Heading>
      <S.Subtitle>
        <strong>won</strong> is the best and most complete gaming platform
      </S.Subtitle>

      <S.Footer>Won Games 2020 © All rights reserved</S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo size="large" color="black" />
      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
