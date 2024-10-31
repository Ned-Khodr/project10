import { Comment } from './Comment'
import { selectCommentsByPostId } from './commentsSlice'
import { useSelector } from 'react-redux'

export function Comments( { postId }) {
  const commentList = useSelector(selectCommentsByPostId(postId))

  if (!commentList) {
    return <ul className="commentList" id={'commentList'+postId}></ul>
  }

  return (
    <ul className="commentList" id={'commentList'+postId}>
      {commentList.map(comment => (
        <Comment
          key={comment.id}
          username={comment.username}
          time={comment.time}
          comment={comment.body}
        />
      ))}
    </ul>
  )
}