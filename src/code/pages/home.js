import React from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

export default function Home(params) {
  return (
    <>
      <AppHeader />
      <div className="container">
        <h1 className="display-4">Find your masjid</h1>
        <form onsubmit="search()">
          <div className="row col-md-6">
            <label for="masjidCode">Enter your masjid code</label>
            <div className="input-group">
              <input type="text" className="form-control" id="masjidCode" />
              <div className="input-group-append">
                <input type="submit" className="btn btn-outline-primary" value="Search" />
              </div>
            </div>
          </div>
        </form>
        <div className="app">
          <h2 className="lead mt-4" v-if="searchedApps.length>0">Search history</h2>
          <ul className="list-group row col-md-6 pl-3">
            <a className="list-group-item list-group-item-action" href={"/todo"}>((item))</a>
          </ul>
          <a href={"/todo"} onClick={"clearHistory()"}>clear history</a>
        </div>
      </div>
      <div><Link to="/prayer-tv1">PrayerDailyTv1</Link></div>
    </>
  )
}