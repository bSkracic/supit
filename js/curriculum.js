$(document).ready(() => {
  main();
});

const apiURL = "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan/";

const main = () => {
  const table = $("#table");
  const inputField = $("#subjects");

  let subjectList = [];
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      subjectList = data;
      inputField.autocomplete({
        source: subjectList,
      });
    });
};
