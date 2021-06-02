import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(params) {
  return (
    <div>Home <br/>
      <div><Link to="/prayer-tv1">PrayerDailyTv1</Link></div>
    </div>
  )
}