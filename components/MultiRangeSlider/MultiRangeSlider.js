import React, { useCallback, useEffect, useState, useRef } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

const MultiRangeSlider = ({
  min,
  max,
  onChange,
  minValueRange,
  maxValueRange,
}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(null)
  const maxValRef = useRef(null)
  const range = useRef(null)

  useEffect(() => {
    setMinVal(minValueRange)
    setMaxVal(maxValueRange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      // @ts-ignore
      const maxPercent = getPercent(+maxValRef.current.value) // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        // @ts-ignore
        range.current.style.left = `${minPercent}%`
        // @ts-ignore
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      // @ts-ignore
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        // @ts-ignore
        range.current.style.left = `${minPercent}%`
        // @ts-ignore
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  return (
    <div className="container pt-20 lg:mx-0 lg:ml-6 mx-auto">
      <input
        type="range"
        step={50}
        min={min}
        max={max}
        value={minVal != 300 ? minVal : 300}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 200)
          setMinVal(value)
          event.target.value = value.toString()
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 200,
        })}
      />
      <input
        type="range"
        step={50}
        min={min}
        max={max}
        value={maxVal != 10000 ? maxVal : 10000}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 200)
          setMaxVal(value)
          event.target.value = value.toString()
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range"></div>
        <div className="slider__left-value">{minVal} &euro;</div>
        <div className="slider__right-value">{maxVal} &euro;</div>
      </div>
    </div>
  )
}

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MultiRangeSlider
