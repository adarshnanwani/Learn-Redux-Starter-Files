import React, { Component } from "react";
import Photo from "./Photo";

class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map(post => {
          return <Photo {...this.props} post={post} key={post.code} />;
        })}
      </div>
    );
  }
}

export default PhotoGrid;
