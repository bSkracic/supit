$(document).ready(() => {
  const text = "Budi izvrstan u onome što voliš!";
  const colors = ["red", "green", "blue", "yellow", "magenta", "cyan"];
  let i = 0;
  const typer = () => {
    $("#text-on-top").append(
      `<span style="color:${
        colors[Math.floor(Math.random() * colors.length)]
      }">${text[i]}</span>`
    );
    i++;
    if (i < text.length) {
      setTimeout(typer, 750);
    }
  };
  typer();
});
