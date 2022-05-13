import React, {  useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from './Button'

const HeroSlider = props => {

    const data = props.data


    const [activeSlide] = useState(0);


    return (
        <div className="hero-slider">
            {
                data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active={index === activeSlide}/>
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider__control">
                        
                    </div>
                ) : null
            }
        </div>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const HeroSliderItem = props => (
    <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
        <div className="hero-slider__item__info">
            <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider__item__info__description">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider__item__info__btn">
                <Link to={props.item.path}>
                    <Button
                        backgroundColor={props.item.color}
                        icon="bx bx-cart"
                        animate={true}
                    >
                        Place an oder
                    </Button>
                    <Button
                        id = "btn2"
                        backgroundColor={props.item.color}
                        icon="bx bx-skip-previous-circle"
                        animate={true}
                    >
                    </Button>
                    <div>Watch a quick totural
                         How to place an order
                    </div>
                </Link>
            </div>
        </div>
        <div className="hero-slider__item__image">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.img} alt="" />
        </div>
    </div>
)

export default HeroSlider
