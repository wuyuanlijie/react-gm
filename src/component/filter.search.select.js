import React, {PropTypes} from 'react';
import SearchSelect from './search.select';

class FilterSearchSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
        this.handleSearch = ::this.handleSearch;
    }

    handleSearch(query) {
        this.setState({
            query
        });
    }

    render() {
        const {list, isGroupList, selected, onSelect, onFilter, delay, listMaxHeight, placeholder} = this.props;
        const {query} = this.state;
        let filterList = list;
        if (query) {
            filterList = onFilter(filterList, query);
        }
        return (
            <SearchSelect
                list={filterList}
                isGroupList={isGroupList}
                selected={selected}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                delay={delay}
                listMaxHeight={listMaxHeight}
                multiple={false}
                placeholder={placeholder}
            />
        );
    }
}
FilterSearchSelect.propTypes = {
    list: PropTypes.array.isRequired,
    isGroupList: PropTypes.bool,
    selected: PropTypes.any,
    onSelect: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    delay: PropTypes.number,
    listMaxHeight: PropTypes.string,
    placeholder: PropTypes.string
};

export default FilterSearchSelect;