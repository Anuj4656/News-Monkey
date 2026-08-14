import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      hasMore: true,
    };
    document.title = `News-Monkey | ${this.props.category}`;
  }

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchNews = async (page) => {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${page}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: page,
      loading: false,
    });
  };

  fetchMore = async () => {
    const nextPage = this.state.page + 1;
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${nextPage}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      const newArticles = parsedData.articles || [];

      this.setState((prevState) => ({
        articles: prevState.articles.concat(newArticles),
        totalResults: parsedData.totalResults,
        page: nextPage,
        loading: false,
        hasMore: newArticles.length > 0, // stop as soon as a page comes back empty
      }));
    } catch (err) {
      console.error("fetchMore failed:", err);
      this.setState({ loading: false, hasMore: false });
    }
  };

  render() {
    const { page, totalResults } = this.state;
    const totalPages = Math.ceil(totalResults / this.props.pageSize);

    return (
      <>
        {/* Heading */}
        <div className="container my-4">
          <h2 className="text-center" style={{ margin: "40px" }}>
            News Monkey -{" "}
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
          </h2>

          <hr />

          {/* content and cards */}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMore}
            hasMore={this.state.hasMore}
            loader={<Spinner />}
            endMessage={<p style={{ textAlign: "center" }}>All News loaded.</p>}
          >
            <div className="row">
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4" key={e.url}>
                    <NewsItem
                      source={e.source.name}
                      author={!e.author ? "Unkown" : e.author}
                      publishedAt={new Date(e.publishedAt).toGMTString()}
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
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
