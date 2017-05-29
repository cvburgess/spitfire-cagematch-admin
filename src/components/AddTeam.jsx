import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typeahead } from 'react-typeahead';

const primaryColor = '#185A9D';
// const dangerColor = '#F15E14';
// const warningColor = '#F1BE14';

const StyledTypeahead = styled(Typeahead)`
  font: inherit;

  & > input {
    font: inherit;
    border: none;
    border-bottom: 2px solid ${primaryColor};
  }

  & > input:focus {
    font: inherit;
    outline: none;
  }

  & a {
    text-decoration: none;
    color: ${primaryColor};
  }

  & ul {
    color: #FFF;
    padding: 0;
    list-style-type: none;
  }

  & li {
    margin-top; 5px;
    padding: 5px;
    border-bottom: 1px solid ${primaryColor};
  }
`;

const AddTeam = ({ onSelectTeam, teams }) =>
  <StyledTypeahead
    filterOption="name"
    displayOption="name"
    placeholder="Add team"
    onOptionSelected={onSelectTeam}
    options={teams} />

AddTeam.propTypes = {
  teams: PropTypes.array
};

export default AddTeam;
