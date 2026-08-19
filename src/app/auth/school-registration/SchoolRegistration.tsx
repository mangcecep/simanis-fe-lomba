import { ArrowDown01Icon, Call02Icon, IdentityCardIcon, Location05Icon, School01Icon, TimeZoneIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState, useRef, useEffect } from 'react'
import { useSchoolSaveReq } from './-mutation'
import { useLocation, useNavigate } from 'react-router-dom'

const timezoneOptions = [
    {
        label: 'WIB',
        value: 'Asia/Jakarta'
    },
    {
        label: 'WITA',
        value: 'Asia/Makassar'
    },
    {
        label: 'WIT',
        value: 'Asia/Jayapura'
    },
]

const SchoolRegistrationPage = () => {
    const [selectedTimezone, setSelectedTimezone] = useState('');
    const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);
    const timezoneDropdownRef = useRef<HTMLDivElement>(null);
    const [npsn, setNpsn] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [addressSchool, setAddressSchool] = useState('');
    const [schoolPhoneNumber, setSchoolPhoneNumber] = useState('');
    const schoolSaveMutation = useSchoolSaveReq();
    const navigate = useNavigate();
    const location = useLocation();
    const state = (location.state ?? {}) as { planId?: string | null };
    const planId = state.planId ?? null;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (timezoneDropdownRef.current && !timezoneDropdownRef.current.contains(event.target as Node)) {
                setIsTimezoneOpen(false);
            }
        };
        if (isTimezoneOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isTimezoneOpen]);

    const handleSaveSchool = () => {
        schoolSaveMutation.mutate(
            {
                nama_sekolah: schoolName,
                npsn: npsn,
                alamat: addressSchool,
                phone_number: schoolPhoneNumber,
                timezone: selectedTimezone
            },{
                onSuccess: (response) => {
                    console.log(response)
                    const data = response.data
                    localStorage.setItem('jwt_token', data.jwt_token)
                    if (data.requires_payment) {
                        if (planId) {
                            navigate(`/pricelist/payment?plan=${planId}`)
                        } else if (data.order_id) {
                            navigate(`/pricelist/invoice?order=${data.order_id}`)
                        } else {
                            navigate('/pricelist')
                        }
                    } else {
                        navigate('/super_admin/dashboard')
                    }
                },
                onError: (error) => {
                    console.log(error.message)
                }
            }
        )
    }
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex items-center p-10">
      <div className="form-section w-1/2 flex justify-center">
        <form className="w-180 flex flex-col gap-4">
            <div className="top-header flex flex-col gap-3">
                <h1 className="font-bold text-normal-navy text-[25px]">DATA SEKOLAH</h1>
                <p className="text-[13px] font-medium text-[#5d5d5d]">Lengkapi data sekolah Anda untuk melanjutkan proses pendaftaran dan memastikan informasi inventaris dapat dikelola dengan tepat.</p>
            </div>
            <div className="form-input flex flex-col gap-3">
                <div className="input-group flex flex-col gap-1">
                    <label>NPSN</label>
                    <div className="wrapper-input flex gap-2 items-center border px-2 py-2 rounded border-[#a09f9f] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                        <HugeiconsIcon icon={IdentityCardIcon} size={20}/>
                        <input 
                            type="text" 
                            name="npsn" 
                            id="npsn" 
                            onChange={(e) => (
                                setNpsn(e.target.value)
                            )}
                            placeholder='Contoh: 20202020' 
                            className="outline-none w-full"
                        />
                    </div>
                </div>
                <div className="input-group flex flex-col gap-1">
                    <label>Nama Sekolah</label>
                    <div className="wrapper-input flex gap-2 items-center border px-2 py-2 rounded border-[#a09f9f] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                        <HugeiconsIcon icon={School01Icon} size={20}/>
                        <input 
                            type="text" 
                            name="school_name" 
                            id="school_name" 
                            onChange={(e) => (
                                setSchoolName(e.target.value)
                            )}
                            placeholder='Contoh: SMA Negeri 1 Jakarta' 
                            className="outline-none w-full"
                        />
                    </div>
                </div>
                <div className="input-group">
                    <label>Alamat Sekolah</label>
                    <div className="wrapper-input flex gap-2 border px-2 py-2 rounded border-[#a09f9f] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                        <HugeiconsIcon icon={Location05Icon} size={20}/>
                        <textarea 
                            rows={3} 
                            name="address" 
                            id="address" 
                            onChange={(e) => (
                                setAddressSchool(e.target.value)
                            )}
                            placeholder='Contoh: Jl. Merdeka No. 123, Jakarta Pusat, DKI Jakarta 12345' 
                            className="outline-none w-full resize-none"
                        />
                    </div>
                </div>
                <div className="input-group flex flex-col gap-1">
                    <label>Nomor Telepon Sekolah</label>
                    <div className="wrapper-input flex gap-2 items-center border px-2 py-2 rounded border-[#a09f9f] hover:border-normal-hover-yellow focus-within:border-normal-active-yellow transition-all duration-300">
                        <HugeiconsIcon icon={Call02Icon} size={20}/>
                        <input 
                            type="number" 
                            name="phone_number" 
                            id="phone_number" 
                            onChange={(e) => (
                                setSchoolPhoneNumber(e.target.value)
                            )}
                            placeholder='Contoh: 021-1234567' 
                            className="outline-none w-full"
                        />
                    </div>
                </div>
                <div className="input-group flex flex-col gap-1 relative" ref={timezoneDropdownRef}>
                    <label>Zona Waktu Daerah</label>
                    <div className={`wrapper-input flex gap-2 items-center border px-2 py-2 rounded transition-all duration-300 ${isTimezoneOpen ? 'border-normal-active-yellow' : 'border-[#a09f9f] hover:border-normal-hover-yellow'}`}>
                        <HugeiconsIcon icon={TimeZoneIcon} size={20}/>
                        <button
                            type="button"
                            onClick={() => setIsTimezoneOpen((prev) => !prev)}
                            className="flex items-center justify-between w-full outline-none cursor-pointer"
                        >
                        <span className={selectedTimezone ? 'text-black' : 'text-[#919191]'}>
                            {selectedTimezone ? timezoneOptions.find((timezone) => timezone.value === selectedTimezone)?.label : 'Pilih Zona Waktu'}
                        </span>
                        <HugeiconsIcon icon={ArrowDown01Icon} size={18} className={`transition-transform duration-300 ${isTimezoneOpen ? 'rotate-180' : ''}`}/>
                        </button>
                    </div>
                    {isTimezoneOpen && (
                        <div className="absolute top-full left-0 w-full mt-1 z-50 bg-white border border-[#a09f9f] rounded shadow-md overflow-hidden">
                            {timezoneOptions.map((timezone) => (
                                <button
                                    key={timezone.value}
                                    type="button"
                                    onClick={() => {
                                        setSelectedTimezone(timezone.value);
                                        setIsTimezoneOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 cursor-pointer transition-colors ${
                                        selectedTimezone === timezone.value
                                        ? 'bg-[#f3f3f3] text-normal-navy font-medium'
                                        : 'hover:bg-[#f7f7f7]'
                                    }`}
                                >
                                {timezone.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="btn-create">
                <button 
                    type='button' 
                    onClick={handleSaveSchool}
                    className="bg-normal-navy w-full p-3 rounded text-[#FFFFFF] cursor-pointer hover:bg-normal-hover-navy transition-all duration-300"
                >
                    {schoolSaveMutation.isPending ? "Loading..." : "Simpan & Lanjutkan"}
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SchoolRegistrationPage