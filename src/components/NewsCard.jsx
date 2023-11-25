import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {news?.articles?.map((article, index) => {
        const { urlToImage,author, title, description, publishedAt } = article;
        console.log(article);
        return (
          <>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-300">
              <img
                className="rounded-md w-full h-40 object-cover mb-4"
                src={urlToImage}
                alt={title}
              />
              <h2 className="text-xl text-gray-800 font-bold mb-2">
                Title:{title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Author:{author}</span>
              </p>
              <p className="text-sm text-gray-600 mb-2">{description}</p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-bold">Publish Time:{publishedAt}</span>{" "}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default NewsCard;
