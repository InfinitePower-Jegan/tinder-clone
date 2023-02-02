type ImageStepViewProps = {
  photos: string[]
  selectedIndex: number
}

const ImageStepView: React.FC<ImageStepViewProps> = ({ photos, selectedIndex }) => {
  return (
    <div className="w-full flex items-center justify-evenly z-10 absolute top-0 p-2 space-x-2">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`w-full h-1 rounded-full ${selectedIndex === index ? "bg-white" : "bg-black/10"}`}
        />
      ))}
    </div>
  )
}

export default ImageStepView
