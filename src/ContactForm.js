import React from "react";
import ReactDOM from "react-dom";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      error: "",
      subject: "",
      thankyou: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  isValidMobile(mobileno) {
    return /^[6-9]\d{9}$/.test(mobileno);
  }

  validateField(field, value) {
    if (value.length <= 0) {
      return (
        <div className="alert alert-danger">
          <span className="text-capitalize">{field}</span> is required field.
        </div>
      );
    } else {
      if (field === "email") {
        if (!this.isValidEmail(value))
          return <div className="alert alert-danger">Invalid Email.</div>;
      } else if (field === "phone") {
        if (!this.isValidMobile(value))
          return (
            <div className="alert alert-danger">Invalid Mobile Number.</div>
          );
      } else {
        return "";
      }
    }
  }

  handleBlur(event) {
    this.setState({
      error: this.validateField(event.target.name, event.target.value),
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    this.setState({
      thankyou: true,
    });

    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_1s3hikb",
        event.target,
        "user_VtCzmJ3vDiquGrPMDBbGu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    if (!this.state.thankyou) {
      return (
        <div className="card box_shw2 border-0 px-3 rounded-2 mb-3 w_500 py-4 mx-auto">
          <div className="card-body">
            {this.state.error}

            <form
              onSubmit={this.handleSubmit}
              encType="multipart/form-data"
              autoComplete="off"
            >
              <div className="position-relative form-group">
                <input
                  name="name"
                  type="text"
                  className="text-field form-control mb-3 bg_grey border-0 py-3"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  required="required"
                />
              </div>
              <div className="position-relative form-group">
                <input
                  name="phone"
                  type="text"
                  className="text-field form-control mb-3 bg_grey border-0 py-1"
                  placeholder="Phone Number"
                  onBlur={this.handleBlur}
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>

              <div className="position-relative form-group">
                <input
                  name="email"
                  type="email"
                  className="text-field form-control mb-3 bg_grey border-0 py-1"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  required="required"
                />
              </div>

              <div className="position-relative form-group">
                <textarea
                  name="message"
                  type="text"
                  className="text-field form-control mb-3 bg_grey border-0 py-1"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  required="required"
                />
              </div>
              <p className="text-center mb-0">
                <input
                  type="submit"
                  className="btn btn-primary px-5 text-uppercase py-3 f_12_14 border-0 d-inline-block"
                  value="Submit Now"
                />
              </p>
            </form>
          </div>
        </div>
      );
    }

    if (this.state.thankyou) {
      return (
        <div className="card box_shw2 border-0 px-3 rounded-2 mb-3 w_500 py-4 mx-auto">
          <div className="card-header bg-white f_20_22 border-0 text-center">
            <p>Thank for your message. We will contact you soon.</p>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Name: {this.state.name}</li>
              <li className="list-group-item">Mobile: {this.state.phone}</li>
              <li className="list-group-item">Email: {this.state.email}</li>
              <li className="list-group-item">Subject: {this.state.subject}</li>
              <li className="list-group-item">Message: {this.state.message}</li>
            </ul>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <ContactForm title="Get In Touch" />,
  document.getElementById("root")
);
