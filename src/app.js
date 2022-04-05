import React from 'react'
import { DataContext } from './context/contextData';
import { getCategoryApiMethod } from './graphql-data/sendRequest';
import { Plp } from './pages';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: null,
      error: null
    }
  }

  async componentDidMount() {
    try {
      const { category } = await getCategoryApiMethod('clothes');
      this.setState({ category })
    } catch (err) {
      this.setState({ error: err.message || err.toString() });
      console.log(err)
    }
  }

  render() {
    const { category } = this.state;

    if (!category) {
      return
    }

    let displayName = category['name']

    return (
      <DataContext.Provider value={{ app: 'honey' }}>
        <Plp />        
      </DataContext.Provider>     
    )
  }
}




export default App;
