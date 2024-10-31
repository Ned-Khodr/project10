import { useSelector } from 'react-redux'
import { Post } from './Post'
import { selectPosts } from './postsSlice'

export function Posts( { searchComments } ) {
  const postList = Object.values(useSelector(selectPosts))

  if (!postList) {
    return <ul></ul>
  }

  return (
    <ul className="postList">
      {postList.map(post => (
        <Post
          key={post.id}
          id={post.id}
          score={post.score}
          title={post.title}
          image={post.image}
          username={post.username}
          time={post.time}
          numComments={post.numComments}
          comments={post.comments}
          searchComments={searchComments}
        />
      ))}
    </ul>
  )
}