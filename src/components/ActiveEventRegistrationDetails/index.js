const details = {
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
  new: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {statusOfEvent} = props
  const registered = () => (
    <div>
      <h1>REgistered</h1>
    </div>
  )

  const formClosed = () => <h1>Closed</h1>

  const newForm = () => <h1>Need to register</h1>

  switch (statusOfEvent) {
    case details.registered:
      return registered()
    case details.closed:
      return formClosed()

    case details.new:
      return newForm()

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
