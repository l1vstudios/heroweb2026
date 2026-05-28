"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import {
  Home,
  Folder,
  Users,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Activity,
  Code,
  Pencil,
  Globe,
  HandGrab,
  HandHeart,
  Book,
  Video,
} from "lucide-react";
import { BiMoney } from "react-icons/bi";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR */}
      <aside
        className={`
          ${open ? "w-72" : "w-20"}
          bg-white border-r border-slate-200
          transition-all duration-300 flex flex-col shadow-xl
        `}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-3 ${!open && "justify-center"}`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                <Activity className="text-white" size={20} />
              </div>
              {open && (
                <div>
                  <h2 className="text-lg font-bold text-blue-600">
                    Admin Panel
                  </h2>
                  <p className="text-xs text-slate-500">Manage your system</p>
                </div>
              )}
            </div>

            {open && (
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-600" />
              </button>
            )}
          </div>

          {!open && (
            <button
              onClick={() => setOpen(!open)}
              className="mt-4 w-full p-2 rounded-lg hover:bg-slate-100 transition-colors flex justify-center"
            >
              <Menu size={20} className="text-slate-600" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem
            open={open}
            icon={<Home size={20} />}
            label="Dashboard"
            active={true}
          />

          <SidebarItem
            open={open}
            icon={<Code size={20} />}
            label="Source Codes"
            active={false}
          />

          <SidebarItem
            open={open}
            icon={<Pencil size={20} />}
            label="Blog"
            active={false}
          />

          <SidebarItem
            open={open}
            icon={<Book size={20} />}
            label="Ebook"
            active={false}
          />

          <SidebarItem
            open={open}
            icon={<Video size={20} />}
            label="Video Tutorial"
            active={false}
          />

          <SidebarItem
            open={open}
            icon={<BiMoney size={20} />}
            label="Daftar Harga"
            active={false}
          />

          <SidebarItem
            open={open}
            icon={<HandGrab size={20} />}
            label="Kolaborasi"
            active={false}
          />

          <SidebarItem
            open={open}
            icon={<Globe size={20} />}
            label="Faq"
            active={false}
          />

          <SidebarItem
            open={open}
            icon={<HandHeart size={20} />}
            label="Mitra Strategis"
            active={false}
          />
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-slate-200">
          <button
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-xl
              text-slate-600 hover:bg-red-50 hover:text-red-600
              transition-all duration-200
              ${!open && "justify-center"}
            `}
          >
            <LogOut size={20} />
            {open && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Dashboard</h1>
          <p className="text-slate-600">Welcome back! Here&apos;s your overview</p>
        </div>

        {children}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Users Card */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200/60">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp size={16} />
                  <span>+12%</span>
                </div>
              </div>

              <h3 className="text-slate-500 text-sm font-medium mb-1">
                Total Users
              </h3>
              <p className="text-4xl font-bold text-slate-800">120</p>
            </div>
          </div>

          {/* Source Codes Card */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200/60">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center shadow-lg">
                  <Folder className="text-white" size={24} />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp size={16} />
                  <span>+8%</span>
                </div>
              </div>

              <h3 className="text-slate-500 text-sm font-medium mb-1">
                Source Codes
              </h3>
              <p className="text-4xl font-bold text-slate-800">58</p>
            </div>
          </div>

          {/* Visitors Today Card */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200/60">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg">
                  <Activity className="text-white" size={24} />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp size={16} />
                  <span>+24%</span>
                </div>
              </div>

              <h3 className="text-slate-500 text-sm font-medium mb-1">
                Visitors Today
              </h3>
              <p className="text-4xl font-bold text-slate-800">842</p>
            </div>
          </div>
        </div>

        {/* Additional Content Area */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/60">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Recent Activity
          </h2>
          <p className="text-slate-600">
            Your recent activities will appear here...
          </p>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  open,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
  open: boolean;
}) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-xl
        transition-all duration-200 font-medium
        ${!open && "justify-center"}
        ${
          active
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
            : "text-slate-600 hover:bg-slate-100"
        }
      `}
    >
      {icon}
      {open && <span>{label}</span>}
    </button>
  );
}
