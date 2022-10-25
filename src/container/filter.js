import React from "react";
import { Filter } from "../components";

export default class FilterCom extends React.PureComponent {

  render(){
    return (
      <Filter onClick = {(e) => { this.props.filterMethod(this.props.filter) }}>
        <Filter.FilterFrame>
          <Filter.FilterSidebar></Filter.FilterSidebar>
          <Filter.FilterCancel>&#10005;</Filter.FilterCancel>
        </Filter.FilterFrame>
      </Filter>
   )
  }
}