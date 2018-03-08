import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Left extends React.Component {
    render() {
        const {
            style,
            className,
            width,
            children,
            ...rest
        } = this.props;

        return (
            <div {...rest} style={Object.assign({}, style, {
                width
            })} className={classNames("gm-framework-left-default", className)}>
                <div style={{width}} className="gm-framework-left-default-inner">
                    {children}
                </div>
            </div>
        );
    }
}

Left.propTypes = {
    width: PropTypes.string
};

Left.defaultProps = {
    width: '170px'
};

export default Left;