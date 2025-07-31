"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Briefcase,
  Heart,
  Home,
  LogIn,
  LogOut,
  Menu,
  PlusCircle,
  Search,
  Settings,
  User,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileNavProps {
  isLoggedIn?: boolean;
  userType?: "jobseeker" | "employer";
  userName?: string;
}

export default function MobileNav({
  isLoggedIn = false,
  userType = "jobseeker",
  userName = "John Doe",
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => setIsOpen(false);

  const mainNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/jobs", label: "Browse Jobs", icon: Search },
  ];

  const jobSeekerItems = [
    { href: "/saved-jobs", label: "Saved Jobs", icon: Heart },
    { href: "/applications", label: "My Applications", icon: Briefcase },
  ];

  const employerItems = [
    {
      href: "/post-job",
      label: "Post a Job",
      icon: PlusCircle,
      highlight: true,
    },
    { href: "/my-jobs", label: "My Job Posts", icon: Briefcase },
    { href: "/candidates", label: "Candidates", icon: User },
  ];

  const accountItems = [
    { href: "/profile", label: "Profile", icon: User },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] sm:w-[350px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800"
      >
        <SheetHeader className="text-left pb-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={closeNav}
            >
              <Briefcase className="h-6 w-6 text-primary" />
              <SheetTitle className="text-xl font-bold text-gray-900 dark:text-white">
                JOB HZ
              </SheetTitle>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={closeNav}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex flex-col gap-1 py-4">
          {isLoggedIn && (
            <>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {userName}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                    >
                      {userType === "jobseeker" ? "Job Seeker" : "Employer"}
                    </Badge>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeNav}>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-11 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <Separator className="my-4 bg-gray-200 dark:bg-gray-700" />

          {isLoggedIn && (
            <>
              <div className="space-y-1">
                <p className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {userType === "jobseeker" ? "Job Seeker" : "Employer"}
                </p>

                {userType === "jobseeker"
                  ? jobSeekerItems.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeNav}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start gap-3 h-11 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                        </Button>
                      </Link>
                    ))
                  : employerItems.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeNav}>
                        <Button
                          variant={item.highlight ? "default" : "ghost"}
                          className={`w-full justify-start gap-3 h-11 ${
                            item.highlight
                              ? "bg-primary hover:bg-primary/90 text-white"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                          }`}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                          {item.highlight && (
                            <Badge
                              variant="secondary"
                              className="ml-auto bg-white/20 text-white text-xs"
                            >
                              New
                            </Badge>
                          )}
                        </Button>
                      </Link>
                    ))}
              </div>

              <Separator className="my-4 bg-gray-200 dark:bg-gray-700" />

              <div className="space-y-1">
                <p className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Account
                </p>

                {accountItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeNav}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 h-11 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  </Link>
                ))}

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-11 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-700 dark:hover:text-red-300"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Sign Out</span>
                </Button>
              </div>
            </>
          )}

          {!isLoggedIn && (
            <>
              <div className="space-y-2 pt-2">
                <Link href="/login" onClick={closeNav}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-11 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  >
                    <LogIn className="h-5 w-5" />
                    <span className="font-medium">Sign In</span>
                  </Button>
                </Link>

                <Link href="/register" onClick={closeNav}>
                  <Button className="w-full justify-start gap-3 h-11 bg-primary hover:bg-primary/90 text-white">
                    <UserPlus className="h-5 w-5" />
                    <span className="font-medium">Get Started</span>
                  </Button>
                </Link>
              </div>

              <Separator className="my-4 bg-gray-200 dark:bg-gray-700" />

              <div className="space-y-1">
                <p className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Quick Actions
                </p>

                <Link href="/post-job" onClick={closeNav}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-11 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  >
                    <PlusCircle className="h-5 w-5" />
                    <span className="font-medium">Post a Job</span>
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            © 2024 JOB HZ. All rights reserved.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
