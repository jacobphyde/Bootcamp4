import React from 'react';

class AddBuilding extends React.Component {
	render() {
		const {addBuilding} = this.props
		
		return (
			<form className="add" onSubmit={event => {
				event.preventDefault()
			 	this.refs.name.value = ''
			 	this.refs.code.value = ''
			 	this.refs.address.value = ''
			 }}>
				<input ref='name' placeholder='Name' style={{ width:"100%" }}></input><br/>
				<input ref='code' placeholder='Code' style={{ width:"100%" }}></input><br/>
				<input ref='address' placeholder='Address' style={{ width:"100%" }}></input><br/>
				<button onClick={() => addBuilding(this.refs.name.value, this.refs.code.value, this.refs.address.value)}>Add Building</button>
			</form>
		);
	}
}
export default AddBuilding;