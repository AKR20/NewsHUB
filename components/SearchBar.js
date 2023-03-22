import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import styles from '@/styles/Search.module.css';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (query) {
      const timeoutId = setTimeout(async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?qInTitle=${query}&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}`);
        setResults(response.data.articles);
      }, 500);

      setTypingTimeout(timeoutId);
    } else {
      setResults([]);
    }
  }, [query]);

  const filteredResults = useMemo(() => {
    return results.filter((result) => result.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, results]);

  return (
    <div className={styles.main}>
    <div className={styles.result}>
      <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
      {filteredResults.length > 0 && (
        <ul>
          {filteredResults.map((result) => (
            <li key={result.url}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};
