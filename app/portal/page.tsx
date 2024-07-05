"use client";
import React from "react";
import { useAppSelector } from "/redux/hooks";
import { useRouter } from "next/navigation";
import AdminDashboard from "../../components/dashboards/AdminDashboard";
import StaffDashboard from "../../components/dashboards/StaffDashboard";
import StudentDashboard from "../../components/dashboards/StudentDashboard";

function Portal() {
  // const isAuthenticated = true;
  // const user = {
  //   is_student: false,
  //   is_superuser: false,
  // };

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  if (!isAuthenticated && user === null) router.push("login");

  return (
    <div className="mt-24 pr-12">
      {isAuthenticated && user.is_student && !user.is_superuser && (
        <StudentDashboard />
      )}
      {isAuthenticated && !user.is_student && !user.is_superuser && (
        <StaffDashboard />
      )}
      {isAuthenticated && !user.is_student && user.is_superuser && (
        <AdminDashboard />
      )}
    </div>
  );
}

export default Portal;
