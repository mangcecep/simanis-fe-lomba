import { HugeiconsIcon } from '@hugeicons/react'
import logoApp from '../assets/icon/simanis-black-text-logo.svg'
import { NavLink } from 'react-router-dom'
import { BellDotIcon, Clock01Icon, ComingSoon02Icon, ComputerActivityIcon, DeliveryBox01Icon, HandHelpingIcon, PackageDeliveredIcon, QrCode01Icon, Route01Icon, ScanIcon } from '@hugeicons/core-free-icons'
import DotsBackgroundComponents from './components/DotsBackground'

const MenuLinks = [
  {href: '/', label: 'Home'},
  {href: '#features', label: 'Features'},
  {href: '#solutions', label: 'Solutions'},
  {href: '#resources', label: 'Resources'},
  {href: '#pricing', label: 'Pricing'},
]

const LandingPage = () => {
  return (
    <div className="main-body bg-linear-to-b from-[#ffffff] to-[#99e4ff] min-h-screen">
      <nav className="sticky top-0 flex bg-[#FFFFFF] justify-between items-center px-5 py-3 border-b border-[#d0cece] z-9999">
        <div className="logo">
          <a href="/">    
            <img src={logoApp} alt="SIMANIS Blue Text Logo" width={150} height={150}/>
          </a>
        </div>
        <div className="menu-links flex gap-10">
          {MenuLinks.map((menu) => (
            <NavLink 
              key={menu.href} 
              to={menu.href} 
              className={`relative py-2 text-[14px] font-body font-medium hover:text-normal-hover-blue transition-all duration-300`}
            >
            {menu.label}
            </NavLink>
          ))}
        </div>
        <div className="login-button">
          <a href="/auth/login" className="text-[14px] flex gap-1 items-center border hover:border-normal-blue text-[#000000] px-6 py-1.5 rounded-full hover:bg-normal-blue hover:text-[#FFFFFF] transition-all duration-300">Get Started</a>
        </div>
      </nav>
      <main className="flex flex-col overflow-auto">
        <div className="relative min-h-screen">
          <DotsBackgroundComponents/>
          <div className="relative z-10">
            <section>
              <div className="hero-section relative z-0">
                <div className="card-section relative z-0 h-200">
                  <div className="card absolute z-0 bottom-10 left-30">
                    <div className="card-body relative bg-[#FFFFFF] p-4 rounded-lg flex flex-col gap-3 border-2 border-[#bbbbbb] w-90">
                      <div className="card-head absolute -z-10 -top-12 left-0 bg-[#FFFFFF] rounded-t-lg border-2 border-[#bbbbbb] h-25 p-3">
                        <h1>Inventory Tracking</h1>
                      </div>
                      <h1>Item Status</h1>
                      <div className="borrow-section">
                        <div className="top flex items-center gap-2">
                          <span  className="bg-[#CC4204] p-1 rounded">
                            <HugeiconsIcon icon={HandHelpingIcon} size={18} className="text-[#FFFFFF]"/>
                          </span>
                          <h1>Borrowed</h1>
                        </div>
                        <div className="bottom flex justify-between items-center mt-2">
                          <p className="text-[#828282]">Sep 10</p>
                          <div className="progress-bar h-2 bg-[#1d1e1e32] overflow-hidden rounded-full w-55">
                            <span className="block h-full w-[20%] bg-[#0048ff] rounded-full"></span>
                          </div>
                          <h5 className="text-[#000000] font-bold">20%</h5>
                        </div>
                      </div>
                      <hr/>
                      <div className="available-section">
                        <div className="top flex items-center gap-2">
                          <span  className="bg-[#18b5ab] p-1 rounded">
                            <HugeiconsIcon icon={PackageDeliveredIcon} size={18} className="text-[#FFFFFF]"/>
                          </span>
                          <h1>Available</h1>
                        </div>
                        <div className="bottom flex justify-between items-center mt-2">
                          <p className="text-[#828282]">Sep 18</p>
                          <div className="progress-bar h-2 bg-[#1d1e1e32] overflow-hidden rounded-full w-55">
                            <span className="block h-full w-[80%] bg-[#18b5ab] rounded-full"></span>
                          </div>
                          <h5 className="text-[#000000] font-bold">80%</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card absolute z-0 bottom-33 right-40">
                    <div className="card-body relative bg-[#FFFFFF] p-4 rounded-lg flex flex-col gap-3 border-2 border-[#bbbbbb] w-90">
                      <div className="card-head absolute -z-10 -top-12 left-0 bg-[#FFFFFF] rounded-t-lg border-2 border-[#bbbbbb] h-25 p-3">
                        <h1>Features Supported</h1>
                      </div>
                      <h1>Superior Features</h1>
                      <div className="icon-section flex gap-4 justify-center items-center">
                        <span className="border-2 p-3 rounded-md border-[#bbbbbb5a] -rotate-4">
                          <HugeiconsIcon icon={QrCode01Icon} size={25} className="text-[#00b5c2]"/>
                        </span>
                        <span className="border-2 p-4 rounded-md border-[#bbbbbb5a] -rotate-4">
                          <HugeiconsIcon icon={ScanIcon} size={25} className="text-[#0190fd]"/>
                        </span>
                        <span className="border-2 p-4 rounded-md border-[#bbbbbb5a] rotate-4">
                          <HugeiconsIcon icon={BellDotIcon} size={25} className="text-[#ea1010]"/>
                        </span>
                        <span className="border-2 p-3 rounded-md border-[#bbbbbb5a] rotate-4">
                          <h1 className="text-[#686868]">3+</h1>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card absolute z-0 top-13 right-40">
                    <div className="card-body relative bg-[#FFFFFF] px-7 py-5 rounded-lg flex flex-col gap-3 border-2 border-[#bbbbbb] w-90">
                      <div className="card-head absolute z-10 top- -left-10 bg-[#FFFFFF] rounded-lg border-2 border-[#bbbbbb] p-3">
                        <HugeiconsIcon icon={ComingSoon02Icon} size={25}/>
                      </div>
                      <h1>Reminders</h1>
                      <hr className="border-[#8382825e]"/>
                      <div className="container-blue flex flex-col gap-2 bg-[#F2F3FF] rounded-sm border-2 border-[#E6E7F4] p-4">
                        <h1>Tomorrow</h1>
                        <p className="text-[#7272727f] text-[13px]">Return Projector</p>
                        <span className="px-4 py-1.5 bg-[#0066FF10] w-fit text-[#0066FF] rounded flex gap-1 items-center">
                          <HugeiconsIcon icon={Clock01Icon} size={15}/>
                          <p>15:00</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-hero-section absolute flex flex-col gap-5 items-center left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center">
                  <h1 className="text-[47px] leading-tight tracking-tight font-bold text-[#000000] text-shadow-lg text-shadow-[#001d7452]">Track, Manage, and Optimize all <span className="text-normal-blue text-shadow-lg text-shadow-[#06485d39">in one place</span></h1>
                  <p className="text-[15px] font-light ">Efficiently manage your inventory and boost profitability.</p>
                  <a href='/login' className="bg-normal-blue w-fit px-6 py-2 rounded text-[#FFFFFF] hover:bg-normal-hover-blue transition-all duration-300">Get Started</a>
                </div>
              </div>
            </section>
            <section id='features' className="p-10 flex-wrap flex gap-6 justify-center items-center my-10">
              <div className="card-features w-100 flex flex-col gap-4 rounded-md justify-center items-center bg-[#FFFFFF] p-8 shadow-lg shadow-[#02749750]">
                <HugeiconsIcon icon={DeliveryBox01Icon} size={30} className="text-[#229fff]"/>
                <h1 className="font-semibold font-body text-[18px]">Management Efficiency</h1>
                <p className="text-center">Speeds up the workflow of organizing inventory, making it more structured, neat, and time-saving.</p>
              </div>
              <div className="card-features w-100 flex flex-col gap-4 rounded-md justify-center items-center bg-[#FFFFFF] p-8 shadow-lg shadow-[#02749750]">
                <HugeiconsIcon icon={ComputerActivityIcon} size={30} className="text-[#229fff]"/>
                <h1 className="font-semibold font-body text-[18px]">Status Monitoring</h1>
                <p className="text-center">Track the availability and exact status of every item in real-time with clear categorizations.</p>
              </div>
              <div className="card-features w-100 flex flex-col gap-4 rounded-md justify-center items-center bg-[#FFFFFF] p-8 shadow-lg shadow-[#02749750]">
                <HugeiconsIcon icon={Route01Icon} size={30} className="text-[#229fff]"/>
                <h1 className="font-semibold font-body text-[18px]">Seamless Traceability</h1>
                <p className="text-center">Provides an accurate, end-to-end history of asset movements to ensure strict accountability.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage