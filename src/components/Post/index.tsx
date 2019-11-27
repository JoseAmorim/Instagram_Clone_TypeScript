import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'

import {
    Container,
    User,
    UserImage,
    UserName,
    UserRow,
    PostImage,
    ButtonsRow,
    InteractionButton,
    LikesContainer,
    LikeText,
    CommentsContainer,
    CommentUser,
    CommentText,
    Comment,
} from './styles'

interface CommentInterface {
    text: string
    user: string
}

type PostProps = {
    userImage: string
    userName: string
    liked: boolean
    postImage: string
    likes: number
    comments: Array<CommentInterface>
}

const Post = ({
    userImage,
    userName,
    postImage,
    likes,
    comments,
    liked,
}: PostProps) => (
    <Container>
        <UserRow>
            <User>
                <UserImage
                    source={{
                        uri: userImage,
                    }}
                />
                <UserName>{userName}</UserName>
            </User>
            <MaterialIcon name="dots-horizontal" size={40} />
        </UserRow>
        <PostImage
            source={{
                uri: postImage,
            }}
            resizeMode="cover"
        />
        <ButtonsRow>
            <InteractionButton>
                {(liked && (
                    <MaterialIcon name="heart" size={40} color="#ff0000" />
                )) || <MaterialIcon name="heart-outline" size={40} />}
            </InteractionButton>
            <InteractionButton>
                <FeatherIcon name="message-circle" size={40} />
            </InteractionButton>
            <InteractionButton>
                <FeatherIcon name="send" size={40} />
            </InteractionButton>
            <InteractionButton style={{ position: 'absolute', right: 10 }}>
                <FeatherIcon name="bookmark" size={40} />
            </InteractionButton>
        </ButtonsRow>
        <LikesContainer>
            <LikeText>{likes} curtidas</LikeText>
        </LikesContainer>
        <CommentsContainer>
            {comments.length > 0 &&
                comments.map((comment: CommentInterface) => (
                    <Comment>
                        <CommentUser>
                            {comment.user}{' '}
                            <CommentText>{comment.text}</CommentText>
                        </CommentUser>
                    </Comment>
                ))}
        </CommentsContainer>
    </Container>
)

export default Post
