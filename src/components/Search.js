import React, {useState,useContext} from "react";
import GithubContext from '../context/githubContext'

const Search = ({setAlert,showClearButton}) => {

  const {searchUsers,clearUsers,users} = useContext(GithubContext)
  
  const [keyword,setKeyword] = useState('');

  const onchange = (e) => {
    setKeyword(e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();

    if(keyword === '') {
        setAlert('lütfen bir anahtar kelime giriniz.','danger');
    } else {
        searchUsers(keyword);
        setKeyword('');
    }      
 }
  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={keyword}
            onChange={onchange}
            className="form-control"
            placeholder="Search User..."
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <button
          onClick={clearUsers}
          className="btn btn-secondary btn-sm btn-block mt-2"
        >
          Clear Result
        </button>
      )}
    </div>
  );
}

export default Search;
