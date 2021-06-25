import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterContact } from "../../redux/clientActions";

const Filter = ({ onChange, filter }) => {
  return (
    <>
      Find contacts by name:
      <input placeholder="Search..." value={filter} type="text" name="filter" onChange={onChange} />
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired
};
const mapStateToProps = (state, ownProps) => ({
  filter: state.filter
});
const mapDispatchToProps = {
  onChange: evt => filterContact(evt.target.value)
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
