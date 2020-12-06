# Install the react-modern-search-dropdown component
`````
npm i react-modern-search-dropdown
`````
# Usage
```
import React, { Component } from 'react'
 
import SearchDropdown from 'react-modern-search-dropdown';

const MENU = [
    {
        name: 'Amazon',
        logoUrl: 'https://logo.clearbit.com/amazon.com/',
        domain: 'https://www.amazon.com'
    },
    {
        name: 'Apple',
        logoUrl: 'https://logo.clearbit.com/apple.com/',
        domain: 'https://www.apple.com'
    },
    {
        name: 'Google',
        logoUrl: 'https://logo.clearbit.com/google.com/',
        domain: 'https://www.google.com'
    },
    {
        name: 'Netflix',
        logoUrl: 'https://logo.clearbit.com/netflix.com/',
        domain: 'https://www.netflix.com'
    },
    {
        name: 'Facebook',
        logoUrl: 'https://logo.clearbit.com/facebook.com/',
        domain: 'https://www.facebook.com'
    }
];

class SearchExample extends Component {
  render () {
    return (
        <SearchDropdown dropdownList={MENU} width={400} />
    )
  }
}
```

# Props

| Prop  | Usage |
| ------------- | ------------- |
| dropdownList  | It takes an array of contents(name, logoURL, domain) and on the name the search query is applied.|
| width  | It's a numerical(px) value which indicates decides the horizontal space taken by the search bar.|


# License
MIT

# Keywords
none
