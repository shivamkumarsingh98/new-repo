import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../../Component/Browser/Browser.module.css'

const Newsbord = () => {

    const [newsData, setNewsrData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();



    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=28424ca7c6ee47d1bd7e9dbc257d7e12')
            .then((response) => response.json())
            .then((data) => {
                setNewsrData(data.articles);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className={styles.body}>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    {Array.isArray(newsData) && newsData.length > 0 ? (
                        newsData.map((articles, index) => (
                            <div key={index} className={styles.img}>
                                {articles.urlToImage && (
                                    <img src={articles.urlToImage} alt="News Image" />
                                )}
                                <h3 className={styles.publishedAt}>{articles.publishedAt}</h3>
                                <h2 className={styles.title}>{articles.title}</h2>
                                <p className={styles.description}>{articles.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No news data available.</p>
                    )}
                </div>
            )}
        </div>
    );
}



export default Newsbord
