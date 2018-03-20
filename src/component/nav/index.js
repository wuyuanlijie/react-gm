import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flex from '../flex';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        let hoverItem = {};
        let clickItems = [];
        const {data, selected} = props;
        _.each(data, one => {
            _.each(one.sub, two => {
                if (selected.includes(two.link)) {
                    hoverItem = two;
                    clickItems.push(one);
                }
            });
        });
        this.state = {
            clickItems,
            hoverItem
        };
    }

    handleOne = (one, e) => {
        e.preventDefault();
        this.setState({
            clickItems: _.xor(this.state.clickItems, [one]),
            hoverItem: one.sub[0]
        });
    };

    handleTwoOver = (two) => {
        this.setState({
            hoverItem: two
        });
    };

    handleMouseLeave = () => {
        const {selected, data} = this.props;
        console.log(selected);

        // 不存在的链接则关掉
        let isExist = false;
        _.each(data, one => {
            _.each(one.sub, two => {
                _.each(two.sub, there => {
                    if (selected === there.link) {
                        isExist = true;
                    }
                });
            });
        });

        if (!isExist) {
            this.setState({
                hoverItem: {}
            });
        }
    };

    render() {
        const {
            onSelect,
            selected,
            data,
            className,
            logo, // eslint-disable-line
            widths,
            ...rest
        } = this.props;

        const {clickItems, hoverItem} = this.state;

        return (
            <Flex
                {...rest}
                className={classNames("gm-nav", className)}
                onMouseLeave={this.handleMouseLeave}
            >
                <div>
                    <Flex alignCenter justifyCenter className="gm-nav-logo">
                        {logo}
                    </Flex>
                    <div className="gm-nav-one">
                        {_.map(data, (one, oneI) => (
                            <div key={oneI + one.link} className={classNames({
                                'active': clickItems.includes(one)
                            })} style={{width: widths[0]}}>
                                <a
                                    href={one.link}
                                    onClick={this.handleOne.bind(this, one)}
                                >{one.name}</a>

                                <div className="gm-nav-two">
                                    {_.map(one.sub, (two, twoI) => (
                                        <a
                                            key={twoI + two.link}
                                            className={classNames({
                                                'active': hoverItem.link === two.link
                                            })}
                                            href={two.link}
                                            onClick={e => e.preventDefault()}
                                            onMouseOver={this.handleTwoOver.bind(this, two)}
                                        >{two.name}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {hoverItem.sub && (
                    <Flex column flex className="gm-nav-there" style={{
                        width: widths[1]
                    }}>
                        {_.map(hoverItem.sub, (v, i) => (
                            <a
                                href={v.link}
                                key={i + v.link}
                                className={classNames({
                                    'active': selected.includes(v.link)
                                })}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSelect(v);
                                }}
                            >{v.name}</a>
                        ))}
                    </Flex>
                )}
            </Flex>
        );
    }
}

Nav.propTypes = {
    logo: PropTypes.element,
    // 三级菜单 [{link, name, sub: [{link, name, sub: [{link, name}]}]}]
    data: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    widths: PropTypes.array.isRequired // ["120px", "150px"]
};

export default Nav;
