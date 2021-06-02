export default function getData(url, setTo, callback) {
  fetch(url)
  .then(response => response.json())
  .then(data =>  {
    setTo["data"] = data ;
    if (callback) {
      callback();
    }
  });
}