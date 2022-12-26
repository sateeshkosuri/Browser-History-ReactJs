import './index.css'

const ListItem = props => {
  const {listDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listDetails

  const onDeleteButton = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="list-browser-container">
        <div className="list-browser">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="domain-logo-image" />
          <p className="domain-title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>

        <button
          type="button"
          className="delete-button"
          onClick={onDeleteButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default ListItem
