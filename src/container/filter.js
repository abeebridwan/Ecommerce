import React from "react";
import { Filter } from "../components";
import { ReactComponent as FilterIcon } from "../assets/Filter.svg"

export default class FilterCom extends React.PureComponent {

  render(){
    const { name, products } = this.props.category;

    return (
      <Filter onClick = {(e) => { this.props.filterMethod(this.props.filter) }}>
        <Filter.FilterFrame>
          <Filter.FilterSidebar
          onClick={(e)=>{e.preventDefault();e.stopPropagation();}}>
            <Filter.FilterTopBar>
              <FilterIcon /> <span>Filter By Attributes</span> 
            </Filter.FilterTopBar>
            <Filter.FilterContent>
              {products.map((item)=>(
                    item.attributes.map((attr)=>(
                      <Filter.FilterItem key={attr.id}>
                        <Filter.FilterAttriText>{attr.name}:</Filter.FilterAttriText>
                        {template(attr)}
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

const template =(attr)=>{
  let temp
  switch (attr.id) {
    case "Color":
      temp = <Filter.FilterAttributes>
        {attr.items.map((item)=> (
          <Filter.FilterColorBox key={item.id} displayValue={item.value}/>
        ))}
      </Filter.FilterAttributes> 
      break;
    default:
      temp = <span>{attr.type}</span>;
    }
   return temp 
}