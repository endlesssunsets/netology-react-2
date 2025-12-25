import React from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default class Store extends React.Component {
    constructor({ products }) {
        super();
        this.products = products;
        this.state = { view: "cards" };
    }

    render() {
        let oppositeViewType;
        let currentViewComponent;
        if(this.state.view == "list") {
            oppositeViewType = "cards";
            currentViewComponent = <ListView items={this.products} />
        } else {
            oppositeViewType = "list";
            currentViewComponent = <CardsView cards={this.products} />
        }

        return (
            <>
                <IconSwitch
                    icon={this.state.view == "cards" ? "view_module" : "view_list"}
                    onSwitch={() => this.setState({ view: oppositeViewType })}
                />
                {currentViewComponent}
            </>
        );
    }
}