import Image from "next/image"

export default function Logo() {
  return (
    <>
      <Image
        src="/vercel.svg"
        alt="なるこStudio"
        width={16}
        height={16}
        className="float-left"
      />
      <span className="ml-2">なるこStudio</span>
    </>
  )
}
