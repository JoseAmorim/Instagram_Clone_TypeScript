import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 110px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    padding-top: 40px;
    background-color: rgb(250, 250, 250);
    border-bottom-width: 1;
    border-bottom-color: #ccc;
`

export const InteractionButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`
    width: 120px;
    height: 40px;
`
