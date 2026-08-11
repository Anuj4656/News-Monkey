import React, { Component } from "react";

export class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, imageUrl, url } = this.props;

    return (
      <div className="card my-5" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
