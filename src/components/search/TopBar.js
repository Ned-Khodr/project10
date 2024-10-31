import { React, useState } from "react";
import logo from '../../images/reddit-minimal-logo.png'
import magnifyingGlass from '../../images/magnifying-glass.png'
import { useSelector } from "react-redux";
import { selectSubreddit } from "../sideBar/subbredditSlice";

export function TopBar( { search } ) {
  const [searchTerm, setSearchTerm] = useState('')
  const subreddit = useSelector(selectSubreddit)

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    search(subreddit, searchTerm)
  }

  return (
    <div className="topBar" id='topBar'>
      <div className="logoBase">
        <img className='logo' src={logo} width='35px' height='35px'/>
        <p className='logoNameBlue'>Reddit</p><p className='logoName'>Minimal</p>
      </div>
      <form className='searchBar' onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Search Tracks"
          placeholder="   Search"
          className="searchInput" id="searchInput"
          onChange={handleChange}
        />
        <input type="image" src={magnifyingGlass} border="0" alt="Submit" className="searchIcon" />
      </form>

    </div>
  )
}