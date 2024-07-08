const Footer = () => {
  return (
    <div className="bg-accent">
      <p className="text-muted-foreground px-8 py-4 text-sm">
        &copy;{new Date().getFullYear()} Copyright{' '}
        <span className="font-semibold">Talisson Barbosa</span>
      </p>
    </div>
  )
}

export default Footer
