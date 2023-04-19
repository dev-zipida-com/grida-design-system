interface PalleteProps {
  text: {
    type: string
    content: string
  }
  fontSize: number
  fontWeight: string
  lineHeight: number
}

export default function Pallete({ fontSize, fontWeight, lineHeight, text }: PalleteProps) {
  const content = text.content.split(',')
  const weights = fontWeight.split('/')

  return (
    <div className="container flex flex-1 flex-row gap-5">
      <div className="flex-[8] bg-bgPrimary px-[42px] py-[31px]">
        {content.map((item, idx) => (
          <div key={idx} style={{ fontSize: fontSize, fontWeight: weights[idx].trim() }}>
            {item.trim()}
          </div>
        ))}
      </div>
      <div className="flex flex-[3] flex-col justify-center">
        <div>
          <span className="text-primaryText">font-size:</span>
          {fontSize}px
        </div>
        <div>
          <span className="text-primaryText">font-weight:</span>
          {fontWeight}
        </div>
        <div>
          <span className="text-primaryText">line-height:</span>
          {lineHeight}%
        </div>
      </div>
    </div>
  )
}
