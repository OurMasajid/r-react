import React from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import masjidState from '../states/masjid';
import {readData2} from '../firebase/data'
import { showIndicator } from '../components/Indicator';

export default function Home(params) {
  const searchMasjid = async (e) => {
    console.log("searchMasjid called");
    e.preventDefault();
    masjidState.data = await readData2(new FormData(e.target).get("masjidCode"));
    if (!masjidState.data) {
      console.log("found NOT masjid");
      showIndicator("Wrong masjid code.", 5);
    }
    else{
      console.log("found masjid");
      showIndicator("Now redirect to masjid component.", 5);
    }
  }
  const clearSearchHistory = () => {
    //todo clear search history
  }
  return (
    <>
      <AppHeader />
      <div className="container">
        <h1 className="display-4">Find your masjid</h1>
        <form onSubmit={searchMasjid}>
          <div className="row col-md-6">
            <label htmlFor="masjidCode">Enter your masjid code</label>
            <div className="input-group">
              <input type="text" className="form-control" name="masjidCode" id="masjidCode" />
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
          <a href={"/todo"} onClick={clearSearchHistory}>clear history</a>
        </div>
      </div>
      <div><Link to="/prayer-tv1">PrayerDailyTv1</Link></div>
    </>
  )
}