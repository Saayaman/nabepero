import React from 'react';
import cx from 'classnames';

const Container = ({size, children}) => (
  <div className={cx('Container', {
    [`Container-${size}`] : size
  })}>
  {children}
  </div>
)

export default Container;