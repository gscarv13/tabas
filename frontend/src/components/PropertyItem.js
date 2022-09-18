const PropertyItem = ({ name, address, description, monthlyRate, pictures }) => {
  return (
    <div>
      <div className="cover-container"></div>
      <div className="property-info-container">
        <h2>{name}</h2>
        <h3>{address}</h3>
        <p>{monthlyRate}</p>
        <p>{description}</p>
      </div>
      <div>
        {
          pictures.length > 0 && pictures.map(picture => <img key={picture.id} src={picture.url} alt="asd" />)
        }
      </div>
    </div>
  )
}

export default PropertyItem;
