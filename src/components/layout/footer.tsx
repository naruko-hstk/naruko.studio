export default function Footer() {
  const start = 2023
  const current = new Date().getFullYear()
  const year = start === current ? start : `${start}-${current}`
  return (
    <>
      <span>Copyright &copy; {year} なるこStudio. All rights reserved.</span>
    </>
  )
}
