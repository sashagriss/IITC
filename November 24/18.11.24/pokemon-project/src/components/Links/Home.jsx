import React from 'react'
import { useState } from 'react';

const Home = () => {

    const [open, setOpen] = useState(false);
    const [clickedPok, setClickedPok] = useState(null);
  
    useEffect(() => {
      clickedPok && setOpen(true);
    });

  return (
    <div>Home</div>
  )
}

export default Home