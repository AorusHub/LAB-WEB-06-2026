const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {year} Christian Jordan Suryadi.</p>
    </footer>
  )
}
