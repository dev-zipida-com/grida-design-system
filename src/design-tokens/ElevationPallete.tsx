interface PalleteProps {
  dark?: boolean
  shadows: {
    title: string
    shadow: string
  }[]
}

export default function Pallete({ dark, shadows }: PalleteProps) {
  return (
    <div
      className={`inline-flex flex-row p-[70px] gap-10 ${!dark ? 'bg-bgPrimary' : 'bg-bgDarkmode'}`}
    >
      {shadows.map(({ title, shadow }, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <div
            style={{ boxShadow: shadow }}
            className={`w-[132px] h-[132px] rounded-[10px] ${!dark ? 'bg-white' : 'bg-[#333333]'}`}
          />
          <span className={`text-center ${!dark ? 'text-titleText' : 'text-darkPrimaryText'}`}>
            {title}
          </span>
        </div>
      ))}
    </div>
  )
}
