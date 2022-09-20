import useProperty from '../../hooks/useProperty';
import PropertyItem from './PropertyItem';

import styles from './PropertyList.module.css';

const PropertyList = () => {
  const { properties } = useProperty()

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        <span className='highlight'>Tenha a experiencia </span> 
        de um Edifício Tabas
      </p>
      <div className={styles['property-list-grid']}>
        {
            properties && properties.map((property) => {
              return (
                <PropertyItem 
                  key={property.id}
                  name={property.name}
                  cover={property.cover}
                  address={property.address}
                  description={property.description}
                  monthlyRate={property.monthly_rate}
                  pictures={property.pictures}
                />
              )
            })
          }
      </div>
    </div>
  )
}

export default PropertyList;
