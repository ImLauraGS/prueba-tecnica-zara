import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { podcastApi } from '@/app/service/podcastApi';

export default function PodcastDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [podcast, setPodcast] = useState(null);
  const service = podcastApi;

  useEffect(() => {
    if (id) {
      service.getPodcastById(id)
        .then((data) => {
          console.log('Podcast Detail Data:', data); // Verifica la estructura de los datos
          setPodcast(data.results[0]); // Asumiendo que results es un array
        })
        .catch((error) => {
          console.error('Error fetching podcast details:', error);
        });
    }
  }, [id]);

  if (!podcast) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{podcast.trackName}</h1>
      <p>Artista: {podcast.artistName}</p>
      <p>Descripción: {podcast.longDescription}</p>
      {/* Renderizar otros detalles del podcast según sea necesario */}
    </div>
  );
}