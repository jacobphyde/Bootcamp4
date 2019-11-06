import React from 'react';

class Search extends React.Component {
	filterUpdate(value) {
		//Here you will need to update the value of the filter with the value from the textbox
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		const {filterUpdate} = this.props;

		return (
			<form>
				<input 
				type="text" 
				ref = "searchInput" 
				placeholder="Type to Filter" 
				onChange={() => filterUpdate(this.refs.searchInput.value)} 
				/>
			</form>
		);
	}
}
export default Search;
