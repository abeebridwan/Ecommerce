import React from 'react'
import { DataContext } from './context/contextData';
import { getCategoryApiMethod, getAllCategoriesNames } from './graphql-data/sendRequest';
import { Plp } from './pages';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: "",
      categories: "",
      error: null
    }
  }

  async componentDidMount() {
    try {
      const { category } = await getCategoryApiMethod('clothes');
      const { categories } = await getAllCategoriesNames();
      console.log({ category });
      console.log({ categories });
      this.setState({ category, categories })
    } catch (err) {
      this.setState({ error: err.message || err.toString() });
      console.log(err)
    }
  }

  render() {
    const { category, categories } = this.state;


    if (!category) {
      return
    }

    let displayName = category['name']

    return (
      <DataContext.Provider value={{ categories }}>
        <Plp />
      </DataContext.Provider>
    )
  }
}




export default App;
