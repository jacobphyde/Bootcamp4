import React from 'react';
import RemoveBuilding from './RemoveBuilding'

class ViewBuilding extends React.Component {
	render() {
		const {data, id} = this.props
		const building = data.filter(directory => {return directory.id === id})[0]
		
		let message = ' '
		//when building is selected display building info
		if (building) {
			message =
			<div>
				<p>
					Code: {building.code}
					<br/>
					Name: {building.name}
					<br/>
					{building.address ? 'Address: ' + building.address : ''}
					{building.address ? <br/> : ''}
					{building.coordinates ? 'Coordinates: ' + building.coordinates.latitude + ', ' + building.coordinates.longitude : ''}
				</p>
				<RemoveBuilding removeBuilding={this.props.removeBuilding} id={id}/>
			</div>
		} 
		//if not diplsay message
		else {
			message = <i>Click on a name to view more information</i>
		}
		//return whatever message is 
		return (
			<div>
					{message}
			</div>
		);
	}
}
export default ViewBuilding;
