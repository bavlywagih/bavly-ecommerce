"use client";
import styles from '../css/header.module.css';
import { TiThMenu } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from 'react';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


type Category = {
    name: string;
    slug: string;
};


const NavLink = [
    {title:"Home" , link:"/"},
    {title:"About" , link:"/about"},
    {title:"Accessories" , link:"/accessories"},
    {title:"Blog" , link:"/blog"},
    {title:"Contact" , link:"/contact"},
]


function BtmHeader() {
    const pathname = usePathname();
    const [categories, setCategories] = useState<Category[]>([]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <>
      <div className={styles.btm_header}>
        <div className={styles.container}>
            <nav className={styles.nav}>

                <div className={styles.category_nav} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>

                    <div className={styles.category_btn}>
                        <TiThMenu />
                        <p>Browse Categories</p>
                        <IoMdArrowDropdown />
                    </div>

                    <div className={styles.category_nav_list + " " + (isCategoryOpen ? styles.active : "")}>
                        {categories.map((category) => (
                        <Link key={category.slug} href={category.slug} className={styles.category_nav_item}>
                            {category.name}
                        </Link>
                        ))}
                    </div>


                
                </div>

                <div className={styles.nav_links}>
                    {NavLink.map((item) => (
                        <li key={item.link} className={pathname === item.link ? styles.active : ""}>
                            <Link key={item.link} href={item.link} className={styles.nav_link_item}>{item.title}</Link>
                        </li> 
                    ))}
                </div>
            </nav>

            <div className={styles.sign_regs_icon}>
                <Link href="/login">
                    <PiSignInBold />
                </Link>
                <Link href="/register">
                    <FaUserPlus />
                </Link>
            </div>
        </div>
      </div>
    </>
  )
}
export default BtmHeader;