import React from 'react';
import PropTypes from 'prop-types';
import 'simplebar';

export default function SimpleBar({ children, scrollableNodeProps, ...options }) {
  return <div data-simplebar {...options}>
      <div className="simplebar-wrapper">
        <div className="simplebar-height-auto-observer-wrapper">
          <div className="simplebar-height-auto-observer" />
        </div>
        <div className="simplebar-mask">
          <div className="simplebar-offset">
            <div {...scrollableNodeProps} className={`simplebar-content${scrollableNodeProps && scrollableNodeProps.className ? ` ${scrollableNodeProps.className}` : ''}`}>
              <div className="simplebar-resize-wrapper">{children}</div>
            </div>
          </div>
        </div>
        <div className="simplebar-placeholder" />
      </div>
      <div className="simplebar-track simplebar-horizontal">
        <div className="simplebar-scrollbar" />
      </div>
      <div className="simplebar-track simplebar-vertical">
        <div className="simplebar-scrollbar" />
      </div>
    </div>;
}

SimpleBar.propTypes = {
  children: PropTypes.node
};
