import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';

const styles = {
    root : {
        top: '0',
        width: '100%'
    }
}

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.items = {
            cons: 'console',
            net: 'network',
            timeline: 'timeline',
            ele: 'ele',
            store: 'store'
        };
        this.currentState = props.currentState
        this.handleChange = props.handleChange
    }

    render(){
        const classes = this.props.classes;
        const {
            cons,
            net,
            timeline,
            ele,
            store,
        } = this.items;
        return (
            <BottomNavigation value={cons} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationButton label="cons" value="cons" icon={<RestoreIcon />} />
                <BottomNavigationButton label="net" value="net" icon={<FavoriteIcon />} />
                <BottomNavigationButton label="ele" value="ele" icon={<LocationOnIcon />} />
                <BottomNavigationButton label="timeline" value="timeline" icon={<FolderIcon />} />
            </BottomNavigation>
            )
    }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
