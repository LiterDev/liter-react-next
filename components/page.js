import Link from "next/link";
import { connect } from "react-redux";
import Placeholder from "./Placeholder";

function Page({ placeholder, title }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>

      <Placeholder placeholder={placeholder} />
    </React.Fragment>
  );
}

export default connect(state => state)(Page);
