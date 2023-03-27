import React from 'react'

function GalleryItems(galleyItemProps: {
  imageData: [],
  setPreview: () => void,
  selectedItem: string,
}) {
  const {
    imageData,
    setPreview,
    selectedItem,
  } = galleyItemProps

  const items = imageData.map((item: object) => {
    const activeClassName: string = (item.id<string> === selectedItem) ? 'image active' : 'image'
    return (
      <section className="grid-item" key={`${item.id<string>}${Math.random()}`}>
        <div
          className={activeClassName}
          style={{ background: `url(${item.url<string>}) center center / cover no-repeat` }}
          onClick={() => setPreview(item.id<string>)}
          role="presentation"
        />
        <p title={item.filename<string>}><b>{item.filename<string>}</b></p>
        <p className="text-light">{`${((item.sizeInBytes<number>) / 1000000).toFixed(1)} MB`}</p>
      </section>
    )
  })
  return items
}

export default GalleryItems
