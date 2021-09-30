import React from 'react';
import PropTypes from 'prop-types';
import { SquaresWrapper } from './styles';
import Square from '../Square';

const Squares = ({ letters }) => {
  return (
    <SquaresWrapper>
      {letters.map(letter => (
        <Square letter={letter} />
      ))}
    </SquaresWrapper>
  );
};

Squares.propTypes = {};

export default Squares;
