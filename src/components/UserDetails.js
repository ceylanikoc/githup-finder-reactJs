import React, {useEffect,useContext } from 'react'
import GithubContext from '../context/githubContext'
import Loading from './Loading'
import Repos from './Repos'

const UserDetails = ({getUserRepos,match,repos}) => {
    const {getUser,loading,user} = useContext(GithubContext)

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    },[])
    
    const {name,avatar_url,location,html_url,bio,blog,followers,following,public_repos} =user;

    if(loading) {
        return <Loading />
    }else {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={avatar_url} alt="" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text">{name}</p>
                            { location && 
                            <p>
                                <i className="fas fa-map-marker-alt"></i> {location}
                            </p>
                            }
                            <p>
                                <a href={html_url} className="btn btn-block btn-primary btn-sm" target="_blank">Githup Profile</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            {
                                bio && 
                                <>
                                    <h3>About</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            {
                                blog &&
                                    <>
                                        <h3>Blog</h3>
                                        <p>{blog}</p>
                                    </>
                            }
                            <div>
                                <span className="badge badge-primary m-1">Followers : {followers} </span>
                                <span className="badge badge-danger m-1">Following : {following} </span>
                                <span className="badge badge-success m-1">Public Repos : {public_repos} </span>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Repos repos={repos} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default UserDetails