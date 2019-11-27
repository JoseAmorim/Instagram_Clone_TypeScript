import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'

import { Container, InteractionButton, Logo } from './styles'

const Header = () => (
    <Container>
        <InteractionButton>
            <FeatherIcon name="camera" size={40} />
        </InteractionButton>
        <Logo
            source={{
                uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
            }}
        />
        <InteractionButton>
            <FeatherIcon name="send" size={40} />
        </InteractionButton>
    </Container>
)

export default Header
