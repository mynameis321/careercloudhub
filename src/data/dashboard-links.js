import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/recruiter/profile",
    type: ACCOUNT_TYPE.RECRUITER,
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "My Profile",
    path: "/dashboard/applicant/profile",
    type: ACCOUNT_TYPE.APPLICANT,
    icon: "VscAccount",
  },
  {
    id: 4,
    name: "My Jobs",
    path: "/dashboard/recruiter/my-jobs",
    type: ACCOUNT_TYPE.RECRUITER,
    icon: "VscVm",
  },
  {
    id: 5,
    name: "Add Job",
    path: "/dashboard/recruiter/add-job",
    type: ACCOUNT_TYPE.RECRUITER,
    icon: "VscAdd",
  },
  {
    id: 6,
    name: "Applications",
    path: "/dashboard/applicant/my-applications",
    type: ACCOUNT_TYPE.APPLICANT,
    icon: "VscMortarBoard",
  },
  {
    id: 7,
    name: "Applications",
    path: "/dashboard/recruiter/applications-received",
    type: ACCOUNT_TYPE.RECRUITER,
    icon: "VscMortarBoard",
  },
  {
    id: 8,
    name: "My Profile",
    path: "/dashboard/admin/profile",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAccount",
  },
  {
    id: 9,
    name: "Create Admin",
    path: "/dashboard/admin/create-admin",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 10,
    name: "Add Category",
    path: "/dashboard/admin/create-category",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 11,
    name: "Categories",
    path: "/dashboard/admin/categories",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscMortarBoard",
  },
  {
    id: 12,
    name: "Recruiters",
    path: "/dashboard/admin/recruiters",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscMortarBoard",
  },
  {
    id: 13,
    name: "Applicants",
    path: "/dashboard/admin/applicants",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscMortarBoard",
  }
];
