import { useRouter } from "next/router";
import styles from '@/styles/Header.module.css'
import { SearchBar } from '@/components/SearchBar';

export const Header = () => {
    const router = useRouter();

    return(
      <div className={styles.main}>
      <header>
        <nav>
            <h2 style={{marginLeft: '80px', marginTop: '30px',marginBottom: '22px', color: 'white', fontSize: '32px'}}>Category</h2>
          <ul>
          <button onClick={() => router.push('/business/1')}>Business</button>
          <button onClick={() => router.push('/sports/1')}>Sports</button>
          <button onClick={() => router.push('/entertainment/1')}>Entertainment</button>
          <button onClick={() => router.push('/technology/1')}>Technology</button>
          <button onClick={() => router.push('/health/1')}>Health</button>
          <button onClick={() => router.push('/science/1')}>Science</button>
          </ul>
        </nav>
      </header>
    </div>
    );
}