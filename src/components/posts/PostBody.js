import commentIcon from '../../images/comment-box.png'
import commentIconClicked from '../../images/comment-box-clicked.png'
import { Comments } from '../comments/Comments'
import { useSelector } from 'react-redux'
import { selectSubreddit } from '../sideBar/subbredditSlice'
import { scoreConverter } from '../../utilities/utilities'

export function PostBody( { id, title, image, username, time, numComments, commentList, searchComments } ) {
  let subreddit = useSelector(selectSubreddit)
  let showComments = false
  
  const displayComments = () => {
    document.getElementById('commentIcon'+id).src = showComments ? commentIconClicked : commentIcon
    document.getElementById('numComments'+id).style.color = showComments ? 'blue' : 'black'
    document.getElementById('commentList'+id).style.display = showComments ? 'block' : 'none'
  }

  const handleCommentClick = () => {
    showComments = !showComments
    searchComments(subreddit, id, numComments)
    displayComments()
  }

  return (
    <div className='postBody'>
      <h2 className='postTitle'>{title}</h2>
      <div className='postImage'>
        { image ? <img src={image} style={{width: '880px' }}/> : <div></div> }
      </div>
      <div className='postInfoBar'>
        <div className='posterNameDiv'>
          <p className='posterName'>{username}</p>
        </div>
        <div className='postTimeDiv'>
          <p className='postTime'>{time}</p>
        </div>
        <div className='postCommentsInfo'>
          <img className='commentIcon' id={'commentIcon'+id} src={commentIcon} onClick={handleCommentClick}/>
          <p className='numComments' id={'numComments'+id}>{scoreConverter(numComments)}</p>
        </div>
      </div>
      <Comments postId={id} commentList={commentList}/>
    </div>
  )
}