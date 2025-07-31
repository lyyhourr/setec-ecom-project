import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ListFilter,
  MapPin,
  Briefcase,
  DollarSign,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function JobListingPage() {
  const jobListings = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      salary: "$150,000 - $180,000",
      description: "Develop and maintain high-performance web applications.",
      tags: ["Full-stack", "React", "Node.js", "AWS"],
    },
    {
      id: "2",
      title: "Product Manager",
      company: "Innovate Co.",
      location: "New York, NY",
      salary: "$120,000 - $140,000",
      description: "Define product vision and strategy for new features.",
      tags: ["Product Management", "Agile", "UX"],
    },
    {
      id: "3",
      title: "UX/UI Designer",
      company: "Creative Studio",
      location: "Remote",
      salary: "$90,000 - $110,000",
      description: "Design intuitive and engaging user interfaces.",
      tags: ["UI/UX", "Figma", "Prototyping"],
    },
    {
      id: "4",
      title: "Data Scientist",
      company: "Data Insights LLC",
      location: "Seattle, WA",
      salary: "$130,000 - $160,000",
      description: "Analyze large datasets to extract actionable insights.",
      tags: ["Data Science", "Python", "Machine Learning"],
    },
  ];

  const recommendedJobs = [
    {
      id: "rec1",
      title: "Junior Frontend Developer",
      company: "Startup X",
      location: "Austin, TX",
      description: "Build responsive user interfaces with React.",
    },
    {
      id: "rec2",
      title: "Marketing Specialist",
      company: "Global Brands",
      location: "London, UK",
      description: "Develop and execute digital marketing campaigns.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <h1 className="mb-8 text-3xl font-bold">JOB HZ - Job Listings</h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        {/* Main Job Listings Section */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search for jobs..."
                className="w-full pl-9"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent"
                >
                  <ListFilter className="h-4 w-4" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm p-0">
                <SheetHeader className="px-6 py-4 border-b">
                  <SheetTitle>Filter Jobs</SheetTitle>
                  <SheetDescription>
                    Refine your job search with the options below.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-6 py-6 px-6 overflow-y-auto">
                  <div className="space-y-4 pb-4 border-b">
                    <h3 className="text-lg font-semibold">Job Type</h3>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="full-time" />
                        <Label htmlFor="full-time">Full-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="part-time" />
                        <Label htmlFor="part-time">Part-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contract" />
                        <Label htmlFor="contract">Contract</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="internship" />
                        <Label htmlFor="internship">Internship</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pb-4 border-b">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remote" />
                        <Label htmlFor="remote">Remote</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="on-site" />
                        <Label htmlFor="on-site">On-site</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hybrid" />
                        <Label htmlFor="hybrid">Hybrid</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Experience Level</h3>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="entry-level" />
                        <Label htmlFor="entry-level">Entry Level</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mid-level" />
                        <Label htmlFor="mid-level">Mid Level</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="senior-level" />
                        <Label htmlFor="senior-level">Senior Level</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <SheetFooter className="px-6 py-4 border-t">
                  <Button className="w-full">Apply Filters</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <h2 className="text-2xl font-bold">All Job Listings</h2>
          <div className="grid gap-6">
            {jobListings.map((job) => (
              <Card
                key={job.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <CardHeader className="flex-1">
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    {job.company}
                  </CardDescription>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </CardDescription>
                  {job.salary && (
                    <CardDescription className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 p-4 md:p-6 md:pl-0">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="p-4 pt-0 md:p-6 md:pt-6">
                  <Link href={`/jobs/${job.id}`} prefetch={false}>
                    <Button>View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Jobs Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recommended for you</h2>
          <div className="grid gap-4">
            {recommendedJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    {job.company}
                  </CardDescription>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {job.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/jobs/${job.id}`} prefetch={false}>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
