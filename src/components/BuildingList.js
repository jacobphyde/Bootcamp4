import React from 'react';

class BuildingList extends React.Component {
	
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, selectedUpdate, filter } = this.props;

		const buildingList = data
			.filter(directory => {return directory.name.toLowerCase().includes(filter.toLowerCase())})
			.map(directory => {
			return (
				<tr key={directory.id} onClick={() => selectedUpdate(directory.id)}>
					<td> {directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}

export default BuildingList;
