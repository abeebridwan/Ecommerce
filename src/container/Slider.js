import React from "react";
import { Slider } from "../components";


export default class SliderContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.generateKey = this.generateKey.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
  }

  generateKey = (pre, index) => {
    return `${pre}_${new Date().getTime()}_${index}`;
  }
  nextSlide() {
    const { slideIndex } = this.state;
    const { dataSlider } = this.props;
    const newValue = dataSlider.length - 1;
    const newSlideValue = slideIndex + 1;
    slideIndex !== newValue ? this.setState({ slideIndex: newSlideValue }) : this.setState({ slideIndex: 0 })
  }

  prevSlide() {
    const { slideIndex } = this.state;
    const { dataSlider } = this.props;
    const newValue = dataSlider.length - 1;
    slideIndex !== 0 ? this.setState({ slideIndex: slideIndex - 1 }) : this.setState({ slideIndex: newValue })
  }

  render() {
    const { dataSlider, name } = this.props;
    const { slideIndex } = this.state;
    return (
      <>
        {
          dataSlider.map((src, index, gallery) => (
            <Slider className={slideIndex === index ? "active" : "nonactive"} key={this.generateKey(name, index)}>
              <Slider.SliderImage src={src} />
              {gallery.length > 1 ?
                <>
                  <Slider.SliderToggleLink
                    onClick={() => {
                      this.nextSlide();
                    }}
                  >&#10094;</Slider.SliderToggleLink>
                  <Slider.SliderToggleLink id="right"
                    onClick={() => {
                      this.prevSlide();
                    }}
                  >&#10095;
                  </Slider.SliderToggleLink>
                </>
                : null}             
                
            </Slider>
          ))}
      </>
    )
  }
}