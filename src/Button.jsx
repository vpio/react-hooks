import React, {useState} from 'react';

export default function Button() {
  const [clicked, setClicked] = useState(false)
  return (
    <button onClick={() => {
        setClicked(!clicked)
      }}>
      {clicked ? "Thanks, been clicked!" : "Click me, Please"}
    </button>
  )
}
