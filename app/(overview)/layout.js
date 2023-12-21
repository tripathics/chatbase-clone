import Navigation from "@/components/layouts/navigation"

export default function Layout({ children }) {
  return (
    <div className="___layout">
      <Navigation />
      {children}
    </div>
  )
}