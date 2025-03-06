import React, { useState, useEffect } from 'react';
import { NewsContext } from './NewsContext';

const NEWS_API_KEY = '0ed32098b0a14d4690ae11efaf53e924';

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError('');

            try {
                const res = await fetch(
                    `https://newsapi.org/v2/everything?q=weather&apiKey=${NEWS_API_KEY}`
                );

                if (!res.ok) {
                    throw new Error('Failed to fetch news');
                }

                const data = await res.json();

                // Shuffle and select random 5 articles
                const shuffled = data.articles.sort(() => 0.5 - Math.random());
                const randomFive = shuffled.slice(0, 5);

                setNews(randomFive);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };


        fetchNews();
    }, []);

    return (
        <NewsContext.Provider value={{ news, loading, error }}>
            {children}
        </NewsContext.Provider>
    );
};
