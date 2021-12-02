
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../components/news.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import addToMailchimp from 'gatsby-plugin-mailchimp';



export default class news extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }

  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }

    render() {
      return this.state.result === "success " ? (
          <div>SUCCESS</div>
        ) : this.state.result === "error" ? (
          <div>ERROR</div>
        ) : (
          <Layout>
          <Seo title = "Me" />
          <div class="text-center">
           <h1 class="sign">Signup to My Newsletter!</h1>


          <form  class="form-signin"  onSubmit={this._handleSubmit}>

            <TextField
              // id="outlined-email-input"
              class="form-control"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              // variant="outlined"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              label="Submit"
              type="submit"
            >
              <Typography variant="button">SUBMIT</Typography>
            </Button>
          </form>

          </div>



            </Layout>
        )
    }
}
