import { observable } from "mobx";

const userState = observable({
  user: false
})
window.userState = userState;
export default userState;