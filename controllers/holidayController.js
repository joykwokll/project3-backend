
// const express = require('express');
// const Holiday = require("../models/Holiday")
// const router = express.Router();

// router.get("/seed", async (req, res) => {

//   const holidays = [
//     {
//       name: "New Year's Day",
//     },
//     {
//       name: "Good Friday",
//     }
//   ]
//   await Holiday.deleteMany({});
//   await Holiday.insertMany(holidays)
//   res.json(holidays)
// })

// router.get('/', (req, res) => {
//   res.send('holidays');
// })

// // //* Create Route
// // router.post("/", (req, res) => {
// //   //* extract the data from req.body
// //   req.body = { name: "My birthday", likes:888 }
// //   //* save the data using moongoose into database
  
// //   const holiday = Holiday.save(req.body);

// // //   res.send(holiday); 
// //   res.json(holiday); 
// // })

// //* Create Route
// router.post("/", async (req, res) => {
//     console.log("body", req.body)
//     try {
//       const createdHoliday = await Holiday.create(req.body);
//       res.status(200).send(createdHoliday);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     };
//   });
  
//   module.exports = router;


// const express = require('express');
// const Holiday = require("../models/Holiday")
// const router = express.Router();

// router.get("/seed", async (req, res) => {

//   const holidays = [
//     {
//       name: "New Year's Day",
//     },
//     {
//       name: "Good Friday",
//     }
//   ]
//   await Holiday.deleteMany({});
//   await Holiday.insertMany(holidays)
//   res.json(holidays)
// })

// //* Index Route
// router.get('/', (req, res) => {
//   Holiday.find()
//     .then(holidays => {
//       res.json(holidays)
//     })
//     .catch(err => {
//       res.json(err)
//     })
// })

// //* Create Route
// router.post("/", async (req, res) => {
//   console.log("body", req.body)
//   try {
//     const createdHoliday = await Holiday.create(req.body);
//     res.status(200).send(createdHoliday);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   };
// });

// //* Delete Route
// router.delete("/:id", async (req, res) => {
//   await Holiday.findByIdAndRemove(req.params.id);
//   res.json({ message: "Holiday Deleted" });
// });

// //*Put route
// router.put("/:id", async (req, res) => {
//   await Holiday.findByIdAndUpdate(req.params.id, req.body);
//   res.json({ message: "Holiday Updated" });
// });

// module.exports = router;



const express = require('express');
const Holiday = require("../models/Holiday")
const router = express.Router();

router.get("/seed", async (req, res) => {

  const holidays = [
    {
      name: "New Year's Day",
    },
    {
      name: "Good Friday",
    }
  ]
  await Holiday.deleteMany({});
  await Holiday.insertMany(holidays)
  res.json(holidays)
})

//* Index Route
router.get('/', (req, res) => {
  Holiday.find()
    .then(holidays => {
      res.json(holidays)
    })
    .catch(err => {
      res.json(err)
    })
})

//* Create Route
router.post("/", async (req, res) => {
  console.log("body", req.body)
  try {
    const createdHoliday = await Holiday.create(req.body);
    res.status(200).send(createdHoliday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
});

//* Delete Route
router.delete("/:id", async (req, res) => {
  await Holiday.findByIdAndDelete(req.params.id);
  res.json({ message: "Holiday Deleted" });
});

//*Put route
router.put("/:id", async (req, res) => {
  await Holiday.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Holiday Updated" });
});

module.exports = router;