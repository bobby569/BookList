import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {
    render() {
        return (
            <div className="containers">
                <BookList />
                <BookDetail />
            </div>
        );
    }
}
