$(document).ready(() => {
  const text = "Budi izvrstan u onome što voliš!\n";
  const purpleText = "ZAISKRI.";
  let i = 0;

  const typer = () => {
    $("#text-on-top").append(
      `<span style="color: white;font-weight: bold;">${text[i]}</span>`
    );
    i++;
    if (i < text.length) {
      setTimeout(typer, 500);
    } else {
      i = 0;
      typer2();
    }
  };
  i = 0;
  const typer2 = () => {
    $("#text-on-top").append(
      `<span style="color: maroon;font-weight: bold;">${purpleText[i]}</span>`
    );
    i++;
    if (i < purpleText.length) {
      setTimeout(typer2, 500);
    }
  };
  typer();
});
