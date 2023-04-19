interface PalleteProps {
  title: string
  colors?: { name: string; value: string }[]
  darktheme?: boolean
}

export default function Pallete({ title = '', colors, darktheme }: PalleteProps) {
  return (
    <div className={`flex flex-col gap-4`}>
      <div className="text-gray-400">{title}</div>
      <div
        className={`flex flex-wrap rounded-md p-6 gap-y-5 overflow-auto ${
          darktheme ? 'bg-black/90 text-white' : 'bg-white text-black'
        }`}
      >
        {colors?.map(({ name, value }, i) => (
          <div key={i} className="flex w-1/4 flex-col items-center gap-1">
            <div style={{ backgroundColor: value }} className="rounded-full w-36 h-36" />
            <div className="mt-4">{name}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
