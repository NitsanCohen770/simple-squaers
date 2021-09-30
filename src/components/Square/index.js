import React from 'react';
import PropTypes from 'prop-types';
import { SquareWrapper } from './styles';

const Square = ({ letter }) => {
  return <SquareWrapper onClick={() => alert(letter)}>{letter}</SquareWrapper>;
};

Square.propTypes = {};

export default Square;
