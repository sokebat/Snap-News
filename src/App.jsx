import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";

function App() {
  const [allNews, setAllNews] = useState([]);

  const API_Key = "408216e39bb24b68b95f1be49ae56944";
  const API = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_Key}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();

        setAllNews(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Navbar />
      <NewsCard news={allNews} />
    </>
  );
}

export default App;
