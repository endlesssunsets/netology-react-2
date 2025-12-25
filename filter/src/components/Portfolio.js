import React from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = { selected_filter: "All" };
    }

    render() {
        let projects = [];
        for(const project of this.props.projects) {
            if(this.state.selected_filter == "All" || project.category == this.state.selected_filter) {
                projects.push(project);
            }
        }

        return (
            <div className="portfolio">
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selected_filter}
                    onSelectFilter={(filter) => this.setState({ selected_filter: filter })}
                />
                <ProjectList projects={projects} />
            </div>
        );
    }
}