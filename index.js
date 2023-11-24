let players = [];
const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qrriOF6s61NZcRIRrkWl/scores/";
function getAll() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      players = data.result;
    })
    .then(() => {
      let total = "";
      players.forEach((ele) => {
        total += ` <tr>
        <td>${ele.user}</td>
        <td>${ele.score}</td>
      </tr>`;
      });
      document.querySelector(".table-data-js").innerHTML = total;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function addPlayer() {
  const user = document.querySelector(".user-js").value;
  const score = document.querySelector(".score-js").value;
  const data = {
    user,
    score,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      getAll();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  document.querySelector(".user-js").value = "";
  document.querySelector(".score-js").value = "";
}
