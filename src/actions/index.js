export const BOOK_SELECTED = 'BOOK_SELECTED';

export default function selectBook(book) {
	// An ActionCreator
	// needs to return an actions
	// an object with a type property
	return {
		type: BOOK_SELECTED,
		payload: book
	};
}
