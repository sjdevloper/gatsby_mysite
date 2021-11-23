
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../components/news.css";



export default class news extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email:"",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return (
      <Layout>
      <Seo title="Me" />

      <div class="text-center">

        <h1 class="sign">Signup to My Newsletter!</h1>


          <form class="form-signin" onSubmit={this.handleSubmit}>

          <input class="form-control"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />

           <input class="form-control"
            type="text"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />

            <input class="form-control"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <div class="checkbox mb-3"></div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Me Up!</button>

      </form>

      </div>

      </Layout>
    )



  }


}
