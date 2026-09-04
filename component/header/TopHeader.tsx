import Link from 'next/link';
import styles from './header/header.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiHeartBold } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";


function TopHeader() {
  return (
    <>
        <div className={styles.top_header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img src="img/logo.png" alt="Logo" />
                </Link>

                <form className={styles.search_box}>
                    <input type="text" name='search' id='search' placeholder="Search For Products..." />
                    <button type="submit"><FaMagnifyingGlass /></button>
                </form>

                <div className={styles.header_icons}>
                    <div className={styles.icon}>
                        <PiHeartBold />
                        <span className={styles.count}>0</span>
                    </div>

                    <div className={styles.icon}>
                        <TiShoppingCart />
                        <span className={styles.count}>0</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default TopHeader;