import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import masjidState from '../states/masjid';
import {readData2} from '../firebase/data'
import { hideIndicator, showIndicator } from '../components/Indicator';

export default function Home(params) {
  let history = useHistory();
  const searchMasjid = async (e) => {
    showIndicator("Looking for masjid.");
    console.log("searchMasjid called");
    e.preventDefault();
    masjidState.data = await readData2(new FormData(e.target).get("masjidCode"));
    hideIndicator();
    if (!masjidState.data) {
      showIndicator("Wrong masjid code.", 3);
    }
    else{
      console.log("found masjid");
      history.push("/masjid")
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