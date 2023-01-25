import './index.css'

const ThumbnailItem = props => {
  const {eachImage, imageChangeId, requireID} = props
  const {id, thumbnailAltText, thumbnailUrl} = eachImage
  const imageChange = () => {
    imageChangeId(id)
  }
  let addStyle = ''
  if (requireID === id) {
    addStyle = 'show'
  }

  return (
    <li className={`list ${addStyle}`}>
      <button type="button" className="border">
        <img
          className="image"
          alt={thumbnailAltText}
          src={thumbnailUrl}
          onClick={imageChange}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
