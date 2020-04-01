import React from 'react';

const GifSearch = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.query} onChange={props.handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default GifSearch;