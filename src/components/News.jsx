import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const News = () => {
    const { news, loading, error } = useContext(NewsContext);

    if (loading) return <p className="text-center text-blue-500 font-semibold">Loading news...</p>;
    if (error) return <p className="text-center text-red-500 font-semibold">Failed to fetch news: {error}</p>;

    return (
        <div className="bg-gray-300 p-4 rounded-2xl max-w-2xl mx-auto mt-6 shadow-2xl opacity-75">

            <h2 className="text-2xl font-bold text-black text-center mb-4">
                Latest Weather News
            </h2>

            <div className="space-y-4">
                {news.map((article, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-3 rounded-xl shadow-md"
                    >
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-blue-600 hover:underline block"
                        >
                            {article.title}
                        </a>
                        <p className="text-sm text-black opacity-70 mt-1">Source: {article.source.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
