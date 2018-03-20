import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../flex';
import Collapse from '../collapse';
import _ from 'lodash';
import classNames from 'classnames';

class QuickPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            in: props.in
        };
    }

    handleCollapse() {
        this.setState({
            in: !this.state.in
        });
    }

    render() {
        const {
            title,
            collapse,
            right,
            'in': isIn, // eslint-disable-line
            className,
            children,
            ...rest
        } = this.props;

        return (
            <div {...rest} className={classNames("gm-quick gm-quick-panel", className)}>
                <Flex flex alignCenter justifyBetween className="gm-quick-panel-title">
                    <Flex alignEnd className="gm-padding-tb-10">
                        {title}
                        {collapse ? (
                            <a onClick={::this.handleCollapse} style={{fontSize: '12px', marginLeft: '5px'}}>
                                {this.state.in ? "收拢明细" : "展现明细"}&nbsp;
                                <i className={classNames('xfont', {
                                    'xfont-down': !this.state.in,
                                    'xfont-up': this.state.in
                                })}/>
                            </a>
                        ) : undefined}
                    </Flex>
                    <Flex flex/>
                    {right}
                </Flex>
                <Collapse in={this.state.in}>
                    <div>
                        {children}
                    </div>
                </Collapse>
            </div>
        );
    }
}

QuickPanel.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element]),
    collapse: PropTypes.bool,
    right: PropTypes.object,
    in: PropTypes.bool
};

QuickPanel.defaultProps = {
    in: true
};

class QuickFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.handleCollape = ::this.handleCollape;
    }

    handleCollape() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const {collapseRender, children} = this.props,
            {show} = this.state;

        return (
            <div
                className={classNames("gm-quick gm-quick-filter gm-padding-15", this.props.className, {
                    'gm-padding-bottom-0': collapseRender
                })}>
                {collapseRender ? <div>
                    {show ? null : children}

                    <Collapse in={show}>
                        {show ? collapseRender() : null}
                    </Collapse>

                    <Flex justifyCenter className="gm-padding-5">
                        <a href="javascript:;" className="gm-quick-filter-toggle" onClick={this.handleCollape}>
                            {show ? '收拢筛选条件' : '展开筛选条件'}&nbsp;
                            <i className={classNames('xfont', {
                                'xfont-down': !show,
                                'xfont-up': show
                            })}/>
                        </a>
                    </Flex>
                </div> : children}
            </div>
        );
    }
}

QuickFilter.propTypes = {
    collapseRender: PropTypes.func
};


class QuickTabItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

class QuickTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active || 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('active' in nextProps) {
            this.setState({active: nextProps.active});
        }
    }

    handleTab(i) {
        const {onChange} = this.props;
        if ('active' in this.props) {
            onChange(i);
        } else {
            this.setState({
                active: i
            });
        }
    }

    render() {
        const {
            tabs, children, active, onChange, isStatic, // eslint-disable-line
            justified,
            ...rest
        } = this.props;

        const activeTab = this.state.active;

        const tabPanels = _.map(children, (child, i) => (
            <div key={i} className={activeTab !== i ? 'hidden' : ''}>{child}</div>
        ));

        return (
            <div {...rest} className={classNames("gm-quick gm-quick-tabs", this.props.className)}>
                {this.props.right ? React.cloneElement(this.props.right, {className: this.props.right.props.className + ' pull-right'}) : null}
                <ul className={classNames("nav nav-tabs gm-back-bg", {
                    'nav-justified': justified
                })}>
                    {_.map(tabs, (tab, i) => (
                        <li key={i} className={classNames("gm-quick-tab", {
                            active: i === activeTab
                        })}>
                            <a href="javascript:;" onClick={this.handleTab.bind(this, i)}>{tab}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    {isStatic ? tabPanels : tabPanels[activeTab]}
                </div>
            </div>
        );
    }
}

// 如果有active，则一定有handleChange
QuickTab.propTypes = {
    tabs: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    active: PropTypes.number,
    right: PropTypes.element,
    isStatic: PropTypes.bool,
    justified: PropTypes.bool,
    children: (props, propName, componentName) => {
        if (props.tabs && props.children && (props.tabs.length !== props.children.length)) {
            return new Error(
                'Invalid prop `children` supplied to' +
                ' `' + componentName +
                '`, prop `tabs` length is not match prop `children` length'
            );
        }
    }
};

QuickTab.defaultProps = {
    isStatic: false,
    justified: false
};

Object.assign(QuickTab, {
    QuickTabItem
});

class QuickDesc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {left, right, leftFlex, rightFlex, children} = this.props;

        return (
            <div className={classNames("gm-quick gm-quick-desc", this.props.className)}>
                <Flex>
                    <Flex flex={leftFlex || 2} alignCenter className="gm-quick-desc-title">
                        {left}
                    </Flex>
                    <Flex flex={rightFlex || 10} alignCenter className="gm-padding-left-5">
                        <div className="gm-border-left gm-padding-left-15" style={{height: '40px'}}/>
                        {right ? React.cloneElement(right, {
                            className: "gm-quick-desc-right-box gm-padding-tb-10 " + (right.props.className || '')
                        }) : null}
                    </Flex>
                </Flex>
                {children && (
                    <Flex className="gm-border-top gm-padding-tb-15">
                        {children}
                    </Flex>
                )}
            </div>
        );
    }
}

export {
    QuickPanel,
    QuickFilter,
    QuickTab,
    QuickDesc
};
