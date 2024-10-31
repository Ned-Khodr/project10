import { PostSideBar } from "./PostSideBar"
import { PostBody } from "./PostBody"

export function Post( { id, score, title, image, username, time, numComments, comments, searchComments } ) {
  return (
    <li className="post">
      <PostSideBar id={id} postScore={score}/>
      <PostBody id={id} title={title} image={image} username={username} time={time} numComments={numComments} comments={comments} searchComments={searchComments}/>
    </li>
  )
}

