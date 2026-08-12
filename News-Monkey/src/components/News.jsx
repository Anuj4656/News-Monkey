import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 12,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchNews = async (page) => {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${this.state.pageSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: page,
      loading: false,
    });
  };

  handlePrev = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  handleNext = () => {
    const totalPages = Math.ceil(this.state.totalResults / this.state.pageSize);
    if (this.state.page < totalPages) {
      this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    const { page, pageSize, totalResults } = this.state;
    const totalPages = Math.ceil(totalResults / pageSize);

    return (
      <div className="container my-4">
        <h2 className="my-2 text-center">News Monkey - Top Headlines</h2>
        <hr />
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItem
                    title={e.title ? e.title.slice(0, 45) : undefined}
                    description={
                      e.description ? e.description.slice(0, 90) : undefined
                    }
                    imageUrl={e.urlToImage ? e.urlToImage : undefined}
                    url={e.url}
                  />
                </div>
              );
            })}
        </div>

        <nav aria-label="News pagination">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={this.handlePrev}>
                &laquo; Previous
              </button>
            </li>

            <li className="page-item disabled">
              <span className="page-link">
                Page {page} of {totalPages || 1}
              </span>
            </li>

            <li className={`page-item ${page >= totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={this.handleNext}>
                Next &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default News;
