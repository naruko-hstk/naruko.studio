import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          src="/vercel.svg"
          alt="なるこStudio"
          width={16}
          height={16}
          className="float-left"
        />
        <span className="ml-2">なるこStudio</span>
      </Link>
    </>
  )
}
