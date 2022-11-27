const requestURL = "http://localhost:3000";

const xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);
xhr.responseType = "json";
xhr.onload = () => {
  console.log(xhr.response);
};
xhr.send();
