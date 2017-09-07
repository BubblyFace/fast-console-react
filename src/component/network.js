import React from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'   
import {TableDefault, Title} from './templates/index.js'


const styles = theme => ({
  list: {
    width: '100%',
    background: theme.palette.background.paper,
  },
});

const Resources = 
    <div className="resource-container">

    </div>


class Console extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.resources = this.getResource()
    }

    getResource = () => {
        let tableNames = [
        {
            name: 'name',
            type: []
        },{
            name: 'time',
            type: ['numeric']
        },{
            name: 'url',
            type: []
        }]
        let data = [['dfsafasdasd',43213,'http://test.html'],['dfsafasdasd',43213,'http://test.html'],['dfsafasdasd',43213,'http://test.html']]
        return {
            tableNames : tableNames,
            data: data
        }
    }

    getXHR = () => {

    }

    updata = () => {

    }

    init = () => {
        //xhr的复写
    }

    render() {
        return(
            <div className="container console-container">
                <div className="resource-container">
                    <Title titlename = "Resources"></Title>
                    <TableDefault tabledata = {this.resources} ></TableDefault>   
                </div>
                <div className="XMLHttpRequest-container">
                    <Title titlename = "XHR"></Title>
                </div>
            </div>)
    }
}



Console.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Console)