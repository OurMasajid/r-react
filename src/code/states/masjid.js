import { observable } from "mobx";

const masjidState = observable({
  test: "a",
  data: false,
  dailyPrayers: false,
  dataFetched() {
    console.log("data has been loaded")
    //masjidState.data = masjidState.data.data;
    //console.log(masjidState.data["Daily Prayer"]["data"][0].Month);
    let tempDP = {};
    let today = new Date();
    for (let i = 0; i < masjidState.data["Daily Prayer"]["data"].length; i++) {
      const el = masjidState.data["Daily Prayer"]["data"][i];
      // console.log(el);
      if (el.Month == today.getMonth() + 1 && el.Date == today.getDate()) {
        tempDP["today"] = el;
        break;
      }
    }
    masjidState.dailyPrayers = tempDP;
    console.log(tempDP);
  }
})
window.masjidState = masjidState;
export default masjidState;