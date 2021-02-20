import React, { createContext, useContext, useState, useEffect } from 'react'

export const RatingsContext = createContext()

export const useRatings = () => useContext(RatingsContext)

export const RatingsProvider = ({ children }) => {
  const [ratings, setRatings] = useState({})

  useEffect(() => {
    fetch('/.netlify/functions/all-ratings')
      .then(res => res.json())
      .then(res => setRatings(res))
  }, [])

  const proxyRatings = new Proxy(ratings, {
    get: (_, slug) =>
      slug in ratings ? ratings[slug].rating : { rating: 5, count: 1 },
  })

  return (
    <RatingsContext.Provider value={{ ratings: proxyRatings }}>
      {children}
    </RatingsContext.Provider>
  )
}
