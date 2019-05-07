import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";

const options = [
    { label: "--Select Country---", value: '' },
    { label: 'Finnish', value: 'Finnish' },
    { label: 'Swedish', value: 'Swedish' },
    { label: 'Danish', value: 'Danish' }
];

class AddUser extends React.Component {
  firstName = React.createRef();
  title = React.createRef();
  state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    country:'',
    message:"",
    skills: {
      html: false,
      css: false,
      javascript: false
    }
  };
  handleChange = e => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const skills = { ...this.state.skills };
      // const skills = Object.assign({}, this.state.skills);
      skills[name] = true
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
    console.log(this.state);
     const {firstName, lastName, age, gender,country, message, skills} = this.state;
     console.log(skills)
     const newSkills = [];
     for(const skill in skills) {
         if (skills[skill]){
             newSkills.push(skill.toUpperCase())
         }  
     }
  
     const user = {
         firstName, 
         lastName, 
         age,
         gender,
         skills:newSkills,
         country,
         message
        };

        this.props.addUser(user)

  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputField
            label="First Name"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />

          <InputField
            label="Age: "
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          />
          <p>Gender:</p>
          <InputField
            type="radio"
            label="Female"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />
          <InputField
            type="radio"
            label="Male"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />
          <InputField
            type="radio"
            label="Other"
            name="gender"
            value="Other"
            onChange={this.handleChange}
          />
          <p>Skills:</p>
          <InputField
            type="checkbox"
            label="HTML"
            name="html"
            onChange={this.handleChange}
          />
          <InputField
            type="checkbox"
            label="CSS"
            name="css"
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
          options = {options}
          label="Country"
          name="country"
          value = {this.state.country}
          onChange = {this.handleChange}
            />
            <TextareaField 
            name="message"
            value = {this.state.message}
            onChange = {this.handleChange}
            />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
