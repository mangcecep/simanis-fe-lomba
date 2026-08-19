import SideBarAdminComponents from '../../components/admin_components/SideBarAdmin'
import NavbarAdminComponents from '../../components/admin_components/NavbarAdmin'

const BorrowedAdminPage = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex">
      <SideBarAdminComponents/>
      <main className="w-full flex-1">
        <NavbarAdminComponents/>
        <section className="flex-1 overflow-auto p-5">
          
        </section>
      </main>
    </div>
  )
}

export default BorrowedAdminPage
