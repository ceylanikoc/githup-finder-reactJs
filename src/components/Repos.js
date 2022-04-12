import React from 'react'
import Repo from './Repo'


const Repos = ({repos}) => {
  return repos.map(repos => <Repo repos={repos} key={repos.id}/>)
}


export default Repos;