import { ForgoRenderArgs, mount } from "forgo";

type ParentProps = {};

function Parent(props: ParentProps) {
  return {
    render(props: ParentProps, args: ForgoRenderArgs) {
      return (
        <div>
          <Greeter firstName="Jeswin" />
          <Greeter firstName="Kai" />
        </div>
      );
    },
  };
}

type GreeterProps = { firstName: string };

function Greeter(props: GreeterProps) {
  return {
    render(props: GreeterProps, args: ForgoRenderArgs) {
      return <div>Hello {props.firstName}</div>;
    },
  };
}

window.addEventListener("load", () => {
  mount(<Parent />, document.getElementById("root"));
});
