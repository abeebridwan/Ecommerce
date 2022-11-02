import React from "react";
import { Filter } from "../components";
import { ReactComponent as FilterIcon } from "../assets/Filter.svg"

export default class FilterCom extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      checked: this.initialState()[0],
      initAttrIds:  this.initialState()[1], 
      selectedValues: {},  
      attributes: {},
      firstInit: this.initialState()[2]
    }
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.initialState = this.initialState.bind(this);
    this.matchAttr = this.matchAttr.bind(this);
  }

  initialState(){
    const { products } = this.props.category;
    let state = []
    let attr = []
    products.map((product)=>(
      product.attributes.map((item)=>{
        let check = (ele) => ele.value === "Yes";
        let checkForYesOrNO = item.items.some(check)
        if(checkForYesOrNO){state.push(false);  attr.push(item.id)}
        return item
      })
    ))
    return [state, attr, true]
  }

  matchAttr(productId, attrId) {
    const { attributes } = this.state
    if(Object.keys(attributes).length === 0)return null
    if(attributes[productId]){
      return attributes[productId][attrId]
    }else{
      return null
    } 
  }

  handleColor(productId, attrId, itemId, categoryName){
    const { attributes, firstInit } = this.state;
    const product= {}
    product[attrId] = itemId
    attributes[productId] = product
    if(window.location.href === window.location.origin + "/" || firstInit){
      /* first time when url is still same as the origin or when the filter is closed and reopened */
      let url = new URL(window.location.origin);
      url.searchParams.set("ctg", categoryName);
      url.searchParams.set(productId, itemId);
      this.setState({firstInit: !firstInit})
      window.history.pushState({ path: url.href }, '', url.href);
    }else{
      let url = new URL(window.location.href);
      url.searchParams.set(productId, itemId);
      window.history.pushState({ path: url.href }, '', url.href);
    }
    localStorage.setItem(`${categoryName}FilterColorAttr`, JSON.stringify(attributes));
    this.setState({ attributes: { ...attributes } })
  }
  
  handleChange(e, idValues){
    console.log(e.target.value, "targetValue")
    console.log(idValues, "idValues")
    const { firstInit } = this.state;
    const { selectedValues } = this.state;
    if(selectedValues[idValues[0]]){
        selectedValues[idValues[0]][idValues[1]] = e.target.value
     }else{
      let attribute = {}
      attribute[idValues[1]] = e.target.value
      selectedValues[idValues[0]] = attribute
    }
    let value = idValues[0] + "%" + idValues[1]
    if(window.location.href === window.location.origin + "/" || firstInit){
      /* first time when url is still same as the origin or when the filter is closed and reopened */
      let url = new URL(window.location.origin);
      url.searchParams.set("ctg", idValues[2]);
      url.searchParams.set( value, e.target.value);
      this.setState({firstInit: !firstInit})
      window.history.pushState({ path: url.href }, '', url.href);
    }else{
      let url = new URL(window.location.href);
      url.searchParams.set( value, e.target.value);
      window.history.pushState({ path: url.href }, '', url.href);
    }
    localStorage.setItem(`${idValues[2]}FilterSelectedAttr`, JSON.stringify(selectedValues));
    this.setState({ selectedValues: { ...selectedValues } })
    console.log(selectedValues)
  }

  handleCheck(e, idValues){
    const { firstInit } = this.state;
    let position = e.currentTarget.dataset.index
    console.log(position,typeof(position))
    const updatedCheckedState = this.state.checked.map((item, index) =>
    index === Number(position) ? !item : item
    );
    idValues.push(updatedCheckedState[position])
    console.log(idValues)
    console.log(firstInit)

    if(window.location.href === window.location.origin + "/" || firstInit){
      /* first time when url is still same as the origin or when the filter is closed and reopened */
      let url = new URL(window.location.origin);
      url.searchParams.set("ctg", idValues[2]);
      url.searchParams.set(`check${idValues[3]}`, idValues[4])
      this.setState({firstInit: !firstInit})
      window.history.pushState({ path: url.href }, '', url.href);
    }else{
      let url = new URL(window.location.href);
      url.searchParams.set(`check${idValues[3]}`, idValues[4])
      window.history.pushState({ path: url.href }, '', url.href);
    }
    localStorage.setItem(`${idValues[2]}FilterCheckAttr`, JSON.stringify(updatedCheckedState));
    this.setState({checked: updatedCheckedState})
  }

  render(){
    const { name, products } = this.props.category;
    const Methods = {categoryName: name, handleCheck: this.handleCheck, handleChange: this.handleChange, 
      handleColor: this.handleColor, matchAttr: this.matchAttr}
    return (
      <Filter onClick = {(e) => { this.props.filterMethod(this.props.filter) }}>
        <Filter.FilterFrame>
          <Filter.FilterSidebar
          onClick={(e)=>{e.stopPropagation();}}>
            <Filter.FilterTopBar>
              <FilterIcon /> <span>Filter By Attributes</span> 
            </Filter.FilterTopBar>
            <Filter.FilterContent>
              {products.map((item)=>(
                    item.attributes.map((attr, index)=>(
                      <Filter.FilterItem key={attr.id}>
                        <Filter.FilterAttriText>{attr.name}:</Filter.FilterAttriText>
                        {
                        this.state.initAttrIds.includes(attr.id)?
                        AttributesTemplate(item.id, attr, Methods, this.state, index= this.state.initAttrIds.indexOf(attr.id)):
                        AttributesTemplate(item.id, attr, Methods, this.state)}
                      </Filter.FilterItem>
                    ))
              ))}
            </Filter.FilterContent>
          </Filter.FilterSidebar>
          <Filter.FilterCancel>&#10005;</Filter.FilterCancel>
        </Filter.FilterFrame>
      </Filter>
   )
  }
}

const AttributesTemplate =(productId, attr, Methods, state, index)=>{
  const {handleCheck, handleChange, handleColor, matchAttr, categoryName} = Methods
  let check = (item) => item.value === "Yes";
  let checkForYesOrNO = attr.items.some(check)
  let temp
  switch (attr.type) {
    case "swatch":
      temp = <Filter.FilterAttributes>
        {attr.items.map((item)=> (
          <Filter.FilterColorBox key={item.id} displayValue={item.value} selected={matchAttr(productId, attr.id) === item.id }
          onClick={()=>{
            console.log(productId, attr.id, item.id)
            handleColor(productId, attr.id, item.id, categoryName)
          }}
          />
        ))}
      </Filter.FilterAttributes> 
      break;
    default:
      if(checkForYesOrNO){
        let idValues = [productId, attr.id, categoryName, index]
        temp = <Filter.FilterCheckbox data-index={index} checked={state.checked[index]} onChange={(e)=>{handleCheck(e, idValues)}} type="checkbox" id={attr.id} name={attr.name} value={attr.items[attr.items.length - 1]['value']}/>
      }else{
        let idValues = [productId, attr.id, categoryName]
        temp = <Filter.FilterSelect name={attr.name} id={attr.id} onChange={(e) => {handleChange(e, idValues)}}>
            {attr.items.map((item)=>(
              <Filter.FilterOption key={item.id} value={item.value}>{item.displayValue}</Filter.FilterOption>
            ))}
        </Filter.FilterSelect>
      }    
    }
   return temp 
}