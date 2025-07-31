"use client";

import Link from "next/link";
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
import { MapPin, Briefcase, DollarSign, BookmarkX } from "lucide-react";

export default function SavedJobsPage() {
  const savedJobs = [
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
      id: "3",
      title: "UX/UI Designer",
      company: "Creative Studio",
      location: "Remote",
      salary: "$90,000 - $110,000",
      description: "Design intuitive and engaging user interfaces.",
      tags: ["UI/UX", "Figma", "Prototyping"],
    },
    {
      id: "rec1",
      title: "Junior Frontend Developer",
      company: "Startup X",
      location: "Austin, TX",
      description: "Build responsive user interfaces with React.",
      tags: ["Frontend", "React", "JavaScript"],
    },
  ];

  // Placeholder for unsave action
  const handleUnsave = (jobId: string) => {
    console.log(`Unsave job with ID: ${jobId}`);
    // In a real app, you'd send a request to your backend to remove this job from saved list
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <h1 className="mb-8 text-3xl font-bold">Your Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <Card className="p-6 text-center">
          <CardTitle className="text-xl">No Saved Jobs Yet</CardTitle>
          <CardDescription className="mt-2">
            {
              "Start exploring job listings and save the ones that interest you!"
            }
          </CardDescription>
          <div className="mt-6">
            <Link href="/jobs" prefetch={false}>
              <Button>Browse Jobs</Button>
            </Link>
          </div>
        </Card>
      ) : (
        <div className="grid gap-6">
          {savedJobs.map((job) => (
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
              <CardFooter className="flex flex-col gap-2 p-4 pt-0 md:flex-row md:p-6 md:pt-6">
                <Link href={`/jobs/${job.id}`} prefetch={false}>
                  <Button variant="outline">View Details</Button>
                </Link>
                <Button
                  variant="destructive"
                  onClick={() => handleUnsave(job.id)}
                >
                  <BookmarkX className="mr-2 h-4 w-4" />
                  Unsave
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
