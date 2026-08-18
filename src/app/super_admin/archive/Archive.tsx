import SideBarSuperAdminComponents from '../../components/super_admin_components/SideBarSuperAdmin'
import NavbarSuperAdminComponents from '../../components/super_admin_components/NavbarSuperAdmin'

const ArchiveSuperAdminPage = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex">
      <SideBarSuperAdminComponents/>
      <main className="w-full flex-1">
        <NavbarSuperAdminComponents/>
        <section className="flex-1 overflow-auto p-5">
          
        </section>
      </main>
    </div>
  )
}

export default ArchiveSuperAdminPage