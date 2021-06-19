import React from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../../components/AppHeader'

export default function MasjidIndex(params) {
  return (
    <>
      <AppHeader />
      <div className="bg-light py-5 mt-2 text-center">
        <h1 className="display-3" style={{color: 'darkslategrey'}}>((data.about[0].fullName))</h1>
        <div className="lead">Address</div>
      </div>
      <div id="news" className="bg-success py-3 text-white" v-if="data.news">
        <h2 className="display-1 text-center">News</h2>
        <hr className="star-light" />
        <div className="container container-small newses">
          <div className="card border-light bg-success my-1" v-for="(item, index) in data.news">
            <div className="card-body">
              <h3 className="display-4">((item.title))</h3>
              <p className="news-description">((item.description))</p>
              <a href="item.link" className="btn btn-outline-light news-link stretched-link">((item.linkText 'Learn more'))</a>
            </div>
          </div>
        </div>
      </div>
      <div id="jumma" className="text-center py-3" v-if="data.jumma">
        <h2 className="display-1">Jumma Prayer</h2>
        <hr className="star-light" />
        <div className="container container-small">
          <table className="table table-striped table-hover jumma-prayer" v-for="(item, index) in data.jumma">
            <thead>
              <tr>
                <th className="display-3" colspan="2">Jumma ((index + 1))</th>
              </tr>
            </thead>
            <tbody>
              <tr className="khutba-row">
                <th scope="row">Khutba</th>
                <td className="khutba">((item.khutbaTime))</td>
              </tr>
              <tr className="iqama-row">
                <th scope="row">Iqama</th>
                <td className="iqama">((item.iqamahTime))</td>
              </tr>
              <tr className="language-row">
                <th scope="row">Language</th>
                <td className="language">((item.Language))</td>
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
                <th className="display-4 date" colspan="3">((getOneDayPrayerTime.dateToShow))</th>
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
                <td className="fajr">((getOneDayPrayerTime.Fajr))</td>
                <td className="fajri">((getOneDayPrayerTime.fIqama))</td>
              </tr>
              <tr className="prayer-change fajrw">
                <td colspan="3">Fajr iqamah will be at <span className="fajrt"></span> tomorrow iA</td>
              </tr>
              <tr>
                <th scope="row">Sunrise</th>
                <td className="sunrise" colspan="2">((getOneDayPrayerTime.Sunrise))</td>
              </tr>
              <tr>
                <th scope="row">Duhr</th>
                <td className="zuhr">((getOneDayPrayerTime.Zuhr))</td>
                <td className="zuhri">((getOneDayPrayerTime.zIqama))</td>
              </tr>
              <tr className="prayer-change zuhrw">
                <td colspan="3">Duhr iqamah will be at <span className="zuhrt"></span> tomorrow iA</td>
              </tr>
              <tr>
                <th scope="row">Asr</th>
                <td className="asr">((getOneDayPrayerTime.Asr))</td>
                <td className="asri">((getOneDayPrayerTime.aIqama))</td>
              </tr>
              <tr className="prayer-change asrw">
                <td colspan="3">Asr iqamah will be at <span className="asrt"></span> tomorrow iA</td>
              </tr>
              <tr>
                <th scope="row">Maghrib</th>
                <td className="maghrib">((getOneDayPrayerTime.Maghrib))</td>
                <td className="maghribi">((getOneDayPrayerTime.mIqama))</td>
              </tr>
              <tr>
                <th scope="row">Isha</th>
                <td className="esha">((getOneDayPrayerTime.Esha))</td>
                <td className="eshai">((getOneDayPrayerTime.eIqama))</td>
              </tr>
              <tr className="prayer-change eshaw">
                <td colspan="3">Isha iqamah will be at <span className="eshat"></span> tomorrow iA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="calendar" className="py-3" v-if="data.calendarEvents">
        <h2 className="display-1 text-center">Calendar</h2>
        <hr className="star-light" />
        <div className="container container-medium text-small m-calendar">
          <div className="card card-body my-1 event" v-for="(item, index) in data.calendarEvents">
            <p className="event-title text-small text-dark">((item.title ))</p>
            <p className="event-time m-0 text-secondary top-hr">(( getCalendarTime(item.starttime, item.endtime) ))</p>
            <p v-if="item.location" className="event-location m-0 text-dark top-hr">((item.location))</p>
            <p v-if="item.description" className="event-description m-0 top-hr">((item.description))</p>
          </div>
        </div>
      </div>
      <div id="programs" className="py-3" v-if="data.programs">
        <h2 className="display-1 text-center">Programs</h2>
        <hr className="star-light" />
        <div className="container container-medium text-small m-calendar">
          <div className="card card-body my-1 event" v-for="(item, index) in data.programs">
            <p v-if="item.title" className="event-title text-small text-dark">((item.title))</p>
            <p v-if="item.time" className="event-time m-0 text-secondary top-hr">((item.time))</p>
            <p v-if="item.location" className="event-location m-0 text-dark top-hr">((item.location))</p>
            <p v-if="item.description" className="event-description m-0 top-hr">((item.description))</p>
          </div>
        </div>
      </div>

      <div id="about" className="bg-light text-center py-3" v-if="data.about[0].about">
        <h2 className="display-1">About Us</h2>
        <hr className="star-light" />
        <div className="container container-medium">
          <p>((data.about[0].about))</p>
        </div>
      </div>
      <div id="donate" className="text-center py-3" v-if="data.donate">
        <h2 className="display-1">Donate</h2>
        <hr className="star-light" />
        <div className="container container-medium">
          <p>In a hadith the Prophet Muhammad (sal Allahu alayhi wa salaam) said:<br />
            "Whoever builds a mosque with the intention of seeking Allah's pleasure, Allah will build for him a place in
        Paradise."<br />
              Sahih Al-Bukhai, Hadith #441 | Vol.1 | Agreed Upon</p>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" style="display:none"><input type="hidden"
            name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="TAFAB8228JPUL" /> <input id="paypalbtn" type="image"
              name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
              alt="PayPal - The safer, easier way to pay online!" /></form>
          {/* <div className="btn btn-info" target="_blank" onclick="paypalbtn.click(); return false;">Donate online</div> */}
          <a className="btn btn-info" href="https://us.mohid.co/tx/austin/icrr/masjid/online/donation">Donate online</a>
          <br />
                  Or mail check to masjid address: <br /><b>​1951 Hampton Ln, Round Rock, TX 78664</b>
        </div>
      </div>
      <div id="contact" className="bg-light py-3" v-if="data.contact">
        <h2 className="display-1 text-center">Contact Us</h2>
        <hr className="star-light" />
        <div className="container container-small">
          <h3 className="display-3 text-center">Address</h3>
          <p className="text-center">Islamic center located at <br /><a target="_blank" className="text-dark"
            href="https://www.google.com/maps/place/Islamic+Center+of+Round+Rock/@30.488992,-97.660475,14z/data=!4m13!1m7!3m6!1s0x8644d1d43e1f1eaf:0x7c93ce4f5e8e534d!2s1951+Hampton+Ln,+Round+Rock,+TX+78664!3b1!8m2!3d30.4912968!4d-97.6591546!3m4!1s0x8644d1d43e0224ab:0xa82587f1cfd8b743!8m2!3d30.4912972!4d-97.6591811?hl=en"><b>1951
            Hampton Ln, Round Rock, TX 78664</b></a></p>
          <form name="ICRR Contact Form" method="POST" netlify-honeypot="must-message" netlify>
            <div className="form-group">
              <label for="Name">Name</label>
              <input type="text" className="form-control" name="Name" required />
            </div>
            <div className="form-group">
              <label for="Email">Email</label>
              <input type="email" className="form-control" name="Email" required />
            </div>
            <div className="form-group">
              <label for="Message">Message</label>
              <textarea className="form-control" name="Message" rows="3" required></textarea>
            </div>
            <div className="form-group d-none">
              <label for="must-message">This is not to be filled</label>
              <textarea className="form-control" id="must-message" name="must-message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-info w-100">Send message</button>
          </form>
        </div>
      </div>
      <div id="signup" className="bg-dark py-3 text-center" v-if="data.newsletter">
        <h2 className="lead text-white">Sign up for newsletter</h2>
        {/* <hr className="star-light" />  */}
        <div className="container container-medium">
          {/* Begin Mailchimp Signup Form  */}
          <div id="mc_embed_signup">
            <form
              action="https://roundrockmasjid.us12.list-manage.com/subscribe/post?u=429c5653e3594fe7e421551f5&amp;id=9d44a9d6af"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
              target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">

                <div className="mc-field-group form-inline justify-content-center">
                  <input type="email" value="" name="EMAIL" className="required email form-control" id="mce-EMAIL"
                    placeholder="Your email here" />
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                    className="btn btn-info m-2" />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style="display:none"></div>
                  <div className="response" id="mce-success-response" style="display:none"></div>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                  name="b_429c5653e3594fe7e421551f5_9d44a9d6af" tabindex="-1" value="" /></div>
                <div className="clear"></div>
              </div>
            </form>
          </div>

          {/* End mc_embed_signup */}
        </div>
      </div>
    </>
  )
}