import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import selectBook from '../actions/index';

class BookList extends Component {
    renderList() {
        const { books, selectBook } = this.props;
        return books.map((book) => {
            return (
                <li
                    key={book.title}
                    className="list-group-item booklist"
                    onClick={() => selectBook(book)}
                >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    return {
        books: state.books,
    };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({ selectBook }, dispatch);
}

// Promte BookList from component to a containers
// it needs to know about this new dispatch method, selectBook
// Make it available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
