import React, {Component} from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
  render() {

    let projectItems;

    if (this.props.projects) {

      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.title} project={project}/>
        );
      });

    }

    return (
      <div className="Projects">
        My Projects
        {projectItems}
        {/* {this.state.hey}  //  Cannot read property 'hey' of null */}
        {/* {this.props.hey}  //  Objects are not valid as a React child (found: object with keys {things}). If you meant to render a collection of children, use an array instead.  */}
        {/* {this.props.hoy}  //  (no error, no additional output) */}
      </div>
    );
  }
}

export default Projects;
