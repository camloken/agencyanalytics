import React, {
  useState,
  useEffect
} from 'react'
import useFetch from 'react-fetch-hook'
import GalleryPanel from './components/GalleryPanel'
import PreviewPanel from './components/PreviewPanel'
import './App.css'

function App() {
  const [galleryData, setGalleryData] = useState<array>(null)
  const [selectedItem, setSelectedItem] = useState<object>(null)
  // const [favoriteImages, setFavoriteImages] = useState(null)
  const { isLoading, data, error } = useFetch(
    'https://agencyanalytics-api.vercel.app/images.json'
  )

  function setPreview(id: string) {
    if (galleryData) {
      const selected = galleryData.find((item) => item.id === id)
      setSelectedItem(selected)
    }
  }

  function setFavorite(id: string) {
    const idExists = galleryData.find((item) => item.id === id)
    if (idExists) {
      const favItem = galleryData.find((item) => item.id === id)
      favItem.favorited = !favItem.favorited
      setGalleryData([...galleryData, favItem])
      setPreview(id)
    }
  }

  function deleteItem(id: string) {
    const idExists = galleryData.find((item) => item.id === id)
    if (idExists) {
      const toRemove = galleryData.findIndex((item) => item.id === id)
      const newData = galleryData.splice(toRemove, 1)
      setGalleryData([...galleryData, newData])
    }
  }

  useEffect(() => {
    setGalleryData(data)
    if (selectedItem === null && data) { setSelectedItem(data[0]) }
  }, [data, selectedItem, galleryData])

  return (

    <div className="app">
      {isLoading && <div className="flex-center">One moment please...</div>}
      {error && (
        <div className="flex-center">{`There is a problem fetching the data - ${error}`}</div>
      )}
      {galleryData && (
        <>
          <GalleryPanel
            imageData={galleryData}
            setPreview={(id: string) => setPreview(id)}
            setSelectedItem={(id: string) => setSelectedItem(id)}
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
    </div>
  )
}

export default App
