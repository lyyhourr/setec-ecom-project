import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  LinkIcon,
} from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "Jane Doe",
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    profilePicture: "/placeholder.svg?height=100&width=100&text=JD", // Placeholder with initials
    about:
      "Highly motivated Senior Software Engineer with 7 years of experience in developing scalable web applications. Passionate about clean code, innovative solutions, and continuous learning. Seeking challenging roles to leverage expertise in full-stack development and contribute to impactful projects.",
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Agile Methodologies",
      "CI/CD",
    ],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Innovate Solutions",
        duration: "Jan 2022 - Present",
        location: "San Francisco, CA",
        description: [
          "Led development of critical microservices, improving system performance by 25%.",
          "Mentored junior engineers and conducted code reviews.",
          "Collaborated with product teams to define and implement new features.",
        ],
      },
      {
        title: "Software Engineer",
        company: "TechCorp",
        duration: "Jul 2018 - Dec 2021",
        location: "Seattle, WA",
        description: [
          "Developed and maintained front-end components using React and Redux.",
          "Contributed to backend API development with Node.js.",
          "Participated in agile sprints and daily stand-ups.",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Science in Computer Science",
        university: "Stanford University",
        duration: "2016 - 2018",
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        university: "University of California, Berkeley",
        duration: "2012 - 2016",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <h1 className="mb-8 text-3xl font-bold">My Profile</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Profile Summary Card (Left Column) */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="flex flex-col items-center gap-4 text-center pb-4">
              <Avatar className="h-28 w-28 border-2 border-primary">
                <AvatarImage
                  src={user.profilePicture || "/placeholder.svg"}
                  alt={user.name}
                />
                <AvatarFallback className="text-4xl font-semibold">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <CardTitle className="text-2xl font-bold">
                  {user.name}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {user.title}
                </CardDescription>
                <CardDescription className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-4 border-t">
              <div className="space-y-2">
                <h3 className="text-md font-semibold">Contact Information</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{user.phone}</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-md font-semibold">Social Links</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <LinkIcon className="h-4 w-4" />
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <LinkIcon className="h-4 w-4" />
                  <a
                    href={user.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {user.about}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Working Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {user.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-md text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    {exp.duration} | <MapPin className="h-3 w-3" />{" "}
                    {exp.location}
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    {exp.description.map((desc, dIndex) => (
                      <li key={dIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-b pb-3 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-md text-muted-foreground">
                    {edu.university}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <GraduationCap className="h-3 w-3" />
                    {edu.duration}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
