import { Container } from 'reactstrap'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-layout">
      <div className="page-content">
        <Container>{children}</Container>
      </div>
    </div>
  )
}

export default Layout
