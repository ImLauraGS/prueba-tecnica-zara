'use client';
import Image from 'next/image';


export default function CardPodcast({image, author, name}) {

  return (
    <section>
       <Image
            loader={() => image}
            src={image}
            width={100}
            height={100}
       />
       <h3>{name}</h3>
       <p>Author: {author}</p>
    </section>
  )
}
