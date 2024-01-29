'use client';

import React from 'react'
import { filterData } from "../PodcastMain/PodcastMain";

export default function Search({podcasts, value, setValue}) {

  return (
    <div>
        {/* <div>{podcasts.filter(filterData).length}</div> */}
        <input
            type="search"
            placeholder='Filter podcasts...'
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    </div>
  )
}
