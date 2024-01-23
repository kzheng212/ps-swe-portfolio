// GET aka READ
axios
  // We only want to get the users from page 2 here because this dummy data is being used by multiple people in the world and the database is massive
  .get("https://reqres.in/api/users?page=2")
  .then((res) => handleData(res.data.data))
  .catch((e) => console.log(e));

function handleData(data) {
  console.log(data);
}

// POST aka CREATE
axios
  // We are posting users from users database
  .post("https://reqres.in/api/users", {
    firstName: "Andy",
    lastName: "WarHol",
    email: "myGoofyEmail@gmail.com",
    // Does not work because of good schema implementation
    createdAt: "Our year of the spaghetti Monster 1978",
    timeout: 5000,
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (response) {
    console.log(response);
  });

// PUT aka UPDATE
axios
  // UPDATE a specific user with new data
  .put("https://reqres.in/api/users/201", {
    firstName: "Hanan",
    lastName: "Goolsby",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });

// DELETE aka DELETE
axios
  .delete("https://reqres.in/api/users/201")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
