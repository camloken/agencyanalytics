import React from 'react'
import moment from 'moment'
import HeartFilled from '../assets/HeartFilled'
import HeartOutlined from '../assets/HeartOutlined'

function PreviewPanel(selected: {
  id: string,
  url: string,
  filename: string,
  uploadedBy: string,
  createdAt: Date,
  lastModified: Date,
  dimensions: { height: number, width: number },
  resolution: { height: number; width: number },
  sizeInBytes: number,
  favorited: boolean,
  description: string,
  setFavorite: () => void,
  setSelectedItem: () => void,
  deleteItem: () => void,
}) {
  const {
    id,
    url,
    filename,
    uploadedBy,
    createdAt,
    lastModified,
    dimensions,
    resolution,
    sizeInBytes,
    favorited,
    description,
    setFavorite,
    deleteItem,
  } = selected

  const newDimensions = selected ? `${dimensions.width} x ${dimensions.height}` : '---'
  const newResolution = selected ? `${resolution.width} x ${resolution.height}` : '---'

  return (
    <div className="preview-panel">
      <div
        className="preview-image"
        style={{ background: `url(${url}) center center / cover no-repeat` }}
      />
      <section className="flex-row">
        <div className="preview-caption">
          <p title={filename}><b>{filename}</b></p>
          <p className="text-light">{`${(sizeInBytes / 1000000).toFixed(1)} MB`}</p>
        </div>
        <div
          role="presentation"
          onClick={() => setFavorite(id)}
        >
          {favorited
            ? <HeartFilled className="favorite-icon" size={16} />
            : <HeartOutlined className="favorite-icon" size={16} />}
        </div>
      </section>
      <ul className="preview-list">
        <li><h4 className="m-0">Information</h4></li>
        <li><p className="text-light">Uploaded by</p><span>{uploadedBy || '---'}</span></li>
        <li><p className="text-light">Created</p><span>{moment(createdAt).format('LL') || '---'}</span></li>
        <li><p className="text-light">Last modified</p><span>{moment(lastModified).format('LL') || '---'}</span></li>
        <li><p className="text-light">Dimensions</p><span>{newDimensions}</span></li>
        <li><p className="text-light">Resolution</p><span>{newResolution}</span></li>
      </ul>
      {description && (
        <section>
          <h4 className="m-0">Description</h4>
          <p className="preview-description text-light">{description}</p>
        </section>
      )}
      <button
        type="button"
        className="btn-default full"
        onClick={() => deleteItem(id)}
      >
        Delete
      </button>
    </div>
  )
}

export default PreviewPanel