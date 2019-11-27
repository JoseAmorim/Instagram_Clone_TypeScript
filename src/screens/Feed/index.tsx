import React from 'react'
import { FlatList } from 'react-native'

import data from '../../services/posts.json'

import { Container } from './styles'
import Post from '../../components/Post/index'
import Header from '../../components/Header/index'

interface CommentInterface {
    text: string
    user: string
}

interface PostInterface {
    userId: number
    userImage: string
    userName: string
    postImage: string
    liked: boolean
    likes: number
    comments: Array<CommentInterface>
}

const Feed = () => (
    <Container>
        <Header />
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data.posts}
            keyExtractor={(item: PostInterface) => `${item.userId}`}
            renderItem={({ item }) => <Post {...item} />}
        />
    </Container>
)

export default Feed
