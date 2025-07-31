import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  CreditCard,
  Home,
  Mail,
} from "lucide-react";
import Link from "next/link";

const plans = {
  "per-post": {
    name: "Per Post",
    price: 49,
    billing: "one-time",
    description: "Perfect for occasional hiring",
  },
  monthly: {
    name: "Monthly",
    price: 199,
    billing: "monthly",
    description: "Great for growing companies",
  },
  yearly: {
    name: "Yearly",
    price: 1999,
    billing: "yearly",
    description: "Maximum savings for active hirers",
  },
};

export default function ThankYouPage() {
  const plan = "monthly";
  const orderId = "JH-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  const selectedPlan = plans[plan as keyof typeof plans] || plans.monthly;
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12">
        <div className="text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Thank You for Your Purchase!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to JOB HZ! Your subscription has been successfully
              activated and you&apos;re ready to start posting jobs and finding
              great candidates.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="max-w-2xl mx-auto text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Order Confirmation
              </CardTitle>
              <CardDescription>
                Your payment has been processed successfully
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Info */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Order ID</p>
                  <p className="text-lg font-mono">{orderId}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg">{currentDate}</p>
                </div>
              </div>

              <Separator />

              {/* Plan Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {selectedPlan.name} Plan
                    </h3>
                    <p className="text-gray-600">{selectedPlan.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">${selectedPlan.price}</p>
                    {selectedPlan.billing !== "one-time" && (
                      <Badge variant="secondary">{selectedPlan.billing}</Badge>
                    )}
                  </div>
                </div>

                {selectedPlan.billing !== "one-time" && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-800">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Next Billing Date</span>
                    </div>
                    <p className="text-blue-700 mt-1">
                      {new Date(
                        Date.now() +
                          (selectedPlan.billing === "monthly" ? 30 : 365) *
                            24 *
                            60 *
                            60 *
                            1000
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="max-w-2xl mx-auto text-left">
            <CardHeader>
              <CardTitle>What&apos;s Next?</CardTitle>
              <CardDescription>
                Here&apos;s how to get started with JOB HZ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Check Your Email</h4>
                    <p className="text-gray-600 text-sm">
                      We&apos;ve sent you a confirmation email with your account
                      details and next steps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Set Up Your Profile</h4>
                    <p className="text-gray-600 text-sm">
                      Complete your company profile to attract the best
                      candidates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Post Your First Job</h4>
                    <p className="text-gray-600 text-sm">
                      Start hiring by creating your first job posting on the
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">
                <Briefcase className="mr-2 h-4 w-4" />
                Go to Dashboard
              </Link>
            </Button>
          </div>

          {/* Support Info */}
          <div className="bg-gray-100 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <h3 className="font-medium text-gray-900">Need Help?</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Our support team is here to help you get the most out of JOB HZ.
              Don&apos;t hesitate to reach out if you have any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:support@jobhz.com">Email Support</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/help">Help Center</Link>
              </Button>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            You can manage your subscription, update billing information, and
            view your usage at any time from your account dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
