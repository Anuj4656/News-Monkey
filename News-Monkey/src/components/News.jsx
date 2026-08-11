import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("API KEY EXISTS:", !!import.meta.env.VITE_NEWS_API_KEY);

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-4">
        <h2 className="my-2">News Monkey - Top Headlines</h2>
        <hr />
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}>
                <NewsItem
                  title={e.title ? e.title.slice(0, 45) : ""}
                  description={e.description ? e.description.slice(0, 90) : ""}
                  imageUrl={e.urlToImage}
                  url={e.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
