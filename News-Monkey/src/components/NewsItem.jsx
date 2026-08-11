import React, { Component } from "react";

export class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, desc } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iWPWrATa6hVs/v1/1200x800.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
