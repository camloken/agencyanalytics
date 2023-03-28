import React, {
  useState,
  useEffect
} from 'react'
import useFetch from 'react-fetch-hook'
import { GalleryItemProps } from './components/types'
import GalleryPanel from './components/GalleryPanel'
import PreviewPanel from './components/PreviewPanel'
import './App.css'

function App() {
  const [galleryData, setGalleryData] = useState<GalleryItemProps[] | null>(null)
  const [selectedItem, setSelectedItem] = useState<GalleryItemProps | null >(null)
  const { isLoading, data, error } = useFetch(
    'https://agencyanalytics-api.vercel.app/images.json'
  )

  function setPreview(id: string) {
    if (galleryData) {
      const selected = galleryData.find((item) => item.id === id)
      selected && setSelectedItem(selected)
    }
  }

  function setFavorite(id: string) {
    const favItem = galleryData && galleryData.find((item) => item.id === id)
    if (favItem) {
      favItem.favorited = !favItem.favorited
      setGalleryData([...galleryData, favItem])
      setPreview(id)
    }
  }

  function deleteItem(id: string) {
    const idExists = galleryData && galleryData.find((item) => item.id === id)
    if (idExists) {
      const toRemove = galleryData.findIndex((item) => item.id === id)
      const newData = galleryData.splice(toRemove, 1)
      setGalleryData(newData)
    }
  }

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setGalleryData(data)
    }
    if (selectedItem === null && data && Array.isArray(data)) {
      const newObj = data[0]
      setSelectedItem(newObj)
    }
  }, [data, selectedItem, galleryData])

  return (

    <div className="app">
      {/* "app" must return a single element, therfore a fragment wrapper <></> is needed */}
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      <>
        {isLoading && <div className="flex-center">One moment please...</div>}
        {error && (
          <div className="flex-center">{`There is a problem fetching the data - ${error}`}</div>
        )}
        {data && galleryData && selectedItem && (
          <>
            <GalleryPanel
              imageData={galleryData}
              setPreview={(id: string) => setPreview(id)}
              setSelected={(el: GalleryItemProps) => setSelectedItem(el)}
              selectedItem={selectedItem.id}
            />
            <PreviewPanel
              id={selectedItem.id}
              url={selectedItem.url}
              filename={selectedItem.filename}
              uploadedBy={selectedItem.uploadedBy}
              createdAt={selectedItem.createdAt}
              lastModified={selectedItem.lastModified}
              dimensions={selectedItem.dimensions}
              resolution={selectedItem.resolution}
              sizeInBytes={selectedItem.sizeInBytes}
              favorited={selectedItem.favorited}
              description={selectedItem.description}
              setFavorite={(id: string) => setFavorite(id)}
              deleteItem={(id: string) => deleteItem(id)}
            />
          </>
        )}
      </>
    </div>
  )
}

export default App
