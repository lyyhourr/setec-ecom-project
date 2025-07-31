import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, CheckCircle, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";

export default async function JobDetailPage() {
  const job = {
    id: 1,
    title: "Senior Software Engineer (Full-stack)",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA (Hybrid)",
    salary: "$150,000 - $180,000 per year",
    description:
      "We are seeking a highly skilled and motivated Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining high-performance web applications, contributing to all phases of the development lifecycle. This role requires strong problem-solving skills and a passion for building scalable and robust software.",
    responsibilities: [
      "Design, develop, and deploy scalable and robust web applications using modern frameworks.",
      "Write clean, maintainable, and efficient code.",
      "Collaborate with product managers, designers, and other engineers to define and implement new features.",
      "Participate in code reviews to ensure code quality and share knowledge.",
      "Troubleshoot and debug production issues.",
      "Mentor junior engineers and contribute to team growth.",
    ],
    qualifications: [
      "Bachelor's or Master's degree in Computer Science or a related field.",
      "5+ years of experience in full-stack web development.",
      "Proficiency in React, Node.js, and TypeScript.",
      "Experience with cloud platforms (AWS, Azure, GCP) and microservices architecture.",
      "Strong understanding of database systems (SQL and NoSQL).",
      "Excellent problem-solving and communication skills.",
    ],
    benefits: [
      "Competitive salary and equity options.",
      "Comprehensive health, dental, and vision insurance.",
      "Unlimited paid time off.",
      "401(k) matching.",
      "Professional development opportunities.",
      "Flexible hybrid work model.",
    ],
    tags: [
      "Full-stack",
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "Microservices",
      "SQL",
      "NoSQL",
      "Agile",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card className="p-4 md:p-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-extrabold leading-tight">
                {job.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-base text-muted-foreground">
                <Briefcase className="h-4 w-4" />
                {job.company}
              </CardDescription>
              <CardDescription className="flex items-center gap-2 text-base text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {job.location}
              </CardDescription>
              <CardDescription className="flex items-center gap-2 text-base text-muted-foreground">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-4">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold pb-2 border-b">
                  Job Description
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold pb-2 border-b">
                  Responsibilities
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {job.responsibilities.map((res, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold pb-2 border-b">
                  Qualifications
                </h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {job.qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold pb-2 border-b">
                  Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-4 md:p-6">
            <CardContent className="p-0">
              <Button className="w-full text-lg py-6 font-semibold">
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card className="p-4 md:p-6">
            <CardHeader className="pb-4 px-0 pt-0">
              <CardTitle className="text-xl font-semibold">Benefits</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4 md:p-6">
            <CardHeader className="pb-4 px-0 pt-0">
              <CardTitle className="text-xl font-semibold">
                About {job.company}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {job.company} is a leading technology company dedicated to
                innovation and excellence. We foster a collaborative environment
                where creativity thrives and employees are empowered to make a
                significant impact. Join us to build the future!
              </p>
              <Link
                href="#"
                className="mt-4 inline-block text-sm underline text-primary hover:text-primary/80"
                prefetch={false}
              >
                Learn more about {job.company}
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
