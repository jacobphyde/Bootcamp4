import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from  './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value})
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding: id})
  }

  removeBuilding(id) {
    this.setState({data: this.state.data.filter(directory => {
      return directory.id !== id})
    })
  }

  addBuilding(code, name, address) {
    const list = this.state.data
    list.push({id: (list[list.length-1].id + 1), code: code, name: name, address: address})
    this.setState({data: list})
  }
  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    filter={this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
               data={this.state.data}
               id={this.state.selectedBuilding}
               removeBuilding={this.removeBuilding.bind(this)}
              />
              <i>Add a Building</i>
              <AddBuilding addBuilding={this.addBuilding.bind(this)}/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
