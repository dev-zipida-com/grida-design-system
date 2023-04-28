import PictureImg from '../../assets/picture.svg'

export interface SkeletonImageProps {
  size?: 'large' | 'small' | 'default'
  shape?: 'circle' | 'square'
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({ size = 'default', shape = 'circle' }) => {
  return (
    <div className={`skeleton-image ${size} ${shape}`}>
      <img src={PictureImg} alt="picture-icon" />
    </div>
  )
}

export default SkeletonImage
