import { useRouter } from "next/router";
import styles from '@/styles/Toolbar.module.css'

export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/home/1')}>Headlines</div>
            <div onClick={() => router.push('/feed/1')}>Categories</div>
            {/* <div onClick={() => router.push('/trend')}>Trend</div> */}
        </div>
    );
}