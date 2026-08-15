import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country = "us", pageSize = 8, category = "general" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.title = `News-Monkey | ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  }, [category]);

  useEffect(() => {
    fetchNews(1);
  }, []);

  const fetchNews = async (pageNumber) => {
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${pageNumber}&pageSize=${pageSize}&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);
      setPage(pageNumber);
      setLoading(false);
    } catch (err) {
      console.error("fetchNews failed:", err);
      setLoading(false);
    }
  };

  const fetchMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${nextPage}&pageSize=${pageSize}&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      const newArticles = parsedData.articles || [];

      setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      setHasMore(newArticles.length > 0);
    } catch (err) {
      console.error("fetchMore failed:", err);
      setLoading(false);
      setHasMore(false);
    }
  };

  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <>
      <div className="container my-4">
        <h2
          className="text-center"
          style={{ margin: "40px", marginTop: "90px" }}
        >
          News Monkey - {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>

        <hr />

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={loading ? <Spinner /> : null}
          endMessage={<p style={{ textAlign: "center" }}>All News loaded.</p>}
        >
          <div className="row">
            {articles.map((e, index) => {
              return (
                <div className="col-md-4" key={e.url || index}>
                  <NewsItem
                    source={e.source?.name}
                    author={!e.author ? "Unknown" : e.author}
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
};

export default News;
