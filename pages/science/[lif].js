import { Toolbar } from '@/components/Toolbar';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import styles from '@/styles/Feed.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

export const Science = ({pageNumber, articles}) => {
    const router = useRouter();
    return (
        <div className='page-container'>
            <Toolbar/>
            <Header/>
            <SearchBar/>
            <div className={styles.heading}><h1> SCIENCE NEWS</h1></div>
        <div className={styles.main} >
            {articles.map((article, index) => (
                <div key={index} className={styles.post}>
                    <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                    <p>{article.description}</p>
                    {!!article.urlToImage && <img src={article.urlToImage}/>}
                </div>
            ))}
        </div>
        <div className={styles.paginator}>
            <div 
            onClick={() => {
            if(pageNumber>1){
                router.push(`/science/${pageNumber - 1}`).then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
            }}
            }
            className={pageNumber === 1 ? styles.disabled : styles.active}>
                Previous page
            </div>
            <div>#{pageNumber}</div> 
            <div 
            onClick={() => {
            if(pageNumber < 5){
                router.push(`/science/${pageNumber + 1}`).then(() => window.scrollTo({ top: 0, behavior: "smooth" }));
            }}
            }
            className={pageNumber === 5 ? styles.disabled : styles.active}>
                Next page
            </div>
            </div>
        </div>
    );
  };
  
  export const getServerSideProps = async (pageContext) => {
  const { lif } = pageContext.query;
  const pageNumber = Number(lif);
  
  
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  
  const apiResponse = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=science&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  
  const { articles } = apiResponse.data;
  
  return {
    props: {
      articles,
      pageNumber,
    },
  };
  };

  export default Science