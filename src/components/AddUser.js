import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";

const options = [
  { label: "--Select Country---", value: "" },
  { label: "Finnish", value: "Finnish" },
  { label: "Swedish", value: "Swedish" },
  { label: "Danish", value: "Danish" }
];

class AddUser extends React.Component {
  firstName = React.createRef();
  title = React.createRef();
  state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    country: "",
    message: "",
    skills: {
      html: false,
      css: false,
      javascript: false
    },
    touched: {
      firstName: false,
      lastName: false,
      age: false,
      message: false,
    }
  };
 
  //
  handleChange = e => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const skills = { ...this.state.skills };
      // const skills = Object.assign({}, this.state.skills);
      skills[name] = !skills[name];
      this.setState({
        skills
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      age,
      gender,
      country,
      message,
      skills
    } = this.state;
    const newSkills = [];
    for (const skill in skills) {
      if (skills[skill]) {
        newSkills.push(skill.toUpperCase());
      }
    }

    const user = {
      firstName,
      lastName,
      age,
      gender,
      skills: newSkills,
      country,
      message
    };

    this.props.addUser(user);
  };
  handleBlur = e => {
      const {name} = e.target;
      this.setState({
          touched:{...this.state.touched, [name]:true}
      })

  };
  validate = () => {
      const errors = {
          firstName: '',
          lastName: '',
          age: '',
          message: '',
      }
      const {firstName, lastName, age, message} = this.state.touched;
      if(firstName && this.state.firstName.length < 3){
        errors.firstName = "First name must have at least 2 characters."
      }
      if (lastName && this.state.lastName.length < 3) {
          errors.lastName = "Last name must have at least 2 characters."
      }
      if (age && Number(this.state.age) < 18) {
          errors.age = "You must be above 18"
      }
      
      return errors;
  }
  render() {
    const errors = this.validate();
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputField
            label="First Name"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error = {errors.firstName}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
             error = {errors.lastName}
          />

          <InputField
            label="Age: "
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={errors.age}
          />
          <p>Gender:</p>
          <InputField
            type="radio"
            label="Female"
            name="gender"
            value="Female"
            checked={this.state.gender === "Female"}
            onChange={this.handleChange}
          />
          <InputField
            type="radio"
            label="Male"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}
            onChange={this.handleChange}
          />
          <InputField
            type="radio"
            label="Other"
            name="gender"
            value="Other"
            checked={this.state.gender === "Other"}
            onChange={this.handleChange}
          />
          <p>Skills:</p>
          <InputField
            type="checkbox"
            label="HTML"
            name="html"
            checked={this.state.skills.html}
            onChange={this.handleChange}
          />
          <InputField
            type="checkbox"
            label="CSS"
            name="css"
            checked={this.state.skills.css}
            onChange={this.handleChange}
          />
          <InputField
            type="checkbox"
            label="JavaScript"
            name="javascript"
            checked={this.state.skills.javascript}
            onChange={this.handleChange}
          />
          <SelectField
            options={options}
            label="Country"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
          <TextareaField
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={errors.message}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
