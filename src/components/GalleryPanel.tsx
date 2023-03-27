import React, { useEffect } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import GalleryItems from './GalleryItems'

function GalleryPanel(galleyPanelProps: {
  imageData: [],
  setPreview: () => void,
  setSelectedItem: () => void,
  selectedItem: string,
}) {
  const {
    imageData,
    setPreview,
    setSelectedItem,
    selectedItem,
  } = galleyPanelProps

  const sortedImages = imageData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sorted by date
  const favoriteImages = imageData.filter((item) => item.favorited === true) // Sorted by favorties

  useEffect(() => {
    setSelectedItem(sortedImages[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tabs className="tab-panel">
      <h2 className="m-0">Photos</h2>
      <TabList>
        <Tab onClick={() => setSelectedItem(sortedImages[0])}>Recently Added</Tab>
        <Tab onClick={() => setSelectedItem(favoriteImages[0])}>Favorited</Tab>
      </TabList>
      <TabPanel className="grid-wrapper">
        <GalleryItems
          imageData={sortedImages}
          setPreview={setPreview}
          selectedItem={selectedItem}
        />
      </TabPanel>
      <TabPanel className="grid-wrapper">
        <GalleryItems
          imageData={favoriteImages}
          setPreview={setPreview}
          selectedItem={selectedItem}
        />
      </TabPanel>
    </Tabs>
  )
}

export default GalleryPanel