import Link from "next/link";
import { connect } from "react-redux";
// import Placeholder from "./Placeholder";

function SignupForm({ title }) {
  const backgroundColor = "#eee";
  return (
    <div className="hello">
      <p>Hello World</p>
      <style jsx>{`
        $color: red;

        .hello {
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
          &:hover {
            color: $color;
          }

          @media only screen and (max-width: 480px) {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default connect(state => state)(SignupForm);
