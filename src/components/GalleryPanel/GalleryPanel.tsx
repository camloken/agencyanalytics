import { useEffect } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs'
import './galleryPanel.css'
import { GalleryItemProps } from '../types'
import GalleryItems from '../GalleryItems/GalleryItems'

function GalleryPanel(galleyPanelProps: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageData: any, // I don't like "any", but it works. It should be changed
  setPreview: (id: string) => void,
  setSelected: (el: GalleryItemProps) => void,
  selectedItem: string,
}) {
  const {
    imageData,
    setPreview,
    setSelected,
    selectedItem,
  } = galleyPanelProps

  // Sorted by date
  const sortedImages =
    imageData.sort((a: GalleryItemProps, b: GalleryItemProps) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())
  // Sorted by favorties
  const favoriteImages =
    sortedImages.filter((item: GalleryItemProps) => item.favorited === true)

  useEffect(() => {
    setSelected(sortedImages[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tabs className="tab-panel">
      <h2 className="m-0">Photos</h2>
      <TabList>
        <Tab onClick={() => setSelected(sortedImages[0])}>Recently Added</Tab>
        <Tab onClick={() => setSelected(favoriteImages[0])}>Favorited</Tab>
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