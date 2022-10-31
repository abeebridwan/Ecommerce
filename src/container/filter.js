import React from "react";
import { Filter } from "../components";
import { ReactComponent as FilterIcon } from "../assets/Filter.svg"

export default class FilterCom extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      checked: this.initialState()[0],
      attrId:  this.initialState()[1], 
      selectValue: "",  
      attributes: {}
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
    return [state, attr]
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

  handleColor(productId, attrId, itemId){
    const { attributes } = this.state;
    const product= {}
    product[attrId] = itemId
    attributes[productId] = product
    this.setState({ attributes: { ...attributes } })
    console.log(attributes)
  }
  
  handleChange(e){
    console.log(e.target.value)
    this.setState({selectValue: e.target.value });
  }

  handleCheck(e, idValues){
    let position = e.currentTarget.dataset.index
    console.log(position,typeof(position))
    const updatedCheckedState = this.state.checked.map((item, index) =>
    index === Number(position) ? !item : item
    );
    console.log(updatedCheckedState)
    idValues.push(updatedCheckedState[position])
    console.log({idValues})
    this.setState({checked: updatedCheckedState})
  }

  render(){
    const { products } = this.props.category;
    const Methods = {handleCheck: this.handleCheck, handleChange: this.handleChange, 
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
                        this.state.attrId.includes(attr.id)?
                        AttributesTemplate(item.id, attr, Methods, this.state, index= this.state.attrId.indexOf(attr.id)):
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
  const {handleCheck, handleChange, handleColor, matchAttr} = Methods
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
            handleColor(productId, attr.id, item.id)
          }}
          />
        ))}
      </Filter.FilterAttributes> 
      break;
    default:
      if(checkForYesOrNO){
        let idValues = [productId, attr.id]
        temp = <Filter.FilterCheckbox data-index={index} checked={state.checked[index]} onChange={(e)=>{handleCheck(e, idValues)}} type="checkbox" id={attr.id} name={attr.name} value={attr.items[attr.items.length - 1]['value']}/>
      }else{
        temp = <Filter.FilterSelect name={attr.name} id={attr.id} value={state.selectValue} onChange={handleChange}>
            {attr.items.map((item)=>(
              <Filter.FilterOption key={item.id} value={item.value}>{item.displayValue}</Filter.FilterOption>
            ))}
        </Filter.FilterSelect>
      }    
    }
   return temp 
}