import upArrow from '../../images/up-arrow-unclicked.png'
import upArrowHover from '../../images/up-arrow-hover.png'
import upArrowClicked from '../../images/up-arrow-clicked.png'
import downArrow from '../../images/down-arrow-unclicked.png'
import downArrowHover from '../../images/down-arrow-hover.png'
import downArrowClicked from '../../images/down-arrow-clicked.png'
import { scoreConverter } from '../../utilities/utilities'

export function PostSideBar( { id, postScore } ) {

  let upvoted = false
  let downvoted = false

  const handleUpArrowMouseOver = () => { document.getElementById('upArrow'+id).src = upvoted ? upArrowClicked : upArrowHover }

  const handleDownArrowMouseOver = () => { document.getElementById('downArrow'+id).src = downvoted ? downArrowClicked : downArrowHover }

  const setScoreColor = () => {
    if (upvoted) { document.getElementById('postScore'+id).style.color = '#11b855' } 
    else if (downvoted) { document.getElementById('postScore'+id).style.color = 'red' }
    else { document.getElementById('postScore'+id).style.color = '#b4b4b4' }
  }

  const setArrowColors = () => {
    document.getElementById('upArrow'+id).src = upvoted ? upArrowClicked : upArrow
    document.getElementById('downArrow'+id).src = downvoted ? downArrowClicked : downArrow
    setScoreColor()
  }
  
  const handleUpArrowClick = () => { 
    upvoted = !upvoted
    if (upvoted) { downvoted = false }
    setArrowColors()
  }
  const handleDownArrowClick = () => { 
    downvoted = !downvoted
    if (downvoted) { upvoted = false }
    setArrowColors()
  }

  return (
    <div className='postSideBar'>
      <img className='upArrow' src={upArrow} id={'upArrow'+id} onMouseOver={handleUpArrowMouseOver} onMouseOut={setArrowColors} onClick={handleUpArrowClick}/>
      <p className='postScore' id={'postScore'+id}>{scoreConverter(postScore)}</p>
      <img className='downArrow' src={downArrow} id={'downArrow'+id} onMouseOver={handleDownArrowMouseOver} onMouseOut={setArrowColors} onClick={handleDownArrowClick}/>
    </div>
  )
}