import React from 'react'

 const Repo = ({repos}) => {
  return (
    <li className="list-group-item"> 
    <i className="far fa-dot-circle"></i> <a href={repos.html_url} target="_blank">{repos.name}</a>
    </li>
  )
}

export default Repo;