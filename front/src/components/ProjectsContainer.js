import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../api'

export default class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      name: "",
      description: ""
    }
  }

  async componentDidMount() {
    const resp = await axios({
      method: 'GET',
      url: `${API_URL}/projects`,
      Accept: "application/json",
      "Content-Type": "application/json",
    })

    if (resp.data) {
      this.setState({projects: resp.data});
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleClick = async () => {
    const { name, description } = this.state;
    const data = { project: {name, description} };
    const resp = await axios({
      method: 'POST',
      url: `${API_URL}/projects`,
      data: data,
      Accept: "application/json",
      "Content-Type": "application/json",
    })

    if (resp) {
      let projects = [...this.state.projects, resp.data];
      this.setState({projects});
    }
  }

  render() {
    const { projects, name, description } = this.state

    return (
      <div>
        <p>Create new project</p>
        <input type="text" onChange={this.handleChange} placeholder="name" name="name" value={name} /> <br/>
        <input type="text" onChange={this.handleChange} placeholder="description" name="description" value={description} />
        <button onClick={this.handleClick}>Add</button>
        <h2>Projects</h2>
        {projects.map((p, index) => (
          <h1 key={index}>{p.name}</h1>
        ))}
      </div>
    )
  }
}
