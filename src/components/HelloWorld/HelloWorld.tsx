import classNames from "classnames";

import "./HelloWorld.scss";

type HelloWorldProps = {
  /** Name to display in the outputted message */
  name?: string;
  /** Style to use when rendering */
  style?: "bold" | "heading";
  /** Additional classes to apply to component */
  className?: string;
};

/**
 * A basic greeting message displayed to a user.
 *
 * The intent of this component is to showcase how components should be added to our package repository with the use of unit tests, styling, and stories.
 * Default prop values should be specified in the deconstructed parameter object.
 *
 */
export const HelloWorld = ({
  name = "Planetary Data System",
  style,
  className,
  ...otherProps
}: HelloWorldProps) => {

  className = !!className ? className : "";

  const helloWorldClasses = classNames({
    "pds-wds-react-hello-world": true,
    bold: style === "bold",
    heading: style === "heading",
    [className]: !!className,
  });

  return (
    <div className={helloWorldClasses} {...otherProps}>
      Hello, {name}!
    </div>
  );
};