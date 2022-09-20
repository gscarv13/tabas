import useSlide from '../../hooks/useSlide'
import styles from './ImageSlider.module.css'

const ImageSlider = ({ pictures }) => {
  const { active, handleSlide } = useSlide(pictures.length)
  
  return (
    <div className={styles['pictures-container']}>
      <button className={styles.left} onClick={() => handleSlide('left')} >
        {'<'}
      </button>
      {
        pictures.length > 0 && pictures.map((picture, index) => (
            <img
              key={`img-${picture.id}`}
              className={`${styles.picture} ${index === active ? styles.active : ''}`}
              src={picture.url} alt={`Interior of ${pictures.name} building`}
            />
        ))
      }
      <button className={styles.right} onClick={() => handleSlide('right')} >
        {'>'}
      </button>
      <div className={styles['indicator-container']}>
        {
          pictures.length > 0 && pictures.map((picture, index) => (
            <span
              key={`${picture.id}-${index}-span`}
              onClick={() => handleSlide(null, index)}
              className={index === active ? styles.selected : styles.indicator }></span>
          ))
        }
      </div>
    </div>
  )
}

export default ImageSlider;
