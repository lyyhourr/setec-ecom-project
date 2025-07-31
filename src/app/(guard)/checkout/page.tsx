"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  CreditCard,
  Shield,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const plans = {
  "per-post": {
    name: "Per Post",
    price: 49,
    billing: "one-time",
    description: "Perfect for occasional hiring",
    features: [
      "Single job posting",
      "30-day listing duration",
      "Unlimited applications",
      "Basic applicant filtering",
      "Email support",
    ],
  },
  monthly: {
    name: "Monthly",
    price: 199,
    billing: "monthly",
    description: "Great for growing companies",
    features: [
      "Up to 5 job postings",
      "60-day listing duration",
      "Unlimited applications",
      "Advanced applicant filtering",
      "Priority support",
      "Analytics dashboard",
    ],
  },
  yearly: {
    name: "Yearly",
    price: 1999,
    billing: "yearly",
    description: "Maximum savings for active hirers",
    originalPrice: 2388,
    features: [
      "Up to 60 job postings",
      "90-day listing duration",
      "Unlimited applications",
      "Premium applicant filtering",
      "Dedicated account manager",
      "Advanced analytics",
      "Featured job listings",
    ],
  },
};

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] =
    useState<keyof typeof plans>("monthly");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [billingInfo, setBillingInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  });
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const currentPlan = plans[selectedPlan];
  const tax = Math.round(currentPlan.price * 0.08 * 100) / 100;
  const total = currentPlan.price + tax;
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("thanks-you");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">JOB HZ</span>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-600">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Plan Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Your Plan</CardTitle>
                <CardDescription>
                  Choose the plan that best fits your hiring needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedPlan}
                  onValueChange={(value) =>
                    setSelectedPlan(value as keyof typeof plans)
                  }
                >
                  <div className="space-y-4">
                    {Object.entries(plans).map(([key, plan]) => (
                      <div
                        key={key}
                        className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <RadioGroupItem value={key} id={key} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label
                                htmlFor={key}
                                className="text-base font-medium cursor-pointer"
                              >
                                {plan.name}
                              </Label>
                              <p className="text-sm text-gray-600">
                                {plan.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold">
                                ${plan.price}
                                {plan.billing !== "one-time" && (
                                  <span className="text-sm font-normal">
                                    /{plan.billing === "monthly" ? "mo" : "yr"}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>Enter your billing details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={billingInfo.email}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          email: e.target.value,
                        })
                      }
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={billingInfo.company}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          company: e.target.value,
                        })
                      }
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={billingInfo.firstName}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          firstName: e.target.value,
                        })
                      }
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={billingInfo.lastName}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          lastName: e.target.value,
                        })
                      }
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={billingInfo.address}
                    onChange={(e) =>
                      setBillingInfo({
                        ...billingInfo,
                        address: e.target.value,
                      })
                    }
                    placeholder="123 Main Street"
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={billingInfo.city}
                      onChange={(e) =>
                        setBillingInfo({ ...billingInfo, city: e.target.value })
                      }
                      placeholder="New York"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={billingInfo.state}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          state: e.target.value,
                        })
                      }
                      placeholder="NY"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={billingInfo.zipCode}
                      onChange={(e) =>
                        setBillingInfo({
                          ...billingInfo,
                          zipCode: e.target.value,
                        })
                      }
                      placeholder="10001"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select
                    value={billingInfo.country}
                    onValueChange={(value) =>
                      setBillingInfo({ ...billingInfo, country: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="AU">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>
                  Choose how you&apos;d like to pay
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <CreditCard className="h-4 w-4" />
                    <Label htmlFor="card" className="cursor-pointer">
                      Credit/Debit Card
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-4">
                    <div>
                      <Label htmlFor="cardName">Name on Card *</Label>
                      <Input
                        id="cardName"
                        value={cardInfo.name}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, name: e.target.value })
                        }
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        value={cardInfo.number}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, number: e.target.value })
                        }
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="expiry">Expiry Date *</Label>
                        <Input
                          id="expiry"
                          value={cardInfo.expiry}
                          onChange={(e) =>
                            setCardInfo({ ...cardInfo, expiry: e.target.value })
                          }
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC *</Label>
                        <Input
                          id="cvc"
                          value={cardInfo.cvc}
                          onChange={(e) =>
                            setCardInfo({ ...cardInfo, cvc: e.target.value })
                          }
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{currentPlan.name} Plan</span>
                    <Badge variant="secondary">{currentPlan.billing}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {currentPlan.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Included Features:</h4>
                  <ul className="space-y-1">
                    {currentPlan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${currentPlan.price}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                  {currentPlan.billing !== "one-time" && (
                    <p className="text-xs text-gray-600">
                      Billed {currentPlan.billing}. Cancel anytime.
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) =>
                      setAgreeToTerms(checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="terms"
                    className="text-xs text-gray-600 cursor-pointer"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                  disabled={!agreeToTerms}
                  onClick={handleSubmit}
                >
                  Complete Purchase
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <Shield className="h-3 w-3" />
                  <span>Secured by 256-bit SSL encryption</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
