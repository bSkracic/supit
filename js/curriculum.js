$(document).ready(() => {
  const apiURL = "http://www.fulek.com/VUA/SUPIT";

  let subjectList = [];

  // TODO: Transition Animations
  // TODO: Modal

  fetch(`${apiURL}/GetNastavniPlan`)
    .then((response) => response.json())
    .then((data) => {
      $("#subjects-search").autocomplete({
        source: data,
        select: (event, ui) => {
          $("#subjects-search").val("");
          if (subjectList.every((subject) => subject["id"] != ui.item.value)) {
            fetch(`${apiURL}/GetKolegij/${ui.item.value}`)
              .then((response) => response.json())
              .then((data) => {
                subjectList.push(data);
                populateTable();
              });
          }
        },
      });
    });

  const addSum = () => {
    let ects = 0;
    let hours = 0;
    subjectList.forEach((subject) => {
      ects += subject["ects"];
      hours += subject["sati"];
    });
    $("#sum").remove();
    $("#subjects-table").append(`
      <tr id="sum" style="font-weight: bolder; background-color: white;">
        <td>Ukupno</td>
        <td style="color: red;">${ects}</td>
        <td style="color: red;">${hours}</td>
      <tr>
      `);
  };

  const populateTable = () => {
    if (subjectList.length === 1) {
      $("#table-container").empty();
      $("#table-container").append(`
        <table id="subjects-table">
          <tr>
            <th>Kolegij</th>
            <th>ECTS</th>
            <th>Sati</th>
            <th>P</th>
            <th>V</th>
            <th colspan="2">Tip</th>
          </tr>
        </table>`);
    }
    $("#subjects-table").append(
      generateTableRow(subjectList[subjectList.length - 1])
    );
    $(`#${subjectList[subjectList.length - 1]["id"]}`).on("click", (event) => {
      removeTableRow(event.target.id);
    });
    addSum();
  };

  const generateTableRow = (subject) =>
    `<tr id="${subject["id"]}-entry">
      <td>${subject["kolegij"]}</td>
      <td>${subject["ects"]}</td> 
      <td>${subject["sati"]}</td>
      <td>${subject["predavanja"]}</td>
      <td>${subject["vjezbe"]}</td>
      <td>${subject["tip"]}</td>
      <td>
        <button id="${subject["id"]}" class="btn btn-danger">Obriši</button>
      </td>
    </tr>`;

  const removeTableRow = (id) => {
    subjectList = subjectList.filter((subject) => subject["id"] != id);
    if (subjectList.length === 0) {
      $("#table-container").empty();
    }
    $(`#${id}-entry`).remove();
  };
});
