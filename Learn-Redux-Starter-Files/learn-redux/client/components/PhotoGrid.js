import React, { Component } from "react";
import Photo from "./Photo";

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => {
          // key is just for react but then it dissapears
          // we need an "i" prop if we need the index inside of the Photo component
          return <Photo {...this.props} key={i} i={i} post={post} />;
        })}
      </div>
    );
  }
}
