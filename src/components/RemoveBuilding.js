import React from 'react'

class RemoveBuilding extends React.Component{
    render(){
        const {removeBuilding, building} = this.props;
        
        return(
            <div>
                <button onClick={() => removeBuilding(building)}>Remove Building</button>
            </div>
        );
    }
}

export default RemoveBuilding;