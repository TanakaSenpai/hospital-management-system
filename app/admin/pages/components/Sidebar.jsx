import Logo from '@/app/public/components/Logo'
import NavLink from '@/app/public/components/NavLink'
import React from 'react'

const Sidebar = () => {
  const sidebarLinks = [
    {href: "/admin/pages/dashboard", label: "Dashboard"},
    {href: "/admin/pages/doctors", label: "Doctors"},
    {href: "/admin/pages/assistants", label: "Assistants"},
    {href: "/admin/pages/appointments", label: "Appointments"},
    {href: "/admin/pages/add-doctor", label: "Add Doctor"},
    {href: "/admin/pages/add-assistant", label: "Add Assistant"},
    {href: "#", label: "Log out"},
  ]
  return (
    <div className='flex flex-col p-10 bg-slate-200 h-screen'>
      <div className="mb-20">
        <Logo />
      </div>
      <div className="flex flex-col gap-4  text-xl">
        {sidebarLinks.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
