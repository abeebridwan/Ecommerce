import React from 'react'
import { DataContext } from './context/contextData';
import { getAllCategoriesNames } from './graphql-data/sendRequest';
import Header from './pages/Header';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: "",
      error: null
    }
  }

  async componentDidMount() {
    try {
      const { categories } = await getAllCategoriesNames();

      this.setState({ categories })
    } catch (err) {
      this.setState({ error: err.message || err.toString() });
      console.log(err)
    }
  }

  render() {
    const { categories } = this.state;

    if (!categories) {
      return
    }

    return (
      <DataContext.Provider value={{ categories }}>
        <Header />
      </DataContext.Provider>
    )
  }
}




export default App;
