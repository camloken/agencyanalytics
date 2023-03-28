import React from 'react'

type GalleryItemProps = {
  imageData: Array<{
    id: string,
    url: string,
    filename: string,
    sizeInBytes: number,
  }>,
  setPreview: (id: string) => void,
  selectedItem: string,
}

function GalleryItems(galleyItemProps: GalleryItemProps) {
  const {
    imageData,
    setPreview,
    selectedItem,
  } = galleyItemProps

  const items = imageData.map((item) => {
    const activeClassName: string = ((item.id) === selectedItem) ? 'image active' : 'image'
    return (
      <section className="grid-item" key={`${item.id}${Math.random()}`}>
        <div
          className={activeClassName}
          style={{ background: `url(${item.url}) center center / cover no-repeat` }}
          onClick={() => setPreview(item.id)}
          role="presentation"
        />
        <p title={item.filename}><b>{item.filename}</b></p>
        <p className="text-light">{`${((item.sizeInBytes) / 1000000).toFixed(1)} MB`}</p>
      </section>
    )
  })
  // "items" below must be wrapped to avoid Typescript build error
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{items}</>
}

export default GalleryItems
