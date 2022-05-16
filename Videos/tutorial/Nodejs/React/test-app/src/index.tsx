import { render } from "react-dom";
import { AutoComplete } from "./AutoComplete";
import data from "./data.json";

const rootElement = document.getElementById("root");
render(
  <>
    <h2>Test Auto Complete By Yasir </h2>

    <AutoComplete
      inputStyle={{ backgroundColor: "PaleTurquoise" }}
      optionsStyle={{ backgroundColor: "LemonChiffon" }}
      data={data}
      iconColor="Turquoise"
    />
  </>,
  rootElement
);
