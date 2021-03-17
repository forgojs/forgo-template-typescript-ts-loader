import { ForgoRenderArgs, mount } from "forgo";

type ParentProps = {};

function Parent(props: ParentProps) {
  return {
    render(props: ParentProps, args: ForgoRenderArgs) {
      return (
        <div>
          <h1>Forgo App</h1>
          <p>
            Welcome to Forgo. Start by editing src/index.tsx in your favorite
            editor.
          </p>
          <p>Let's greet a couple of strangers.</p>
          <ul>
          <Greeter firstName="Jeswin" />
          <Greeter firstName="Kai" />
          </ul>
        </div>
      );
    },
  };
}

type GreeterProps = { firstName: string };

function Greeter(props: GreeterProps) {
  return {
    render(props: GreeterProps, args: ForgoRenderArgs) {
      return <li>Hello {props.firstName}!</li>;
    },
  };
}

window.addEventListener("load", () => {
  mount(<Parent />, document.getElementById("root"));
});
