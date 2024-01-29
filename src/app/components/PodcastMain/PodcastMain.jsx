'use client';
import React, {useState, useEffect} from 'react'
import { podcastApi } from '@/app/service/podcastApi'
import Link from 'next/link';
import CardPodcast from '../CardPodcast/CardPodcast';



export default function PodcastMain({value, podcasts, setPodcast}) {
    
    const service = podcastApi()
    

    useEffect(() => {
        service.getAll().then((res) => res.data)
        .then((data) => setPodcast(data.feed.entry));
      },[])

    
      const filterData = (podcasts) => {
        return podcasts['im:name'].label.toUpperCase().includes(value.toUpperCase()) || 
        podcasts['im:artist'].label.toUpperCase().includes(value.toUpperCase()) || value === ''
      }
      console.log(podcasts)
  return (
    <section>
        {podcasts.filter(filterData).map((podcast) => (
           <Link href={`/podcast/${podcast.id.attributes['im:id']}`} key={podcast.id}>
                <CardPodcast image={podcast['im:image'][2].label} name={podcast['im:name'].label} author={podcast['im:artist'].label} />
           </Link>
        ))}
    </section>
  )
}
