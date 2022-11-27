const { Router } = require("express");
const router = Router();
const express = require("express");

// router.get("/", (req, res) => {
//   res.render("home");
// });
// router.post("/about", (req, res) => {
//   res.render("about.hbs");
// });

router.get('/', (req, res) => {
  res.render('home', {
    data: {},
    errors: {}
  })
})
 
router.post('/about', (req, res) => {
  res.render('about.hbs', {
    data: req.body, // { message, email }
    errors: {
      message: {
        msg: 'A message is required'
      },
      email: {
        msg: 'That email doesnt look right'
      }
    }
  })
})
// app.get("/hbs", (req, res) => {
//   res.render("home.hbs");
// });

// router.get("/", (req, res) => {
//   res.send("about");
// });

// router.post("trow", async (req, res) => {
//   const date = new Date({
//     title: req.body.firstName,
//   });
//   await date.save(res.redirect("/"));
// });

// fetch("/")
//   .then((res) => {
//     /* IF statement checks server response: .catch() does not do this! */
//     if (res.ok) {
//       console.log("HTTP request successful");
//     } else {
//       console.log("HTTP request unsuccessful");
//     }
//     return res;
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data)) // the data
//   .catch((error) => console.log(error)); // error handling

// //     fetch('/', {
// //     method: "POST", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
// //     headers: {
// //         'Content-type': 'application/json'
// //     },
// //     body: JSON.stringify(
// //         { name: "Captain Anonymous"}
// //     )
// // });

// fetch("/about", {
//   method: "POST", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({ name: "form" }),
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("HTTP request successful");
//     } else {
//       console.log("HTTP request unsuccessful");
//     }
//     return res;
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch("/", {
//   method: "DELETE",
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("HTTP request successful");
//     } else {
//       console.log("HTTP request unsuccessful");
//     }
//     return res;
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

module.exports = router;
