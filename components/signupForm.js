import Link from "next/link";
import { connect } from "react-redux";
// import Placeholder from "./Placeholder";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});


//function SignupForm({ props, title }) {
function SignupForm(props, context) {
  const { classes, className } = props;

  const backgroundColor = "#eee";

  return (
    <div className="hello">
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
        
          // onChange={this.handleChange("name")}
          margin="normal"
        />
      </form>
      <style jsx>{`
        $color: red;

        // .hello {
        //   padding: 100px;
        //   text-align: center;
        //   transition: 100ms ease-in background;
        //   &:hover {
        //     color: $color;
        //   }

        //   @media only screen and (max-width: 480px) {
        //     font-size: 20px;
        //   }
        // }
      `}</style>
    </div>
  );
}

//export default connect(state => state)(SignupForm);
export default withStyles(styles)(SignupForm);
