var row = document.getElementById("row");
row.addEventListener("submit", (event) => {
  event.preventDefault();

  var inputGmail = document.getElementById("Email").value;
  var inputTopic = document.getElementById("Subject").value;
  var inputText = document.getElementById("Message").value;

  console.log("Done", inputGmail, inputTopic, inputText);

  var Address = {
    Email: inputGmail,
    Subject: inputTopic,
    Message: inputText
  };

  fetch("http://127.0.0.1:5500/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Address)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Data has been saved");
      row.reset();
    })
    .catch(error => {
      console.log("Data are not saved, try again!!");
    });
});
