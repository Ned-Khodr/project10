export function Comment( { username, time, comment } ) {
  return (
    <li className='comment'>
      <div className='commentInfoBar'>
        <p className='commentorName'>{username}</p>
        <p className='commentTime'>{time}</p>
      </div>
      <p className='commentBody'>{comment}</p>
    </li>
  )
}