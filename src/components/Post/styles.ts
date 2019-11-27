import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    flex-direction: column;
`

export const UserRow = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`

export const User = styled.View`
    flex-direction: row;
    align-items: center;
`

export const UserImage = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 20px;
`

export const UserName = styled.Text`
    font-size: 16px;
    font-weight: 700;
    margin-left: 5px;
`

export const PostImage = styled.Image`
    width: 100%;
    height: 400px;
`

export const ButtonsRow = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px;
`

export const InteractionButton = styled.TouchableOpacity`
    margin: 0px 10px;
    align-items: center;
    justify-content: center;
`

export const LikesContainer = styled.View`
    width: 100%;
    padding: 10px 20px;
`

export const LikeText = styled.Text`
    font-size: 20px;
    font-weight: 700;
`

export const CommentsContainer = styled.View`
    width: 100%;
    padding: 18px;
`

export const Comment = styled.View`
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
`

export const CommentUser = styled.Text`
    font-size: 18px;
    font-weight: 700;
`

export const CommentText = styled.Text`
    font-size: 18px;
    font-weight: 400;
`
