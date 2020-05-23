import React from 'react';
import PropTypes from 'prop-types';
import { Col as ADCol } from 'antd';

const Col = ({ children, xs, ...props }) => {
  return (
    <ADCol span={(xs * 2).toString()} {...props}>
      {children}
    </ADCol>
  );
};

Col.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number
};

export default Col;
