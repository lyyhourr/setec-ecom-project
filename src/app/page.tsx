import ToggleThemeMode from "@/components/custom-ui/toggle-theme-mode";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Briefcase,
  Building,
  CheckCircle,
  Search,
  Star,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-gray-900 transition-colors">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center border-b w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <Link className="flex items-center justify-center" href="/">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
              JOB HZ
            </span>
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
              href="#pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-2">
            <ToggleThemeMode />
            <Button
              variant="ghost"
              size="sm"
              className="dark:text-gray-300 dark:hover:text-white"
            >
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="w-full pt-10 pb-16 md:pt-16 md:py-20 bg-gradient-to-br from-primary/5 to-slate-50 dark:from-primary/10 dark:to-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground">
                    {"#1 Job Platform"}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                    Connect Talent with Opportunity on{" "}
                    <span className="text-primary">JOB HZ</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                    The ultimate job finder platform where employers post
                    opportunities and job seekers discover their next career
                    move. Simple, efficient, and results-driven.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/jobs">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Find Jobs
                      <Search className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      variant="outline"
                      size="lg"
                      className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 bg-transparent"
                    >
                      Post a Job
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>50K+ Job Seekers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    <span>5K+ Companies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>10K+ Jobs Posted</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/hero.png"
                  width="600"
                  height="400"
                  alt="JOB HZ Dashboard"
                  className="rounded-xl shadow-2xl dark:shadow-gray-900/50"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                  Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Everything You Need for Successful Hiring
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  JOB HZ provides powerful tools for employers to post jobs and
                  manage applications, while giving job seekers the best
                  experience to find their dream job.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Easy Job Posting
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Post jobs in minutes with our intuitive interface. Add
                        job descriptions, requirements, and company details
                        effortlessly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Smart Application Management
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Receive and manage applications efficiently. Filter,
                        sort, and communicate with candidates seamlessly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Targeted Job Matching
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our algorithm matches qualified candidates with relevant
                        job opportunities for better hiring outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                  How It Works
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Simple Process, Powerful Results
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                    1
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Employers Post Jobs
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Companies create detailed job listings with requirements,
                      salary, and company information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Job Seekers Browse & Apply
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Candidates search through opportunities and apply to
                      positions that match their skills and interests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Connect & Hire
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Employers review applications, interview candidates, and
                      make successful hires through our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                  Pricing
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Simple Pricing for Employers
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Job seekers use JOB HZ completely free. Employers only pay
                  when posting jobs. Choose the plan that works best for your
                  hiring needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="relative bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Per Post
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Perfect for occasional hiring
                  </CardDescription>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    $49
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                      /post
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Single job posting
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        30-day listing duration
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Unlimited applications
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Basic applicant filtering
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Email support
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                    variant="outline"
                  >
                    Post a Job
                  </Button>
                </CardFooter>
              </Card>

              <Card className="relative border-primary/20 shadow-lg bg-white dark:bg-gray-800 dark:border-primary/30">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Monthly
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Great for growing companies
                  </CardDescription>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    $199
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Equivalent to $39.80 per post
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Up to 5 job postings
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        60-day listing duration
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Unlimited applications
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Advanced applicant filtering
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Priority support
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Analytics dashboard
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Start Monthly Plan
                  </Button>
                </CardFooter>
              </Card>

              <Card className="relative bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white">Best Value</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">
                    Yearly
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Maximum savings for active hirers
                  </CardDescription>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    $1,999
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                      /year
                    </span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Save $390 annually!
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Up to 60 job postings
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        90-day listing duration
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Unlimited applications
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Premium applicant filtering
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Dedicated account manager
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Advanced analytics
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Featured job listings
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                    variant="outline"
                  >
                    Start Yearly Plan
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>For Job Seekers:</strong> JOB HZ is completely free!
                Browse jobs, apply to positions, and connect with employers at
                no cost.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 bg-transparent"
              >
                <Users className="mr-2 h-4 w-4" />
                Join as Job Seeker - Free Forever
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                  Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  What Our Users Say
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    &quot;JOB HZ made our hiring process so much easier. We
                    found qualified candidates quickly and the pricing is very
                    reasonable.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">SM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Sarah Miller
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        HR Director, TechCorp
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    &quot;As a job seeker, I love that JOB HZ is free and has so
                    many quality job listings. Found my dream job here!&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">MJ</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Michael Johnson
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Software Developer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    &quot;The monthly subscription is perfect for our startup.
                    Great value and excellent candidate quality.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">EL</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Emily Lee
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Founder, StartupXYZ
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Hiring?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of companies and job seekers who trust JOB HZ
                  for their career and hiring needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Post Your First Job
                </Button>
                <Link href="/jobs">
                  <Button size="lg" variant="secondary">
                    <Search className="mr-2 h-4 w-4" />
                    Find Jobs (Free)
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900 dark:text-white">
                  Get In Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or want to learn more? Subscribe to our
                  newsletter for updates, or reach out to our team directly.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  By subscribing, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-2 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col gap-2 sm:flex-row items-center">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              JOB HZ
            </span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 sm:ml-4">
            © 2024 JOB HZ. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 hover:text-primary text-gray-600 dark:text-gray-400"
              href="/terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 hover:text-primary text-gray-600 dark:text-gray-400"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 hover:text-primary text-gray-600 dark:text-gray-400"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
