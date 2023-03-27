import React from 'react'

function GalleryItems(galleyItemProps: {
  imageData: [],
  setPreview: () => void,
  selectedItem: () => void,
}) {
  const {
    imageData,
    setPreview,
    selectedItem,
  } = galleyItemProps

  const items = imageData.map((item) => {
    const activeClassName = (item.id === selectedItem) ? 'image active' : 'image'
    return (
      <section className="grid-item" key={`${item.id}${Math.random()}`}>
        <div
          className={activeClassName}
          style={{ background: `url(${item.url}) center center / cover no-repeat` }}
          onClick={() => setPreview(item.id)}
          role="presentation"
        />
        <p title={item.filename}><b>{item.filename}</b></p>
        <p className="text-light">{`${(item.sizeInBytes / 1000000).toFixed(1)} MB`}</p>
      </section>
    )
  })
  return items
}

export default GalleryItems
