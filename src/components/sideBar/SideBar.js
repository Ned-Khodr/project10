import { SubredditButton } from "./subredditButton"
import { subreddits } from "../../data/initialData"

export function SideBar( { search } ) {
  return (
    <div className="sideBar">
      <h2 className='sideBarTitle'>Subreddits</h2>
      <ul className='subredditList'>
        {subreddits.map(subreddit => (
          <SubredditButton
            key={subreddit.id}
            id={subreddit.id}
            subredditName={subreddit.name}
            search={search}
          />
        ))}
      </ul>
    </div>
  )
}