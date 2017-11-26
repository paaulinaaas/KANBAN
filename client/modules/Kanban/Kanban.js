import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLane } from '../Lane/LaneActions';
import { bindActionCreators } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { compose } from 'redux';

// Import Style
import styles from './Kanban.css';

class Kanban extends React.Component {
  render() {
    const { lanes, createLane } = this.props;

    return (
      <div>
        <button className="add-lane"
          onClick={() => createLane({
            name: 'New lane'
          })}
        >+</button>
        <Lanes lanes={lanes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(Kanban);

