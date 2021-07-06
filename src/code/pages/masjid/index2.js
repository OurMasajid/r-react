import React, { useEffect, useState } from 'react'
import AppHeader from '../../components/AppHeader'
import News from '../../components/masjid/News';
import masjidState from '../../states/masjid'

export default function MasjidIndex(params) {
  const [about, setAbout] = useState();
  //let about;
  useEffect(() => {
    if (masjidState.data?.about) {
      setAbout(masjidState.data?.about[0]);
    }
    return () => {

    }
  }, [about])
  

  return (
    <>
      <AppHeader />
      <div className="bg-light py-5 mt-2 text-center">
        <h1 className="display-3" style={{ color: 'darkslategrey' }}>{about?.fullName}</h1>
        <div className="lead">{about?.address}, {about?.city}, {about?.state} {about?.zip}</div>
      </div>
      {/* {newsUi} */}

      <News state={masjidState} dataKey="news" />

      {/* <div id="jumma" className="text-center py-3" v-if="masjidState.data.jumma">
        <h2 className="display-1">Jumma Prayer</h2>
        <hr className="star-light" />
        <div className="container container-small">
          <table className="table table-striped table-hover jumma-prayer" v-for="(item, index) in masjidState.data.jumma">
            <thead>
              <tr>
                <th className="display-3" colspan="2">Jumma {index + 1}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="khutba-row">
                <th scope="row">Khutba</th>
                <td className="khutba">{item.khutbaTime}</td>
              </tr>
              <tr className="iqama-row">
                <th scope="row">Iqama</th>
                <td className="iqama">{item.iqamahTime}</td>
              </tr>
              <tr className="language-row">
                <th scope="row">Language</th>
                <td className="language">{item.Language}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="dailyprayers" className="bg-light text-center py-3" v-if="getOneDayPrayerTime">
        <h2 className="display-1">Daily Prayer</h2>
        <hr className="star-light" />
        <div className="container container-small">
          <table className="table table-hover daily-prayer">
            <thead>
              <tr>
                <th className="display-4 date" colspan="3">{getOneDayPrayerTime.dateToShow}</th>
              </tr>
              <tr>
                <th scope="col"></th>
                <th scope="col">Athan</th>
                <th scope="col">Iqama</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Fajr</th>
                <td className="fajr">{getOneDayPrayerTime.Fajr}</td>
                <td className="fajri">{getOneDayPrayerTime.fIqama}</td>
              </tr>
              <tr className="prayer-change fajrw">
                <td colspan="3">Fajr iqamah will be at <span className="fajrt"></span> tomorrow iA</td>
              </tr>
              <tr>
                <th scope="row">Sunrise</th>
                <td className="sunrise" colspan="2">{getOneDayPrayerTime.Sunrise}</td>
              </tr>
              <tr>
                <th scope="row">Duhr</th>
                <td className="zuhr">{getOneDayPrayerTime.Zuhr}</td>
                <td className="zuhri">{getOneDayPrayerTime.zIqama}</td>
              </tr>
              <tr className="prayer-change zuhrw">
                <td colspan="3">Duhr iqamah will be at <span className="zuhrt"></span> tomorrow iA</td>
              </tr>
              <tr>
                <th scope="row">Asr</th>
                <td className="asr">{getOneDayPrayerTime.Asr}</td>
                <td className="asri">{getOneDayPrayerTime.aIqama}</td>
              </tr>
              <tr className="prayer-change asrw">
                <td colspan="3">Asr iqamah will be at <span className="asrt"></span> tomorrow iA</td>
              </tr>
              <tr>
                <th scope="row">Maghrib</th>
                <td className="maghrib">{getOneDayPrayerTime.Maghrib}</td>
                <td className="maghribi">{getOneDayPrayerTime.mIqama}</td>
              </tr>
              <tr>
                <th scope="row">Isha</th>
                <td className="esha">{getOneDayPrayerTime.Esha}</td>
                <td className="eshai">{getOneDayPrayerTime.eIqama}</td>
              </tr>
              <tr className="prayer-change eshaw">
                <td colspan="3">Isha iqamah will be at <span className="eshat"></span> tomorrow iA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="calendar" className="py-3" v-if="masjidState.data.calendarEvents">
        <h2 className="display-1 text-center">Calendar</h2>
        <hr className="star-light" />
        <div className="container container-medium text-small m-calendar">
          <div className="card card-body my-1 event" v-for="(item, index) in masjidState.data.calendarEvents">
            <p className="event-title text-small text-dark">{item.title}</p>
            <p className="event-time m-0 text-secondary top-hr">{getCalendarTime(item.starttime, item.endtime)}</p>
            <p v-if="item.location" className="event-location m-0 text-dark top-hr">{item.location}</p>
            <p v-if="item.description" className="event-description m-0 top-hr">{item.description}</p>
          </div>
        </div>
      </div>
      <div id="programs" className="py-3" v-if="masjidState.data.programs">
        <h2 className="display-1 text-center">Programs</h2>
        <hr className="star-light" />
        <div className="container container-medium text-small m-calendar">
          <div className="card card-body my-1 event" v-for="(item, index) in masjidState.data.programs">
            <p v-if="item.title" className="event-title text-small text-dark">{item.title}</p>
            <p v-if="item.time" className="event-time m-0 text-secondary top-hr">{item.time}</p>
            <p v-if="item.location" className="event-location m-0 text-dark top-hr">{item.location}</p>
            <p v-if="item.description" className="event-description m-0 top-hr">{item.description}</p>
          </div>
        </div>
      </div>

    */}
    </>
  )
}