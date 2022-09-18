import useProperty from '../hooks/useProperty';
import PropertyItem from './PropertyItem';

const PropertyList = () => {
  const { properties } = useProperty()

  return (
    <div className='property-list-grid'>
      {
          properties && properties.map((property) => {
            return (
              <PropertyItem 
                key={property.id}
                name={property.name}
                address={property.address}
                description={property.description}
                monthlyRate={property.monthly_rate}
                pictures={property.pictures}
              />
            )
          })
        }
    </div>
  )
}

export default PropertyList;
