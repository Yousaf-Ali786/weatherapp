import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const Search = () => {
    const [query, setQuery] = useState('');
    const { setCity } = useContext(WeatherContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setCity(query.trim());
        setQuery('');
    };

    return (
        <div className="bg-gray-300 p-2 rounded-2xl max-w-2xl mx-auto shadow-2xl opacity-60 ">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 p-3 rounded-md text-black outline-none "
                />
                <button
                    type="submit"
                    className="bg-gray-100 text-black font-bold px-6 py-3 rounded-lg hover:bg-blue-300 transition duration-300"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
