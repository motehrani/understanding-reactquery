export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-layout">
      <div className="page-content">{children}</div>
    </div>
  )
}

export default Layout
