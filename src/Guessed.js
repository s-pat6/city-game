import React, { useEffect, useState, useRef } from 'react'
import './Guessed.css'

const green = {
    color: '#10B981'
}
const red = {
  color: '#EF4444'
}
const gold = {
  color: '#F59E0B'
}
const black = {
  color: '#9CA3AF'
}
const blue = {
  color: '#3B82F6'
}

export default function Guessed({allCities, cur, mode, minDist}) {
  // console.log("Guessed is running")
  const divRef = useRef(null)
  const [styles, setStyles] = useState([])

  useEffect(() => {
    // console.log('scroll into view running')
    divRef.current.scrollIntoView({behavior: "smooth"})
    if (mode === 3) {
      setStyles(prev => {if(allCities.length===0){return []}; return [...prev, allCities[allCities.length-1].dist === 0 ? blue : allCities.length-1 === 0 ? black : allCities[allCities.length-2].dist > allCities[allCities.length-1].dist ? green : red]})
    } else {
      setStyles(prev => {if(allCities.length===0){return []}; return [...prev, allCities[allCities.length-1].dist === 0 ? blue : allCities.length-1 === 0 ? black : allCities[allCities.length-1].dist === minDist ? gold : allCities[allCities.length-2].dist > allCities[allCities.length-1].dist ? green : red]})
    }
  }, [allCities.length])

  return (
    <div className='box'>
      {allCities.map((city, index) => {
        return (<h2 style={styles[index]} key={city.key}>
            {city.numGuess}. {city.name}, {city.dataRef.iso} {mode === 1 ? ('(' + Math.round(city.dist) + 'km)') : ''}
        </h2>)
      })}
      <div ref={divRef}></div>
    </div>
  )
}
