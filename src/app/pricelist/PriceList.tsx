import React from 'react'

const PriceListPage = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col gap-20 min-h-screen p-10 items-center">
        <div className="text-head flex flex-col gap-6 items-center">
            <h1 className="font-bold text-[35px]">Manage <span className="text-normal-blue">Thousands of Items</span> Stress-Free. Start with the Right Plan <span className="text-normal-blue">for You</span></h1>
            <p className="text-[18px]">Find the perfect fit for your team and streamline your stock control today</p>
        </div>
        <div className="pricelist-section grid grid-cols-1 md:grid-cols-4 gap-5 w-full max-w-7xl md:max-w-full justify-center">
            <div className="trial-pricelist flex flex-col gap-4 border border-[#74747468] p-5 rounded-md">
                <div className="title-header flex flex-col gap-2">
                    <h1 className="font-semibold text-[22px]">SIMANIS <span className="text-normal-blue">Trial</span></h1>
                    <p className="font-medium text-normal-neutral">Get full access to core inventory features for 14 days and streamline your management workflow.</p>
                </div>
                <div className="price_button flex flex-col gap-5">
                    <p className="text-[12px] text-normal-neutral"><span className="font-semibold text-[25px]">Free</span>/14 days</p>
                    <button className="bg-normal-blue w-full p-3 rounded font-medium text-[#FFFFFF] hover:bg-normal-hover-blue cursor-pointer transition-all duration-300">Get Simanis Trial</button>
                </div>
                <div className="description-pricelist flex flex-col gap-4 font-medium text-[13px]">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Usage Limits</h4>
                        <p className="text-normal-navy">14-Day <span className="text-normal-blue">Free Access</span> Experience the full inventory digitalization workflow completely free before committing to a subscription plan</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Inventory & Member Management</h4>
                        <p className="text-normal-navy">Capacity for up to <span className="text-normal-blue">50 Items</span> & <span className="text-normal-blue">100 Borrowers</span> Ample capacity to test physical stock tracking and the member portal in a controlled environment</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operasional QR Code</h4>
                        <p className="text-normal-navy">QR Code Engine & <span className="text-normal-blue">Dual-Action Scan</span> Access label generation and automatic scanning for seamless check-in and check-out transactions</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operator Admin Account</h4>
                        <p className="text-normal-navy">Includes <span className="text-normal-blue">1 dedicated</span> access account for your operational inventory staff</p>
                    </div>
                </div>
            </div>
            <div className="monthly-pricelist flex flex-col gap-4 border border-[#74747468] p-5 rounded-md">
                <div className="title-header flex flex-col gap-2">
                    <h1 className="font-semibold text-[22px]">SIMANIS <span className="text-normal-blue">Monthly</span></h1>
                    <p className="font-medium text-normal-neutral">Unlock complete inventory management capabilities with flexible monthly billing.</p>
                </div>
                <div className="price_button flex flex-col gap-5">
                    <p className="text-[12px] text-normal-neutral"><span className="font-semibold text-[25px]">IDR 250.000</span>/Month</p>
                    <button className="bg-normal-blue w-full p-3 rounded font-medium text-[#FFFFFF] hover:bg-normal-hover-blue cursor-pointer transition-all duration-300">Get Simanis Monthly</button>
                </div>
                <div className="description-pricelist flex flex-col gap-4 font-medium text-[13px]">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Usage Limits</h4>
                        <p className="text-normal-navy">Flexible Capacity with No Long-Term Commitment The perfect solution for efficient monthly operations with flexible recurring billing</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Inventory & Member Management</h4>
                        <p className="text-normal-navy">Up to <span className="text-normal-blue">1,000 Items</span> & <span className="text-normal-blue">Unlimited Borrowers</span> Manage thousands of inventory items and grant member portal access to all students or employees without restrictions.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operasional QR Code</h4>
                        <p className="text-normal-navy">QR Code Engine & <span className="text-normal-blue">Dual-Action Scan</span> Access label generation and automatic scanning for seamless check-in and check-out transactions</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operator Admin Account</h4>
                        <p className="text-normal-navy">Up <span className="text-normal-blue">to 5 Operator Admin</span> Accounts Expand team collaboration by assigning up to 5 accounts for inventory staff</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operations & Reporting</h4>
                        <p className="text-normal-navy">Advanced <span className="text-normal-blue">Report Exporting Enhanced access</span> to reporting features with the ability to export inventory history to Excel or PDF formats</p>
                    </div>
                </div>
            </div>
            <div className="trial-pricelist flex flex-col gap-4 border border-[#74747468] p-5 rounded-md">
                <div className="title-header flex flex-col gap-2">
                    <p>BEST CHOICE</p>
                    <h1 className="font-semibold text-[22px]">SIMANIS <span className="text-normal-blue">Annual</span></h1>
                    <p className="font-medium text-normal-neutral">Maximize operational efficiency with unlimited access, automated reminders, and cost-saving annual billing</p>
                </div>
                <div className="price_button flex flex-col gap-5">
                    <p className="text-[12px] text-normal-neutral"><span className="font-semibold text-[25px]">Free</span>/14 days</p>
                    <button className="bg-normal-blue w-full p-3 rounded font-medium text-[#FFFFFF] hover:bg-normal-hover-blue cursor-pointer transition-all duration-300">Get Simanis Trial</button>
                </div>
                <div className="description-pricelist flex flex-col gap-4 font-medium text-[13px]">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Usage Limits</h4>
                        <p className="text-normal-navy">14-Day <span>Free Access</span> Experience the full inventory digitalization workflow completely free before committing to a subscription plan</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Inventory & Member Management</h4>
                        <p className="text-normal-navy">Capacity for up to <span>50 Items</span> & <span>100 Borrowers</span> Ample capacity to test physical stock tracking and the member portal in a controlled environment</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operasional QR Code</h4>
                        <p className="text-normal-navy">QR Code Engine & <span>Dual-Action Scan</span> Access label generation and automatic scanning for seamless check-in and check-out transactions</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operator Admin Account</h4>
                        <p className="text-normal-navy">Includes <span>1 dedicated</span> access account for your operational inventory staff</p>
                    </div>
                </div>
            </div>
            <div className="trial-pricelist flex flex-col gap-4 border border-[#74747468] p-5 rounded-md">
                <div className="title-header flex flex-col gap-2">
                    <h1 className="font-semibold text-[22px]">SIMANIS <span className="text-normal-blue">Trial</span></h1>
                    <p className="font-medium text-normal-neutral">Get full access to core inventory features for 14 days and streamline your management workflow</p>
                </div>
                <div className="price_button flex flex-col gap-5">
                    <p className="text-[12px] text-normal-neutral"><span className="font-semibold text-[25px]">Free</span>/14 days</p>
                    <button className="bg-normal-blue w-full p-3 rounded font-medium text-[#FFFFFF] hover:bg-normal-hover-blue cursor-pointer transition-all duration-300">Get Simanis Trial</button>
                </div>
                <div className="description-pricelist flex flex-col gap-4 font-medium text-[13px]">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Usage Limits</h4>
                        <p className="text-normal-navy">14-Day <span>Free Access</span> Experience the full inventory digitalization workflow completely free before committing to a subscription plan</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Inventory & Member Management</h4>
                        <p className="text-normal-navy">Capacity for up to <span>50 Items</span> & <span>100 Borrowers</span> Ample capacity to test physical stock tracking and the member portal in a controlled environment</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operasional QR Code</h4>
                        <p className="text-normal-navy">QR Code Engine & <span>Dual-Action Scan</span> Access label generation and automatic scanning for seamless check-in and check-out transactions</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-normal-neutral">Operator Admin Account</h4>
                        <p className="text-normal-navy">Includes <span>1 dedicated</span> access account for your operational inventory staff</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default PriceListPage