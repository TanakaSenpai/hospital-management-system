import React from "react";
import DashboardCard from "@/app/admin/pages/components/DashboardCard";

const AdminDashboard = () => {
  return (
    <div className="flex mt-12 container gap-8">
      <DashboardCard styles="bg-primary" title="Doctors" number={4} />
      <DashboardCard styles="bg-green-400" title="Assistants" number={3} />
      <DashboardCard styles="bg-emerald-400" title="Appointments" number={14} />
    </div>
  );
};

export default AdminDashboard;
