import './index.css'

const EventItem = props => {
  const {eachItem, changingStatus, isActive} = props
  const {imageUrl, name, location, registrationStatus} = eachItem
  const newclass = isActive ? 'border-red' : null
  console.log(isActive)

  const onClickingEvent = () => changingStatus(registrationStatus)
  return (
    <li className={`${newclass}`}>
      <button type="button" onClick={onClickingEvent}>
        <img src={imageUrl} alt={name} className="imageDetails" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
      <p>{registrationStatus}</p>
    </li>
  )
}

export default EventItem
