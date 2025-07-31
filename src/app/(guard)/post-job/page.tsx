"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Briefcase,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PostJobPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebsite: "",
    companySize: "",
    companyDescription: "",

    jobTitle: "",
    department: "",
    jobType: "",
    workLocation: "",
    salaryType: "",
    salaryMin: "",
    salaryMax: "",
    currency: "USD",

    jobDescription: "",
    responsibilities: "",
    requirements: "",
    benefits: "",

    applicationDeadline: "",
    applicationMethod: "platform",
    externalUrl: "",
    contactEmail: "",

    experienceLevel: "",
    skills: [] as string[],
    isRemote: false,
    isUrgent: false,
  });

  const totalSteps = 4;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const router = useRouter();

  const handleSubmit = () => {
    console.log("Job posting data:", formData);
    router.push("/checkout");
  };

  const commonSkills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "TypeScript",
    "SQL",
    "AWS",
    "Docker",
    "Git",
    "Agile",
    "Scrum",
    "Project Management",
    "Marketing",
    "Sales",
    "Design",
    "UI/UX",
    "Data Analysis",
    "Machine Learning",
    "DevOps",
    "Kubernetes",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Post a Job
                </span>
              </div>
            </div>
            <Badge
              variant="outline"
              className="dark:border-gray-600 dark:text-gray-300"
            >
              Step {currentStep} of {totalSteps}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i + 1 <= currentStep
                      ? "bg-primary text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {i + 1 <= currentStep ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    i + 1
                  )}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      i + 1 < currentStep
                        ? "bg-primary"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
            <span>Company Info</span>
            <span>Job Details</span>
            <span>Description</span>
            <span>Review & Post</span>
          </div>
        </div>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              {currentStep === 1 && "Company Information"}
              {currentStep === 2 && "Job Details"}
              {currentStep === 3 && "Job Description"}
              {currentStep === 4 && "Review & Post"}
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              {currentStep === 1 && "Tell us about your company"}
              {currentStep === 2 && "Provide job specifics and requirements"}
              {currentStep === 3 && "Describe the role and responsibilities"}
              {currentStep === 4 && "Review your job posting before publishing"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="companyName"
                      className="text-gray-900 dark:text-white"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      placeholder="Enter company name"
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="companyWebsite"
                      className="text-gray-900 dark:text-white"
                    >
                      Company Website
                    </Label>
                    <Input
                      id="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={(e) =>
                        handleInputChange("companyWebsite", e.target.value)
                      }
                      placeholder="https://company.com"
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="companySize"
                    className="text-gray-900 dark:text-white"
                  >
                    Company Size
                  </Label>
                  <Select
                    value={formData.companySize}
                    onValueChange={(value) =>
                      handleInputChange("companySize", value)
                    }
                  >
                    <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">
                        501-1000 employees
                      </SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="companyDescription"
                    className="text-gray-900 dark:text-white"
                  >
                    Company Description
                  </Label>
                  <Textarea
                    id="companyDescription"
                    value={formData.companyDescription}
                    onChange={(e) =>
                      handleInputChange("companyDescription", e.target.value)
                    }
                    placeholder="Brief description of your company..."
                    rows={4}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="jobTitle"
                      className="text-gray-900 dark:text-white"
                    >
                      Job Title *
                    </Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) =>
                        handleInputChange("jobTitle", e.target.value)
                      }
                      placeholder="e.g. Senior Software Engineer"
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="department"
                      className="text-gray-900 dark:text-white"
                    >
                      Department
                    </Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) =>
                        handleInputChange("department", value)
                      }
                    >
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-900 dark:text-white">
                      Job Type *
                    </Label>
                    <RadioGroup
                      value={formData.jobType}
                      onValueChange={(value) =>
                        handleInputChange("jobType", value)
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-time" id="full-time" />
                        <Label
                          htmlFor="full-time"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Full-time
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="part-time" id="part-time" />
                        <Label
                          htmlFor="part-time"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Part-time
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contract" id="contract" />
                        <Label
                          htmlFor="contract"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Contract
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="internship" id="internship" />
                        <Label
                          htmlFor="internship"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Internship
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="experienceLevel"
                      className="text-gray-900 dark:text-white"
                    >
                      Experience Level
                    </Label>
                    <Select
                      value={formData.experienceLevel}
                      onValueChange={(value) =>
                        handleInputChange("experienceLevel", value)
                      }
                    >
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                        <SelectItem value="entry">
                          Entry Level (0-2 years)
                        </SelectItem>
                        <SelectItem value="mid">
                          Mid Level (2-5 years)
                        </SelectItem>
                        <SelectItem value="senior">
                          Senior Level (5-8 years)
                        </SelectItem>
                        <SelectItem value="lead">
                          Lead/Principal (8+ years)
                        </SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="workLocation"
                    className="text-gray-900 dark:text-white"
                  >
                    Work Location *
                  </Label>
                  <Input
                    id="workLocation"
                    value={formData.workLocation}
                    onChange={(e) =>
                      handleInputChange("workLocation", e.target.value)
                    }
                    placeholder="e.g. New York, NY or Remote"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isRemote"
                    checked={formData.isRemote}
                    onCheckedChange={(checked) =>
                      handleInputChange("isRemote", checked)
                    }
                  />
                  <Label
                    htmlFor="isRemote"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Remote work available
                  </Label>
                </div>

                <div className="space-y-4">
                  <Label className="text-gray-900 dark:text-white">
                    Salary Information
                  </Label>
                  <RadioGroup
                    value={formData.salaryType}
                    onValueChange={(value) =>
                      handleInputChange("salaryType", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="range" id="range" />
                      <Label
                        htmlFor="range"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Salary Range
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fixed" id="fixed" />
                      <Label
                        htmlFor="fixed"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Fixed Salary
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="negotiable" id="negotiable" />
                      <Label
                        htmlFor="negotiable"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Negotiable
                      </Label>
                    </div>
                  </RadioGroup>

                  {(formData.salaryType === "range" ||
                    formData.salaryType === "fixed") && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="currency"
                          className="text-gray-900 dark:text-white"
                        >
                          Currency
                        </Label>
                        <Select
                          value={formData.currency}
                          onValueChange={(value) =>
                            handleInputChange("currency", value)
                          }
                        >
                          <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                            <SelectItem value="GBP">GBP (£)</SelectItem>
                            <SelectItem value="CAD">CAD (C$)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="salaryMin"
                          className="text-gray-900 dark:text-white"
                        >
                          {formData.salaryType === "range"
                            ? "Min Salary"
                            : "Salary"}
                        </Label>
                        <Input
                          id="salaryMin"
                          type="number"
                          value={formData.salaryMin}
                          onChange={(e) =>
                            handleInputChange("salaryMin", e.target.value)
                          }
                          placeholder="50000"
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                      {formData.salaryType === "range" && (
                        <div className="space-y-2">
                          <Label
                            htmlFor="salaryMax"
                            className="text-gray-900 dark:text-white"
                          >
                            Max Salary
                          </Label>
                          <Input
                            id="salaryMax"
                            type="number"
                            value={formData.salaryMax}
                            onChange={(e) =>
                              handleInputChange("salaryMax", e.target.value)
                            }
                            placeholder="80000"
                            className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Job Description */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="jobDescription"
                    className="text-gray-900 dark:text-white"
                  >
                    Job Description *
                  </Label>
                  <Textarea
                    id="jobDescription"
                    value={formData.jobDescription}
                    onChange={(e) =>
                      handleInputChange("jobDescription", e.target.value)
                    }
                    placeholder="Provide a detailed description of the role..."
                    rows={6}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="responsibilities"
                    className="text-gray-900 dark:text-white"
                  >
                    Key Responsibilities
                  </Label>
                  <Textarea
                    id="responsibilities"
                    value={formData.responsibilities}
                    onChange={(e) =>
                      handleInputChange("responsibilities", e.target.value)
                    }
                    placeholder="• Develop and maintain web applications&#10;• Collaborate with cross-functional teams&#10;• Write clean, maintainable code"
                    rows={5}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="requirements"
                    className="text-gray-900 dark:text-white"
                  >
                    Requirements *
                  </Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) =>
                      handleInputChange("requirements", e.target.value)
                    }
                    placeholder="• Bachelor's degree in Computer Science or related field&#10;• 3+ years of experience with React&#10;• Strong problem-solving skills"
                    rows={5}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="benefits"
                    className="text-gray-900 dark:text-white"
                  >
                    Benefits & Perks
                  </Label>
                  <Textarea
                    id="benefits"
                    value={formData.benefits}
                    onChange={(e) =>
                      handleInputChange("benefits", e.target.value)
                    }
                    placeholder="• Health insurance&#10;• 401(k) matching&#10;• Flexible work hours&#10;• Professional development budget"
                    rows={4}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-900 dark:text-white">
                    Required Skills
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {commonSkills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <Label
                          htmlFor={skill}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="applicationDeadline"
                    className="text-gray-900 dark:text-white"
                  >
                    Application Deadline
                  </Label>
                  <Input
                    id="applicationDeadline"
                    type="date"
                    value={formData.applicationDeadline}
                    onChange={(e) =>
                      handleInputChange("applicationDeadline", e.target.value)
                    }
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isUrgent"
                    checked={formData.isUrgent}
                    onCheckedChange={(checked) =>
                      handleInputChange("isUrgent", checked)
                    }
                  />
                  <Label
                    htmlFor="isUrgent"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    Mark as urgent hiring
                  </Label>
                </div>
              </div>
            )}

            {/* Step 4: Review & Post */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Job Posting Preview
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {formData.jobTitle}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {formData.companyName}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {formData.workLocation}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {formData.jobType}
                        </div>
                        {formData.salaryType !== "negotiable" && (
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {formData.salaryType === "range"
                              ? `${formData.currency} ${formData.salaryMin} - ${formData.salaryMax}`
                              : `${formData.currency} ${formData.salaryMin}`}
                          </div>
                        )}
                      </div>
                    </div>

                    {formData.jobDescription && (
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Job Description
                        </h5>
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                          {formData.jobDescription}
                        </p>
                      </div>
                    )}

                    {formData.skills.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Required Skills
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {formData.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="dark:bg-gray-600 dark:text-gray-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Application Settings
                  </h3>

                  <div className="space-y-2">
                    <Label className="text-gray-900 dark:text-white">
                      How should candidates apply?
                    </Label>
                    <RadioGroup
                      value={formData.applicationMethod}
                      onValueChange={(value) =>
                        handleInputChange("applicationMethod", value)
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="platform" id="platform" />
                        <Label
                          htmlFor="platform"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Through JOB HZ platform (Recommended)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label
                          htmlFor="email"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          Via email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="external" id="external" />
                        <Label
                          htmlFor="external"
                          className="text-gray-700 dark:text-gray-300"
                        >
                          External website
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.applicationMethod === "email" && (
                    <div className="space-y-2">
                      <Label
                        htmlFor="contactEmail"
                        className="text-gray-900 dark:text-white"
                      >
                        Contact Email
                      </Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) =>
                          handleInputChange("contactEmail", e.target.value)
                        }
                        placeholder="hr@company.com"
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  )}

                  {formData.applicationMethod === "external" && (
                    <div className="space-y-2">
                      <Label
                        htmlFor="externalUrl"
                        className="text-gray-900 dark:text-white"
                      >
                        Application URL
                      </Label>
                      <Input
                        id="externalUrl"
                        type="url"
                        value={formData.externalUrl}
                        onChange={(e) =>
                          handleInputChange("externalUrl", e.target.value)
                        }
                        placeholder="https://company.com/careers/apply"
                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-600">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 bg-transparent"
              >
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  className="bg-primary hover:bg-primary/90"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Post Job
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                  Pricing Information
                </h3>
                <p className="text-blue-700 dark:text-blue-200 mt-1">
                  This job posting will cost <strong>$49</strong> and will be
                  live for 30 days. You&apos;ll receive unlimited applications
                  and basic filtering tools.
                </p>
                <Link
                  href="/#pricing"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2 inline-block"
                >
                  View all pricing plans →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
