import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Popover} from '../src/index';
import _ from 'lodash';

class Info extends React.Component {
    render() {
        const {text, settings, onMenuBtnClick} = this.props;

        return (
            <div className="gm-framework-info-default">
                <Flex className="gm-framework-info-default-inner">
                    <Flex
                        alignCenter
                        className="gm-framework-info-default-mobile-nav"
                        onClick={onMenuBtnClick}
                    >
                        <i className="glyphicon glyphicon-menu-hamburger gm-padding-lr-10 gm-cursor"/>
                    </Flex>
                    <Flex flex/>
                    <Flex>{text}</Flex>
                    {settings && (
                        <Popover
                            showArrow
                            type="hover"
                            right
                            offset={10}
                            className="gm-framework-info-default-setting-popover"
                            popup={(
                                <div className="list-group gm-margin-bottom-0">
                                    {_.map(settings, (v, i) => (
                                        <a key={i + '_' + v.text} href="javascript:;"
                                           className="list-group-item text-center gm-padding-10 gm-margin-0 gm-border-top-0"
                                           onClick={v.onClick}
                                        >{v.text}</a>
                                    ))}
                                </div>
                            )}>
                            <div className="gm-framework-info-default-settings gm-cursor">
                                <i className="glyphicon glyphicon-cog gm-padding-lr-10"/>
                            </div>
                        </Popover>
                    )}
                </Flex>
            </div>
        );
    }
}

Info.propTypes = {
    text: PropTypes.string,
    settings: PropTypes.array, // [{text, onClick}]
    onMenuBtnClick: PropTypes.func
};

export default Info;