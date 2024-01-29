'use client';

import { useState } from "react";
import PodcastMain, { filterData } from "./components/PodcastMain/PodcastMain";
import Search from "./components/Search/Search";
import styles from "./page.module.css";


export default function Home() {
  const [value, setValue] = useState('')
  const [podcasts, setPodcast] = useState([])


  return (
    <main className={styles.main}>
      <Search
        value={value}
        setValue={setValue}
        podcasts={podcasts}
      />
      <PodcastMain value={value} setValue={setValue} podcasts={podcasts} setPodcast={setPodcast}/>
    </main>
  );
}


