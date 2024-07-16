const Footer = () => {
  return (
    <div className="bg-accent">
      <p className="px-8 py-4 text-sm text-muted-foreground">
        &copy;{new Date().getFullYear()} Copyright{' '}
        <span className="font-semibold">Talisson Barbosa</span>
      </p>
    </div>
  )
}

export default Footer
