import userState from '../states/user';
import { showIndicator, hideIndicator } from './../components/Indicator'
import { firebase } from './firebase'
// function save(formNameParam) {
//   setTimeout(showIndicator("Saving..."));
//   if (!formNameParam) {
//     formNameParam = formName.value;
//   }
//   if (!formNameParam) {
//     console.log("fail to save because neither formNameParam nor formName provided");
//     return false;
//   }
//   let tempData = {};
//   tempData[formNameParam] = app.formData;
//   console.log(tempData);
//   let dbc = firebase.firestore().collection("apps");
//   let docId = getUrlSearchParam("docId");
//   if (docId) {
//     dbc.doc(docId).update(tempData)
//       .then(function () {
//         console.log("Document successfully written!");
//         setTimeout(showIndicator("Saved!",1));
//       })
//       .catch(function (error) {
//         console.error("Error writing document: ", error);
//         showIndicator("Something went wrong! Code 23", 10);
//       });
//   }
//   else {
//     //doc = dbc.doc();//creating empty doc to get id
//     tempData["owner"] = [firebase.auth().currentUser.email];
//     firebase.firestore().collection("idCounter").doc("apps").get().then(function (counterDoc) {
//       if (counterDoc.exists) {
//         let newDocId = counterDoc.data().newId + 1;
//         console.log("this is the new id: " + newDocId);
//         firebase.firestore().collection("idCounter").doc("apps").update({ "newId": newDocId + 3 }).then(function () { console.log("id updated on server"); });
//         dbc.doc(newDocId.toString()).set(tempData)
//           .then(function () {
//             console.log("Document successfully written!");
//             setUrlSearchParam("docId", newDocId);
//             hideIndicator();
//           })
//           .catch(function (error) {
//             console.error("Error writing document: ", error);
//             showIndicator("Something went wrong! Code 22", 10);
//           });
//       }
//       else{
//         showIndicator("Something went wrong! Code 21", 10);
//       }
//     });
//   }
// }


export function readData(docId, setTo) {
  // let docId = getUrlSearchParam("docId");
  console.log(docId, setTo);
  if (docId) {
    console.log(docId);
    firebase.firestore().collection("apps").doc(docId)
      .onSnapshot(function (doc) { //will be triggered on save because of snapshot
        console.log(doc);
        if (doc.exists) {
          setTo.data = doc.data();
        }
        else {
          setTo.data = null;
        }
        hideIndicator();
      });
  }
  else {
    setTo.data = null;
  }
}

export function readData2(docId) {
  return new Promise(resolve => {
    console.log(docId);
    if (docId) {
      console.log(docId);
      firebase.firestore().collection("apps").doc(docId)
        .onSnapshot(function (doc) { //will be triggered on save because of snapshot
          console.log(doc);
          if (doc.exists) {
            resolve(doc.data());
          }
          else {
            resolve(null)
          }
          hideIndicator();
        });
    }
    else {
      resolve(null)
    }
  });
}

function getUserApps() {
  if (userState.user) {
    firebase.firestore().collection("apps").where("owner", "array-contains", userState.user.email)
      .onSnapshot(function (querySnapshot) {
        let tempData = [];
        querySnapshot.forEach(function (doc) {
          let td = doc.data();
          td.id = doc.id;
          tempData.push(td);
        });
        //app.userApps = tempData;
      });
  }
  else {
    //app.userApps = [];
  }
}

// function getUrlSearchParam(variable) {
//   var query = window.location.search.substring(1);
//   var vars = query.split("&");
//   for (var i = 0; i < vars.length; i++) {
//     var pair = vars[i].split("=");
//     if (pair[0] == variable) { return pair[1]; }
//   }
//   return "";
// }

// var setUrlSearchParam = function (key, value) {
//   var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
//     urlQueryString = document.location.search,
//     newParam = key + '=' + value,
//     params = '?' + newParam;

//   // If the "search" string exists, then build params from it
//   if (urlQueryString) {
//     keyRegex = new RegExp('([\?&])' + key + '[^&]*');

//     // If param exists already, update it
//     if (urlQueryString.match(keyRegex) !== null) {
//       params = urlQueryString.replace(keyRegex, "$1" + newParam);
//     } else { // Otherwise, add it to end of query string
//       params = urlQueryString + '&' + newParam;
//     }
//   }
//   window.history.replaceState({}, "", baseUrl + params);
// };