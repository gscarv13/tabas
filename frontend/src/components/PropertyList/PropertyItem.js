import ImageSlider from '../ImageSlider/ImageSlider';
import styles from './PropertyItem.module.css';

const PropertyItem = ({ name, cover, address, description, monthlyRate, pictures }) => {

  return (
    <div className={styles['card-container']} data-testid="property-card">
      <div className={styles['property-info-container']}>
        <div className={styles['cover-container']}>
          <img src={cover} alt={`${name} building`} />
        </div>
        <div>
          <h2>{name}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
          <p>$ {monthlyRate}</p>
        </div>
      </div>
      <div className={styles.slider}>
        <ImageSlider pictures={pictures} />
      </div>
    </div>
  )
}

export default PropertyItem;
