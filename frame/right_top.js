import React from 'react';
import PropTypes from 'prop-types';
import {Flex} from '../src/index';

class RightTop extends React.Component {
    render() {
        const {
            breadcrumb,
            info,
            leftWidth
        } = this.props;

        return (
            <div className="gm-framework-right-top-default">
                <Flex
                    style={{left: leftWidth}}
                    className="gm-framework-right-top-default-inner"
                    alignCenter
                >
                    <Flex flex className="gm-framework-breadcrumb">{breadcrumb}</Flex>
                    <div className="gm-framework-info">{info}</div>
                </Flex>
            </div>
        );
    }
}

RightTop.propTypes = {
    breadcrumb: PropTypes.element,
    info: PropTypes.element,
    leftWidth: PropTypes.string
};

export default RightTop;