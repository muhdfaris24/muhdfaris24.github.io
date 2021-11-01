let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function () {
  let userName = document.getElementById("userName");
  let userNameVal = userName.value;

  let userEmail = document.getElementById("userEmail");
  let userEmailVal = userEmail.value;

  let userPax = document.getElementById("userPax");
  let userPaxVal = userPax.value;

  let userRemarks = document.getElementById("userRemarks");
  let userRemarksVal = userRemarks.value;

  BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

function BookNow(userName, userEmail, userPax, userRemarks) {
  let url =
    "https://api.sheety.co/1a7dd957611ed2a7091eb3b6eda490f8/bookingApp/bookingApp";
  let body = {
    booking: {
      name: userName,
      email: userEmail,
      pax: userPax,
      remarks: userRemarks,
    },
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json.booking);
      alert(json.booking.name + " added in the list!");
    });
}