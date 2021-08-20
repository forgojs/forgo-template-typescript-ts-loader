import * as forgo from "forgo";
import { ForgoRenderArgs, mount } from "forgo";

type AppProps = {};

function App(initialProps: AppProps) {
  return {
    render(props: AppProps, args: ForgoRenderArgs) {
      return (
        <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
          <h1>Forgo App</h1>
          <p>Welcome to Forgo.</p>
          <Logo height="300" width="300" />
          <p>Start by editing src/index.tsx in your favorite editor.</p>
        </div>
      );
    },
  };
}

type LogoProps = { height: string; width: string };

function Logo(initialProps: LogoProps) {
  return {
    render(props: LogoProps, args: ForgoRenderArgs) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 135.46667 135.46667"
          height={props.height}
          width={props.width}
        >
          <g
            style="display:inline"
            transform="translate(0,-161.53331)"
            id="layer1"
          >
            <path
              id="path3781"
              d="m 31.975239,293.84194 c 0.65706,-0.63179 4.94652,-4.7579 9.53213,-9.16914 l 8.33748,-8.02043 v -15.82533 -15.82533 h -3.56758 -3.56758 l -9.46527,-9.22365 -9.46528,-9.22365 13.05193,-0.0617 13.05193,-0.0617 -0.0278,-12.95716 -0.0278,-12.95716 9.66428,-9.47976 9.664279,-9.47976 14.80719,0.041 14.807204,0.041 0.0617,-9.24107 0.0617,-9.24107 9.347038,9.04607 c 5.14088,4.97534 9.34705,9.0872 9.34705,9.13747 0,0.0503 -4.28946,4.27125 -9.53214,9.37994 l -9.532132,9.28853 -14.6971,-0.0317 -14.6971,-0.0317 -0.0779,0.4714 c -0.0428,0.25927 -0.0785,6.2601 -0.0793,13.33516 l -10e-4,12.86375 h 11.27 11.27001 l 9.408152,9.10026 9.40815,9.10026 -20.544512,0.0617 c -11.29948,0.0339 -20.59077,0.10796 -20.64731,0.16451 -0.0565,0.0566 -0.11773,11.28688 -0.13598,24.9563 l -0.0332,24.85348 H 52.033059 c -9.31336,0 -17.90511,0.0313 -19.09277,0.069 l -2.15938,0.0686 1.19465,-1.14872 z"
              style="fill:#aa0000;stroke-width:0.12339331"
            />
          </g>
        </svg>
      );
    },
  };
}

window.addEventListener("load", () => {
  mount(<App />, document.getElementById("root"));
});
