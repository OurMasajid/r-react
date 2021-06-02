import { Observer } from 'mobx-react';
import React from 'react';
import { useLocation } from 'react-router';
import getData from '../CRUD/crudUtils.js';
import masjidState from '../states/masjid.js';

export default function PrayerDailyTv1(params) {
  let query = new URLSearchParams(useLocation().search);
  let masjidKey = query.get("masjidKey");
  console.log(masjidKey);
  getData(masjidKey, masjidState, masjidState.dataFetched);
  return (
    <Observer>{() =>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-12 m-auto">
            <div id="digi-clock">ha</div>
          </div>
        </div>
        <div className="row">
          <div className="col prayerCol Fajr">
            <div className="h2">Fajr</div>
            <div className="h3" id="fajr">{masjidState?.dailyPrayers?.today?.Fajr}</div>
            <div className="h3" id="fajri">{masjidState?.dailyPrayers?.today?.fIqama}</div>
          </div>
          <div className="col prayerCol Sunrise">
            <div className="h2">Sunrise</div>
            <div className="h3" id="sunrise">{masjidState?.dailyPrayers?.today?.Sunrise}</div>
          </div>
          <div className="col prayerCol Zuhr">
            <div className="h2">Duhr</div>
            <div className="h3" id="zuhr">{masjidState?.dailyPrayers?.today?.Zuhr}</div>
            <div className="h3" id="zuhri">{masjidState?.dailyPrayers?.today?.zIqama}</div>
          </div>
          <div className="col prayerCol Asr">
            <div className="h2">Asr</div>
            <div className="h3" id="asr">{masjidState?.dailyPrayers?.today?.Asr}</div>
            <div className="h3" id="asri">{masjidState?.dailyPrayers?.today?.aIqama}</div>
          </div>
          <div className="col prayerCol Maghrib">
            <div className="h2">Maghrib</div>
            <div className="h3" id="maghrib">{masjidState?.dailyPrayers?.today?.Maghrib}</div>
            <div className="h3" id="maghribi">{masjidState?.dailyPrayers?.today?.mIqama}</div>
          </div>
          <div className="col prayerCol Esha">
            <div className="h2">Isha</div>
            <div className="h3" id="esha">{masjidState?.dailyPrayers?.today?.Esha}</div>
            <div className="h3" id="eshai">{masjidState?.dailyPrayers?.today?.eIqama}</div>
          </div>
        </div>
      </div>
    }</Observer>
  )
}

// observe(masjid);