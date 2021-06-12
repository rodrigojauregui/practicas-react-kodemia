import React from 'react';

class SearchBar extends React.Component {
    render(){
      return (
        <form className='ps-3' >
            <input className="  search-bar" type="text" name="q" placeholder="Search..."  />
        </form> 
        );
    }
}

export default SearchBar;