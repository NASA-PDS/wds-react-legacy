import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import AliceCarousel from 'react-alice-carousel'
import * as Utils from 'react-alice-carousel/lib/utils'
import 'react-alice-carousel/lib/alice-carousel.css'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import css from './Carousel.module.css'

const handleDragStart = (e) => e.preventDefault()

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    getItems() {
        const { items } = this.props
        const itemLis = []

        items.forEach((elm, i) => {
            const itemStyle = {
                backgroundImage: `url(${elm.image})`,
            }
            itemLis.push(
                <div key={i} className={css.itemOuter} onDragStart={handleDragStart}>
                    <Paper className={css.itemInner} style={itemStyle} elevation={4}>
                        <div className={css.container}>
                            <div className={css.content}>
                                <h2 className={css.text}>{elm.text}</h2>
                                <h4 className={css.subtext}>{elm.subtext}</h4>
                            </div>
                        </div>
                    </Paper>
                </div>
            )
        })
        return itemLis
    }

    render() {
        const { settings } = this.props

        const customSettings = settings || {}

        const sliderSettings = {
            disableDotsControls: true,
            ...customSettings,
        }
        return (
            <div className={css.main}>
                <AliceCarousel
                    {...sliderSettings}
                    disableButtonsControls={true}
                    items={this.getItems()}
                    ref={(r) => (this.Carousel = r)}
                />
                {!this.state.isPrevSlideDisabled && (
                    <IconButton
                        className={`${css.nav} ${css.prev}`}
                        onClick={() => this.Carousel.slidePrev()}
                        aria-label="Previous Slide"
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                )}
                {!this.state.isNextSlideDisabled && (
                    <IconButton
                        className={`${css.nav} ${css.next}`}
                        onClick={() => this.Carousel.slideNext()}
                        aria-label="Next Slide"
                    >
                        <ChevronRightIcon />
                    </IconButton>
                )}
            </div>
        )
    }
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    settings: PropTypes.object,
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps() {
    return {}
}
function mergeProps(propsFromState, propsFromDispatch, ownProps) {
    return {
        ...ownProps,
        ...propsFromState,
        ...propsFromDispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Carousel)