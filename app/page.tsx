"use client";

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
    CheckCircle,
    Clock,
    MapPin,
    Camera,
    CreditCard,
    Shield,
    Bell,
    Star,
    Quote,
} from "lucide-react";

export default function StaffSynkLanding() {
    return (
        <div className="min-h-screen bg-background">
            <nav className="sticky top-0 z-50 bg-[#4F1C51] shadow-lg">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    src="/heading-logo.svg"
                                    alt="StaffSynk Logo"
                                    className="h-18 w-auto filter brightness-0 invert"
                                />
                            </div>
                        </div>
                        <Button
                            variant="secondary"
                            size="sm"
                            className="bg-white text-[#4F1C51] hover:bg-gray-100 font-medium"
                            onClick={() =>
                                document
                                    .getElementById("pricing")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }>
                            View Plans
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden gradient-mesh px-6 py-20 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="heading-primary text-4xl lg:text-6xl text-foreground leading-tight">
                                    Simplifying workforce management,{" "}
                                    <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                        anytime, anywhere
                                    </span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                                    Sync managers, staff, and clients seamlessly
                                    with our comprehensive workforce management
                                    platform. From scheduling to payroll, we've
                                    got you covered.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="text-lg px-8 py-6 glow-effect hover:shadow-lg transition-all duration-300">
                                    Get Started
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 transition-all duration-300">
                                    Book a Demo
                                </Button>
                            </div>
                        </div>
                        <div className="relative floating-animation">
                            <div className="relative mx-auto w-64  bg-gray-900 rounded-[2.5rem] border-[14px] border-gray-900 shadow-2xl">
                                <div className="w-full h-full bg-gray-800 rounded-[2rem] overflow-hidden">
                                    <img
                                        src="./worker.png"
                                        alt="App Screenshot"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Power Button */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="heading-secondary text-3xl lg:text-4xl text-foreground">
                            Everything you need to manage your workforce
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Powerful features designed to streamline operations
                            and boost productivity
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Clock,
                                title: "Smart Shift Scheduling",
                                description:
                                    "Automated scheduling with conflict detection and staff availability tracking",
                            },
                            {
                                icon: MapPin,
                                title: "Real-Time GPS Attendance",
                                description:
                                    "Location-based check-ins with geofencing for accurate time tracking",
                            },
                            {
                                icon: Camera,
                                title: "Digital Proof of Work",
                                description:
                                    "Photo reports, checklists, and documentation for quality assurance",
                            },
                            {
                                icon: CreditCard,
                                title: "Automated Payroll & Payments",
                                description:
                                    "Seamless payroll processing with integrated payment systems",
                            },
                            {
                                icon: Shield,
                                title: "Compliance & Certification",
                                description:
                                    "Track certifications, licenses, and regulatory compliance automatically",
                            },
                            {
                                icon: Bell,
                                title: "Instant Notifications",
                                description:
                                    "Push, SMS, and email alerts for schedules, updates, and emergencies",
                            },
                        ].map((feature, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="heading-secondary text-xl">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 pt-20 pb-10 lg:px-8 bg-secondary/30">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="heading-secondary text-3xl lg:text-4xl text-foreground">
                            Trusted by thousands of businesses
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            See what our customers have to say
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Operations Manager",
                                company: "CleanPro Services",
                                content:
                                    "StaffSynk has revolutionized how we manage our cleaning crews. The GPS tracking and automated scheduling have saved us hours every week.",
                                rating: 5,
                            },
                            {
                                name: "Michael Chen",
                                role: "HR Director",
                                company: "TechStart Solutions",
                                content:
                                    "The compliance tracking feature is a game-changer. We never miss certification renewals anymore, and our audit process is seamless.",
                                rating: 5,
                            },
                            {
                                name: "Lisa Rodriguez",
                                role: "Restaurant Owner",
                                company: "Bella Vista Restaurants",
                                content:
                                    "Managing shifts across three locations used to be a nightmare. Now it's effortless with StaffSynk's intelligent scheduling system.",
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-primary text-primary"
                                                />
                                            )
                                        )}
                                    </div>
                                    <Quote className="w-8 h-8 text-primary/30 mb-2" />
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground italic">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-sm text-primary font-medium">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Plans Section */}
            <section id="pricing" className="px-6 pt-30 pb-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="heading-secondary text-3xl lg:text-4xl text-foreground">
                            Choose the perfect plan for your team
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Flexible pricing that scales with your business
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-4 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Starter Plan",
                                employees: "10-15 employees",
                                price: "$29",
                                features: [
                                  "Advanced scheduling",
                                  "GPS attendance",
                                  "Payroll integration",
                                  "Priority support",
                                  "Custom reports",
                                  "Dedicated support",
                                ],
                            },
                            {
                                name: "Growth Plan",
                                employees: "15-25 employees",
                                price: "$59",
                                popular: true,
                                features: [
                                    "Advanced scheduling",
                                    "GPS attendance",
                                    "Payroll integration",
                                    "Priority support",
                                    "Custom reports",
                                    "Dedicated support",
                                ],
                            },
                            {
                                name: "Pro Plan",
                                employees: "25-50 employees",
                                price: "$99",
                                features: [
                                  "Advanced scheduling",
                                  "GPS attendance",
                                  "Payroll integration",
                                  "Priority support",
                                  "Custom reports",
                                  "Dedicated support",
                                ],
                            },
                            {
                                name: "Enterprise Plan",
                                employees: "50+ employees",
                                price: "Custom",
                                custom: true,
                                features: [
                                    "All Basic features",
                                    "Dedicated app option",
                                    "Custom onboarding",
                                    "Premium support",
                                    "Tailored to your needs",
                                ],
                            },
                        ].map((plan, index) => (
                            <Card
                                key={index}
                                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                                    plan.popular
                                        ? "ring-2 ring-primary scale-105 glow-effect"
                                        : ""
                                } ${
                                    plan.custom
                                        ? "ring-2 ring-purple-800 border-purple-800/20"
                                        : ""
                                }`}>
                                {plan.popular && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                                        Most Popular
                                    </Badge>
                                )}
                                {plan.custom && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-800 text-white">
                                        Custom Solution
                                    </Badge>
                                )}
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="heading-secondary text-2xl">
                                        {plan.name}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        {plan.employees}
                                    </CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-foreground">
                                            {plan.price}
                                        </span>
                                        {plan.price !== "Custom" && (
                                            <span className="text-muted-foreground">
                                                /month
                                            </span>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {plan.features.map(
                                        (feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-sm">
                                                    {feature}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className={`w-full transition-all duration-300 ${
                                            plan.popular ? "glow-effect" : ""
                                        } ${
                                            plan.custom
                                                ? "bg-purple-800 hover:bg-purple-600"
                                                : ""
                                        }`}
                                        variant={
                                            plan.popular
                                                ? "default"
                                                : plan.custom
                                                ? "default"
                                                : "outline"
                                        }
                                        size="lg">
                                        {plan.custom
                                            ? "Contact Us"
                                            : "Get Started"}
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA Section */}
            <section className="px-6 py-20 lg:px-8 gradient-mesh">
                <div className="mx-auto max-w-4xl text-center space-y-8">
                    <h2 className="heading-primary text-3xl lg:text-5xl text-foreground leading-tight">
                        Simplify staff scheduling, compliance, and payroll with{" "}
                        <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            StaffSynk
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Join thousands of businesses who trust StaffSynk to
                        manage their workforce efficiently and effectively.
                    </p>
                    <Button
                        size="lg"
                        className="text-lg px-12 py-6 glow-effect hover:shadow-lg transition-all duration-300">
                        Start Your Free Trial
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-foreground text-background px-6 py-12 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="space-y-4">
                            <h3 className="heading-secondary text-xl text-background">
                                StaffSynk
                            </h3>
                            <p className="text-background/80">
                                Simplifying workforce management for modern
                                businesses.
                            </p>
                            <p className="text-background/60 text-sm">
                                A product of{" "}
                                <a
                                    href="https://synkflow.cloud"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-background transition-colors">
                                    Synkflow Technologies
                                </a>
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-background">
                                Product
                            </h4>
                            <ul className="space-y-2 text-background/80">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors">
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-background">
                                Company
                            </h4>
                            <ul className="space-y-2 text-background/80">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-background">
                                Legal
                            </h4>
                            <ul className="space-y-2 text-background/80">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-background transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
                        <p>&copy; 2025 StaffSynk. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
