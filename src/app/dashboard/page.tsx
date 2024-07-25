import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

// import DashboardClient from '@/components/dashboard/DashboardClient'


async function Dashboard() {
    const session = await getServerSession()
    if (!session) {
      console.log("session", session)
        console.log('No session on Dashboard')
        redirect("/login")
    }
        
  return (
    <div className='general-dashboard-container w-full h-full lg:px-4 lg:pt-6'>
      {/* <DashboardClient /> */}
      <p>Nuevo dashboard</p>
    </div>
  )
}

export default Dashboard