import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});


class TableDefault extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.tableNames = props.tabledata.tableNames;
    this.data = props.tabledata.data;
    this.id = 0;
  }

  createData = (data) => {
    this.id += 1;
    data.id = parseInt(this.id ) 
    return data
  }


  getTableItem = (data) => {
    let tableNames = this.tableNames;
    this.id += 1
    return (<TableRow key={this.id}>
      {data.map((n, index) => {
        return(
              <TableCell {...tableNames[index].type}>{n}</TableCell>
              )
      })}
    </TableRow>)
  }


  render() {
    const data = this.data;
    const classes = this.classes;
    let tableNames = this.tableNames;
    return(
      <Paper className = {classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableNames.map((n) => {
                return(
                  <TableCell {...n.type} >{n.name}</TableCell>
                  )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n) => this.getTableItem(n))}
          </TableBody>
        </Table>
      </Paper>
      )
  }
}

TableDefault.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableDefault);