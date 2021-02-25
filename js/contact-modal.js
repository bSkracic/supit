$("#send").on("click", () => {
  let name = $("#name").val();
  let email = $("#email").val();
  let importance = $("#importance").val();
  let message = $("#message").val();
  let newsletter = $("#newsletter").prop("checked");

  let body = {
    name,
    email,
    importance,
    message,
    newsletter,
  };
  console.log(body);

  $.ajax({
    type: "POST",
    url: "http://www.fulek.com/VUA/SUPIT/ContactUs",
    data: body,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function () {
      alert("Poruka uspješno poslana!");
    },
    failure: function () {
      alert(`Poruka nije poslana: \n${err}`);
    },
  });
});
