(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactGM"] = factory(require("react"));
	else
		root["ReactGM"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _gridComponentJs = __webpack_require__(4);

	var _gridComponentJs2 = _interopRequireDefault(_gridComponentJs);

	var _paginationComponentJs = __webpack_require__(2);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	var _paginationTextComponentJs = __webpack_require__(3);

	var _paginationTextComponentJs2 = _interopRequireDefault(_paginationTextComponentJs);

	__webpack_require__(5);

	exports.Grid = _gridComponentJs2['default'];
	exports.Pagination = _paginationComponentJs2['default'];
	exports.PaginationText = _paginationTextComponentJs2['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Pagination = _react2["default"].createClass({
	    displayName: "Pagination",

	    propTypes: {
	        data: _react2["default"].PropTypes.shape({
	            count: _react2["default"].PropTypes.number.isRequired,
	            offset: _react2["default"].PropTypes.number.isRequired,
	            limit: _react2["default"].PropTypes.number.isRequired
	        }),
	        toPage: _react2["default"].PropTypes.func.isRequired
	    },
	    render: function render() {
	        var data = Object.assign({}, this.props.data);

	        data.index = data.offset / data.limit + 1;

	        var offset = 2,
	            pages = [],
	            all = Math.ceil(data.count / data.limit),
	            begin = Math.max(data.index - offset, 1),
	            end = Math.min(data.index + offset, all);

	        if (all > offset * 2 + 1) {
	            if (begin === 1) {
	                end += offset;
	            } else if (end === all) {
	                begin -= offset;
	            }
	        }

	        for (var i = begin; i <= end; i++) {
	            pages.push(i);
	        }

	        return _react2["default"].createElement(
	            "div",
	            { className: "gm-pagination" },
	            _react2["default"].createElement(
	                "ul",
	                { className: "pagination pagination-sm", onClick: this.onPage },
	                _react2["default"].createElement(
	                    "li",
	                    { className: data.index === 1 ? 'disabled' : '' },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": data.index - 1 },
	                        "上一页"
	                    )
	                ),
	                begin >= 2 ? _react2["default"].createElement(
	                    "li",
	                    null,
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": "1" },
	                        "1"
	                    )
	                ) : '',
	                begin >= 3 ? _react2["default"].createElement(
	                    "li",
	                    { className: "disabled" },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;" },
	                        "..."
	                    )
	                ) : '',
	                pages.map(function (page, i) {
	                    return _react2["default"].createElement(
	                        "li",
	                        { key: i, className: data.index === page ? 'active' : '' },
	                        _react2["default"].createElement(
	                            "a",
	                            {
	                                href: "javascript:;", "data-page": page },
	                            page
	                        )
	                    );
	                }),
	                end <= all - 2 ? _react2["default"].createElement(
	                    "li",
	                    { className: "disabled" },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;" },
	                        "..."
	                    )
	                ) : '',
	                end <= all - 1 ? _react2["default"].createElement(
	                    "li",
	                    null,
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": all },
	                        all
	                    )
	                ) : '',
	                _react2["default"].createElement(
	                    "li",
	                    { className: data.index === all ? 'disabled' : '' },
	                    _react2["default"].createElement(
	                        "a",
	                        { href: "javascript:;", "data-page": data.index + 1 },
	                        "下一页"
	                    )
	                )
	            )
	        );
	    },
	    onPage: function onPage(event) {
	        var page = ~ ~event.target.getAttribute('data-page'),
	            data = this.props.data,
	            count = Math.ceil(data.count / data.limit),
	            toPage = this.props.toPage;
	        if (!page || page == data.index || page < 1 || page > count) {
	            return;
	        }

	        toPage({
	            offset: (page - 1) * data.limit,
	            limit: data.limit
	        }, page);
	    }
	});

	exports["default"] = Pagination;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var PaginationText = _react2["default"].createClass({
	    displayName: "PaginationText",

	    propTypes: {
	        data: _react2["default"].PropTypes.shape({
	            count: _react2["default"].PropTypes.number.isRequired,
	            offset: _react2["default"].PropTypes.number.isRequired,
	            limit: _react2["default"].PropTypes.number.isRequired
	        })
	    },
	    render: function render() {
	        var data = this.props.data;

	        return _react2["default"].createElement(
	            "div",
	            { className: "gm-pagination-text" },
	            "显示第 ",
	            data.offset + 1,
	            " 到 ",
	            Math.min(data.count, data.offset + data.limit - 1),
	            " 行，一共 ",
	            data.count,
	            " 行记录"
	        );
	    }
	});

	exports["default"] = PaginationText;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _paginationComponentJs = __webpack_require__(2);

	var _paginationComponentJs2 = _interopRequireDefault(_paginationComponentJs);

	var _paginationTextComponentJs = __webpack_require__(3);

	var _paginationTextComponentJs2 = _interopRequireDefault(_paginationTextComponentJs);

	var GridHead = _react2['default'].createClass({
	    displayName: 'GridHead',

	    render: function render() {
	        var data = this.props.data;
	        return _react2['default'].createElement(
	            'thead',
	            null,
	            _react2['default'].createElement(
	                'tr',
	                null,
	                data.enableSelect ? _react2['default'].createElement(
	                    'th',
	                    { className: 'gm-grid-select' },
	                    _react2['default'].createElement('input', { type: 'checkbox', onClick: this.onSelect })
	                ) : null,
	                data.columns.map(function (col, i) {
	                    return _react2['default'].createElement(
	                        'th',
	                        { key: i },
	                        col.name
	                    );
	                }),
	                data.actions.length > 0 ? _react2['default'].createElement(
	                    'th',
	                    null,
	                    '操作'
	                ) : ''
	            )
	        );
	    },
	    onSelect: function onSelect(event) {
	        var onSelect = this.props.onSelect;
	        onSelect(event.target.checked);
	    }
	});

	var Grid = _react2['default'].createClass({
	    displayName: 'Grid',

	    processData: function processData(data) {
	        data = Object.assign({
	            enableSelect: false, // 和 batchs 配合用
	            enablePagination: false, // 和 pagination toPage 配合用
	            enablePaginationText: false,
	            loading: false,
	            actions: [],
	            batchs: [],
	            list: [],
	            toPage: function toPage() {}
	        }, data);
	        data.actions.forEach(function (action) {
	            action.isShow = action.isShow || function () {
	                return true;
	            };
	        });

	        data.list.forEach(function (elist) {
	            elist.___select = false;
	        });
	        return data;
	    },
	    getInitialState: function getInitialState() {
	        return {
	            data: this.processData(this.props.data)
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            data: this.processData(nextProps.data)
	        });
	    },
	    render: function render() {
	        var t = this;
	        var data = this.state.data;
	        var actions = data.actions;
	        var batchs = data.batchs;

	        var tableBody;
	        if (data.loading) {
	            tableBody = _react2['default'].createElement(
	                'tr',
	                null,
	                _react2['default'].createElement(
	                    'td',
	                    { colSpan: '99', className: 'text-center' },
	                    _react2['default'].createElement('i', { className: 'fa fa-spin fa-spinner fa-pulse' })
	                )
	            );
	        } else if (data.list.length === 0) {
	            tableBody = _react2['default'].createElement(
	                'tr',
	                null,
	                _react2['default'].createElement(
	                    'td',
	                    { colSpan: '99', className: 'text-center' },
	                    '无'
	                )
	            );
	        } else if (data.list.length > 0) {
	            tableBody = data.list.map(function (elist, index) {
	                var tds = data.columns.map(function (col, i) {
	                    // 转换成字符串，避免 true false 没显示
	                    if (col.render) {
	                        return _react2['default'].createElement(
	                            'td',
	                            { key: i },
	                            '' + col.render(elist[col.field], elist)
	                        );
	                    } else {
	                        return _react2['default'].createElement(
	                            'td',
	                            { key: i },
	                            '' + elist[col.field]
	                        );
	                    }
	                });

	                var buttons = actions.map(function (action, i) {
	                    var classes = 'btn btn-default btn-xs ' + action.className;
	                    if (action.isShow(elist, index) === false) {
	                        classes += ' hidden';
	                    }
	                    return _react2['default'].createElement(
	                        'button',
	                        { key: i, onClick: t.onActions.bind(t, elist, index, action),
	                            className: classes },
	                        action.text
	                    );
	                });

	                return _react2['default'].createElement(
	                    'tr',
	                    { key: index },
	                    data.enableSelect ? _react2['default'].createElement(
	                        'td',
	                        null,
	                        _react2['default'].createElement('input', { type: 'checkbox', checked: elist.___select, onClick: t.onSelect.bind(t, elist) })
	                    ) : null,
	                    tds,
	                    actions.length > 0 ? _react2['default'].createElement(
	                        'td',
	                        null,
	                        buttons
	                    ) : ''
	                );
	            });
	        }

	        var batchButtons = batchs.map(function (batch, i) {
	            var classes = 'btn btn-default btn-sm ' + batch.className;
	            return _react2['default'].createElement(
	                'button',
	                { key: i, onClick: t.onBatchs.bind(t, batch), className: classes },
	                batch.text
	            );
	        });

	        var pagination = _react2['default'].createElement(
	            'div',
	            null,
	            data.enablePagination ? _react2['default'].createElement(
	                'div',
	                { className: 'pull-right' },
	                _react2['default'].createElement(_paginationComponentJs2['default'], { data: data.pagination, toPage: t.onToPage })
	            ) : '',
	            data.enablePaginationText ? _react2['default'].createElement(
	                'div',
	                { className: 'pull-right' },
	                _react2['default'].createElement(_paginationTextComponentJs2['default'], { data: data.pagination })
	            ) : ''
	        );

	        return _react2['default'].createElement(
	            'div',
	            { className: 'gm-grid' },
	            _react2['default'].createElement(
	                'table',
	                { className: 'table table-striped table-hover table-condensed table-bordered' },
	                _react2['default'].createElement(GridHead, { data: data, onSelect: t.onSelectAll }),
	                _react2['default'].createElement(
	                    'tbody',
	                    null,
	                    tableBody
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'gm-grid-foot clearfix' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'pull-left gm-grid-batch' },
	                    data.enableSelect ? batchButtons : ''
	                ),
	                data.pagination ? pagination : ''
	            )
	        );
	    },
	    onActions: function onActions(elist, index, action) {
	        action.click(elist, index);
	    },
	    onBatchs: function onBatchs(batch) {
	        var lists = this.state.data.list.filter(function (elist) {
	            return elist.___select;
	        });
	        if (lists.length > 0) {
	            batch.click(lists);
	        }
	    },
	    onSelect: function onSelect(elist, event) {
	        elist.___select = event.target.checked;
	        this.setState({
	            list: this.state.data.list
	        });
	    },
	    onSelectAll: function onSelectAll(bool) {
	        this.setState({
	            list: this.state.data.list.map(function (elist) {
	                elist.___select = bool;
	            })
	        });
	    },
	    onToPage: function onToPage(page, index) {
	        this.state.data.toPage(page, index);
	    }
	});

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;