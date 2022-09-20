import { useState } from 'react'

const useSlide = (picturesLength) => {
  const [active, setActive] = useState(0)
  
  const handleSlide = (direction, index) => {
    let moveSlide = null;

    switch (direction) {
      case 'left':
        moveSlide = (prev) => prev === 0 ? picturesLength - 1 : prev -= 1
        break;
    
      case 'right':
        moveSlide = (prev) => prev === picturesLength - 1 ? 0 : prev += 1
        break;

      default:
        moveSlide = (_prev) => index;
    }

    setActive((prev) => moveSlide(prev))
  }

  return {
    active,
    handleSlide,
  }
}

export default useSlide;
