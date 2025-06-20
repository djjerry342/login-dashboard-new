"use client"

import { DashboardHeader } from "./dashboard-header"
import { DashboardContent } from "./dashboard-content"

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <DashboardContent />
    </div>
  )
}
