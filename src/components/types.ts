export interface GalleryItemProps {
  id: string,
  url: string,
  filename: string,
  uploadedBy: string,
  createdAt: string,
  lastModified: string,
  dimensions: { height: number, width: number },
  resolution: { height: number; width: number },
  sharedWith?: Array<object>,
  sizeInBytes: number,
  favorited: boolean,
  description: string,
}
