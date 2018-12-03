import React, { Component } from "react";

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from 'material-ui-search-bar'
//import withImportantStyle from 'react-with-important-style';

//var MySpan = withImportantStyle('SearchBar');

class MenuSearch extends Component {
    render() {
        return (
            <div className="header-search float-right">
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <SearchBar 
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        inputStyle={{color: '#CCCCCC'}}
                        placeholder='Search'
                        style={{
                            margin: 0,
                            maxWidth: 800,
                            backgroundColor: "#2d3436"
                            
                        }}
                        />
                </MuiThemeProvider>
                
            </div>
        );
    }
}


export default MenuSearch;