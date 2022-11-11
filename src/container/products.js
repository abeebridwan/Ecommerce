import React from "react";
import { Product } from "../components";
import { getCategoryApiMethod } from '../graphql-data/sendRequest';
import { ReactComponent as Cart } from '../assets/Cart.svg';
import { DataContext } from "../context/contextData";
import { Link } from "react-router-dom";
import Attributes from "./attr";
import { ReactComponent as Filter } from "../assets/Filter.svg"
import FilterCom from "./filter";
export default class ProductsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      changeCategoryToValue: localStorage.getItem("name") || "all",
      attrShow: false,
      id: null,
      addToCart: false,
      category: JSON.parse(localStorage.getItem(`saveCategory`)) || null,
      filter: false,
      filterCategory: JSON.parse(localStorage.getItem(`saveFilterCategory`)) || null,
      NotfirstTime: JSON.parse(localStorage.getItem(`NotfirstTime`)) || false,
      savedAllCheckBoxes: JSON.parse(localStorage.getItem(`savedAllCheckBoxes`)) || []
    }
    this.attrStatusMethod = this.attrStatusMethod.bind(this)
    this.filterStatus = this.filterStatus.bind(this)
    this.handleClickedProduct = this.handleClickedProduct.bind(this)
    this.deleteLocalStorage = this.deleteLocalStorage.bind(this)
  }
  static contextType = DataContext;

  attrStatusMethod(attrShow, id) {
    this.setState({ attrShow: !attrShow, id })
  }

  filterStatus(filter) {
    this.setState({ filter: !filter })
  }

  async componentDidUpdate() {
    const { changeCategoryTo } = this.context;
    let { changeCategoryToValue } = this.state
    if (changeCategoryTo !== changeCategoryToValue) {
      try {
        this.deleteLocalStorage(changeCategoryToValue)
        const { category } = await getCategoryApiMethod(changeCategoryTo)
        changeCategoryToValue = changeCategoryTo;
        let filterCategory = category
        localStorage.setItem(`saveFilterCategory`, JSON.stringify(category))
        this.setState({ category, changeCategoryToValue, filterCategory, NotfirstTime: false, savedAllCheckBoxes: []})
      } catch (err) {
        console.log(err)
      }
    }
  }
  
  async componentDidMount() {
    try {
      if(JSON.parse(localStorage.getItem(`saveCategory`))){
        console.log("saveCategory")
      }else{
        const { changeCategoryTo } = this.context;
        const { category } = await getCategoryApiMethod(changeCategoryTo)
        let filterCategory = category
        localStorage.setItem(`saveFilterCategory`, JSON.stringify(category))
        this.setState({ category, filterCategory })
      }
    } catch (err) {
      console.log(err)
    }
  }

  deleteLocalStorage(changeCategoryToValue){
    localStorage.removeItem(`${changeCategoryToValue}FilterColorAttr`);
    localStorage.removeItem(`${changeCategoryToValue}FilterCheckAttr`);
    localStorage.removeItem(`${changeCategoryToValue}FilterSelectedAttr`);
    localStorage.removeItem(`saveFilterCategory`);
    localStorage.removeItem(`saveCategory`);
    localStorage.removeItem(`NotfirstTime`);
    localStorage.removeItem(`savedAllCheckBoxes`);
  }

  handleClickedProduct(values) {
    console.log(values)
    const { category, filterCategory, NotfirstTime, savedAllCheckBoxes } = this.state
    let cart = { ...category }
    let filCat = { ...filterCategory }
    let { products } = cart
    let orgProducts = filCat.products
    let savedProducts = []
    let newSavedAllCheckBoxes = JSON.parse(JSON.stringify(savedAllCheckBoxes)); 
    if (values[values.length - 1] === "Color") {
      let count = 1
      orgProducts.forEach((product) => {
        if (product.attributes.length > 0) {
          product.attributes.forEach((attribute) => {
            attribute.items.forEach((item) => {
              if (attribute.type === "swatch" && item.id === values[2]) {
                savedProducts.push(product)
              }
              if(values[0]=== product.id && item.value === "Yes"){
                console.log("added to newSavedAllCheckBoxes")
                if(count === 1){newSavedAllCheckBoxes.push(product); count += 1; console.log("I av added inside")}
              }
            })
          })
        }
      })
    }else if(values[values.length - 1] === "selectChange"){
      let count = 1
      orgProducts.forEach((product) => {
        if (product.attributes.length > 0) {
          product.attributes.forEach((attribute) => {
            attribute.items.forEach((item) => {
              if (attribute.id === values[1] && item.value === values[3]) {
                 savedProducts.push(product) 
              }
              if(values[0]=== product.id && item.value === "Yes"){
                console.log("added to newSavedAllCheckBoxes")
                if(count === 1){newSavedAllCheckBoxes.push(product); count += 1; console.log("I av added inside")}
              }
            })
          })
        }
      })
    }else{
      if(values[4]){
        orgProducts.forEach((product) => {
          if (product.attributes.length > 0) {
            product.attributes.forEach((attribute) => {
              attribute.items.forEach((item) => {
                if ((item.value === "Yes") && (attribute.id === values[1])) {
                  savedProducts.push(product)
                  newSavedAllCheckBoxes.push(product)
                }
              })
            })
          }
        })
      }else{
        products.forEach((product) => {
          if (product.attributes.length > 0) {
            product.attributes.forEach((attribute) => {
              attribute.items.forEach((item) => {
                if ((item.value === "Yes") && (attribute.id === values[1])) {
                    const index = products.indexOf(product);
                    if (index > -1) {
                      products.splice(index, 1);
                      savedProducts = JSON.parse(JSON.stringify(products)); 
                      let newProduct = JSON.parse(JSON.stringify(product)); 
                      for(let i =0; i < newSavedAllCheckBoxes.length; i++){
                        if(newProduct.id === newSavedAllCheckBoxes[i]["id"]){
                          let splicedValue  = newSavedAllCheckBoxes.splice(i, 1);
                          for(let i =0; i < newSavedAllCheckBoxes.length; i++){
                            if(newProduct.id === newSavedAllCheckBoxes[i]["id"]){
                              savedProducts.push(splicedValue[0])
                              break;
                            }else{ }
                          }
                          break;
                        }
                      }
                    }
                }
              })
            })
          }
        })
      } 
    }
    localStorage.setItem(`savedAllCheckBoxes`, JSON.stringify(newSavedAllCheckBoxes))
    this.setState({savedAllCheckBoxes: newSavedAllCheckBoxes})

    // check for first time and decide to mix 
    let newCategory
    console.log(category.products, savedProducts, "inside")
    !NotfirstTime ? newCategory = savedProducts:
    newCategory = [ ...category.products, ...savedProducts ]
    console.log(newCategory, "newCategory")

    //avoid redundant
    let ids = []
    newCategory.forEach((product)=>{
      ids.push(product.id)
    })
    let set = new Set(ids);
    let setIds = [...set]
    let finalProducts =[]
    orgProducts.forEach((product) => {
      if(setIds.includes(product.id)){
        finalProducts.push(product)
      }
    }) 

    //update
    products = finalProducts
    let finalCategory = { ...category, products }
    if(!NotfirstTime) this.setState({NotfirstTime: !NotfirstTime}, localStorage.setItem(`NotfirstTime`, JSON.stringify(!NotfirstTime))) //save in local upon reload and update up in the state
    console.log(finalCategory, "finalCategory")
    if(finalCategory.products.length === 0) {
      finalCategory = filterCategory;
      this.setState({NotfirstTime: !NotfirstTime}); 
      localStorage.setItem(`NotfirstTime`, JSON.stringify(!NotfirstTime))
    }
    localStorage.setItem(`saveCategory`, JSON.stringify(finalCategory))
    this.setState({ category: finalCategory })
    console.log(this.state.savedAllCheckBoxes, "checkboxes")
    }
  
  render() {
    const { category, filterCategory } = this.state;

    if (!category) {
      return null;
    }

    const { name, products } = category;
    const { addRemoveFromCart, currencyIndex, pickedProduct } = this.context;
    const { attrShow, id, filter } = this.state
    return (
      <Product>
        <Product.ProductFilter
          onClick={(e) => { this.filterStatus(filter) }}>
          <Filter /> <span>Filter by Attributes</span>
        </Product.ProductFilter>
        {filter ? <FilterCom filterMethod={this.filterStatus} filter={filter} category={filterCategory} handleClickedProduct={this.handleClickedProduct} /> : null}
        <Product.ProductHeader>
          {name}
        </Product.ProductHeader>
        <Product.ProductFrame>
          {products.map((item) => (
            <Product.ProductItem
              onClick={(e) => {
                pickedProduct(item.id, item.category);
                localStorage.setItem("name", item.category);
                this.deleteLocalStorage(name)
              }} key={item.id} >
              <Link to="/pdp">
                <span className="item" >
                  <Product.ProductImage src={item.gallery[0]} alt={item.name} inStock={item.inStock} />
                  {item.inStock ? null : <Product.ProductInStock inStock={item.inStock}>OUT OF STOCK</Product.ProductInStock>}
                  {item.inStock ? <Product.ProductCart className="cartBox" inStock={item.inStock} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                    if (item.attributes[0]) {
                      this.attrStatusMethod(attrShow, item.id)
                      return;
                    }
                    addRemoveFromCart(item.id)
                  }}>
                    <Cart id="cart" />
                  </Product.ProductCart> : null}
                </span>
                <Product.ProductName inStock={item.inStock}>
                  {item.name}
                </Product.ProductName>
                <Product.ProductPrice inStock={item.inStock}>
                  {item.prices[currencyIndex].currency.symbol}
                  {(Math.round((item.prices[currencyIndex].amount) * 100 + Number.EPSILON) / 100).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </Product.ProductPrice>
              </Link>
            </Product.ProductItem>
          ))}
        </Product.ProductFrame>
        {attrShow ? <Attributes id={id} attrShow={attrShow} attrMethod={this.attrStatusMethod} /> : null}
      </Product >
    )
  }
}