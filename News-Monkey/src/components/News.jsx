import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2>News Monkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="Breaking News"
              desc="A breif description of the news around you only on News Monkey"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Breaking News"
              desc="A breif description of the news around you only on News Monkey"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Breaking News"
              desc="A breif description of the news around you only on News Monkey"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
