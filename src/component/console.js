import React from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'   


const styles = theme => ({
  list: {
    width: '100%',
    background: theme.palette.background.paper,
  },
});


class Console extends React.Component {
    constructor(props) {
        super(props)
        this.classes = props.classes
        this.console = window.console   
        this.msg_list = [1,2,3]
        this.init()
        this.msgItems = this.msg_list.map((item, index) => 
            <ListItem button key={index}>
                <ListItemText inset primary={item} />
            </ListItem>) 
        this.state = {
            test: this.msgItems
        }
    }

    updata = () => {
        this.msgItems = this.msg_list.map((item, index) => 
            <ListItem button key={index}>
                <ListItemText inset primary={item} />
            </ListItem>) 
        this.setState({test: this.msgItems})
    }


    log = (msg) => {
        this.console.log(msg+"msg", this.msg_list)
        this.msg_list.push(msg)
        this.updata()
    }
    
    warn = (msg) => {
        this.console.log(msg)
        this.msg_list.push(msg)
        this.updata()
    }

    error = (msg) => {
        this.console.log(msg)
        this.msg_list.push(msg)
        this.updata()
    }

    info = (msg) => {
        this.console.log(msg)
        this.msg_list.push(msg)
        this.updata()
    }

    init() {
        window.console = {}
        window.console.log = this.log
        window.console.error = this.error
        window.console.info = this.info
        window.console.warn = this.warn
    }

    render() {
        return(
            <div className="container console-container">
                <List className={this.classes.list}>
                    {this.state.test}
                </List>
            </div>)
    }
}



Console.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Console)