import React, { Component } from 'react';
import './SearchDropdown.css';

export default class SearchDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        }
    };

    setKeyword(keyword) {
        if (keyword) {
            const {dropdownList} = this.props;
            const filtered = dropdownList.filter(element => {
                return element.name.toLowerCase().indexOf(keyword.toLowerCase()) === 0;
            });
            if (filtered) {
                this.setState({filtered: filtered});
            }
        } else {
            this.setState({filtered: []});
        }
    }

    render() {
        const { width } = this.props;
        const { filtered } = this.state;
        const defaultWidth = width ? width : '240';
        return (
            <div>
                <input autoComplete='off' type='text' style={{width: (defaultWidth - 6) + 'px'}} className='inputBox'
                       placeholder='Search here...'
                       onChange={(e) => this.setKeyword(e.target.value)}/>
                <ul className='searchDropdownList' style={{width: defaultWidth + 'px'}}>
                    {filtered.map((data, idx) => (
                        <li key={idx}>
                            <img rel='noopener' alt='No Logo' src={data.logoUrl}/>
                            <span>{data.name}</span>
                            <span>
                                <a href={data.domain} rel='noopener noreferrer' target='_blank'>{data.domain}</a>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
