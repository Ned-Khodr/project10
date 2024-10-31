import { useDispatch, useSelector } from "react-redux"
import { setSubreddit } from "./subbredditSlice"
import { selectSubreddit } from "./subbredditSlice"

export function SubredditButton( { id, subredditName, search } ) {
  const dispatch = useDispatch()
  const currentSubreddit = useSelector(selectSubreddit)

  const handleClick = () => {
    if (subredditName === currentSubreddit) { return }
    dispatch(setSubreddit(subredditName))
    document.getElementById('subreddit'+id).style.color = 'blue'
    for (let i=1; i<26; i+=1) {
      if (i !== id) {
        document.getElementById('subreddit'+i).style.color = 'black'
      }
    }
    search(subredditName)
  }

  return (
    <li className='subRedditButton'>
      <p className='subreddit' id={'subreddit'+id} onClick={handleClick}>{subredditName}</p>
    </li>
  )
}