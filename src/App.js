import './App.css';
import { TopBar } from './components/search/TopBar';
import { Posts } from './components/posts/Posts'
import { SideBar } from './components/sideBar/SideBar';
import { useSelector } from 'react-redux';
import { setPosts } from './components/posts/postsSlice';
import { useDispatch } from 'react-redux';
import { selectSubreddit } from './components/sideBar/subbredditSlice';
import { useEffect } from 'react';
import { addComments } from './components/comments/commentsSlice';
import { timeConverter } from './utilities/utilities';


function App() {
  let subreddit = useSelector(selectSubreddit)
  const dispatch = useDispatch()

  // console.log(useSelector(selectPosts))
  // console.log(useSelector(selectComments))

  useEffect(() => {
    async function fetchInitialData() {
      await search(subreddit)
    }
    fetchInitialData()
  }, [])

  const search = async (subreddit, searchTerm='') => {
    searchTerm = searchTerm.replaceAll(' ', '+')
    let query = `https://www.reddit.com/${subreddit}.json`
    if (searchTerm) {
      query = `https://www.reddit.com/${subreddit}/search/.json?q=${searchTerm}&restrict_sr=on`
    }
    try {
      const response = await fetch(query)
      const json = await response.json()
      const postData = json.data.children
      const numResults = postData.length

      if (numResults === 0) {
        dispatch(setPosts({}))
        return
      }
      const numPosts = numResults < 25 ? numResults : 25 
  
      let posts= {}
      for (let i=0; i<numPosts-1; i += 1) {
        const postId = postData[i].data.id
        const numComments = postData[i].data.num_comments
        posts[postId] = {
          id: postId,
          score: postData[i].data.score,
          title: postData[i].data.title,
          image: postData[i].data.selftext ? '' : postData[i].data.url,
          username: postData[i].data.author,
          time: timeConverter(postData[i].data.created),
          numComments: numComments,
          commentLink: postData[i].data.permalink,
          comments: []
        }
      }
      dispatch(setPosts(posts))
  
      //retrieve json of searchQuery
      //build the postList object with top 25 posts
      //return the list of post objects
      //postSlice internal state is updated
      
      // posts = ...
      // dispatch(setPosts(posts))
      // for all 25 posts, search the comments for each one
    }
    catch (error) {
      alert('Only 10 queries per minute'); return
    }
  }

  const searchComments = async (subreddit, postId) => {
    const query = `https://www.reddit.com/${subreddit}/comments/${postId}/.json`
    try {
      const response = await fetch(query)
      if (!response) { alert('Only 10 queries per minute'); return }
      const json = await response.json()

      const commentData = json[1].data.children
      const numComments = commentData.length

      let commentList = []
      for (let i=0; i<numComments-2; i+=1) {
        commentList.push({
          id: commentData[i].data.id,
          username: commentData[i].data.author,
          time: timeConverter(commentData[i].data.created),
          body: commentData[i].data.body,
        })
      }
      dispatch(addComments({
        postId: postId,
        comments: commentList
      }))
      //build commentList with all the comments
      //return the list of comment objects
      //commentSlice internal state is updated
    }
    catch (error) {
      alert('Only 10 queries per minute'); return
    }
  }

  return (
    <div className="App">
      <TopBar search={search}/>
      <Posts searchComments={searchComments}/>
      <SideBar search={search}/>
    </div>
  );
}

export default App;