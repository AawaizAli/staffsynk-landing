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
                            <img
                                src="/heading-logo.svg"
                                alt="StaffSynk Logo"
                                className="h-18 w-auto filter brightness-0 invert"
                            />
                        </div>
                        <Button
                            variant="secondary"
                            size="sm"
                            className="bg-white text-[#4F1C51] hover:bg-gray-100 font-medium"
                            onClick={() =>
                                document
                                    .getElementById("custom-plan")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }>
                            Book a Demo
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
                                    className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 transition-all duration-300"
                                    onClick={() =>
                                        (window.location.href =
                                            "mailto:contact@synkflow.cloud")
                                    }>
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="px-6 pt-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="heading-secondary text-3xl lg:text-4xl text-foreground">
                            Features built for every industry
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Whether you manage hotel staff, security guards,
                            roof cleaners, or multi-site teams—StaffSynk adapts
                            to your business.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Clock,
                                title: "Smart Rostering & Poaching",
                                description:
                                    "Assign shifts, prevent overlaps, and even poach available workers from other rosters with skill, location, and availability filters.",
                            },
                            {
                                icon: MapPin,
                                title: "GPS Attendance & Geofencing",
                                description:
                                    "Clock in/out with live GPS verification, site-specific geofences, and late clock-in alerts to managers.",
                            },
                            {
                                icon: Camera,
                                title: "Proof of Work & Reporting",
                                description:
                                    "Photo uploads, incident logs, site checklists, and downloadable patrol or task completion reports.",
                            },
                            {
                                icon: CreditCard,
                                title: "Payroll & ABA Exports",
                                description:
                                    "Generate bank-ready ABA/CSV payment files, handle bonuses/deductions, and track real-time pay status.",
                            },
                            {
                                icon: Shield,
                                title: "Compliance & Certifications",
                                description:
                                    "Upload worker licenses, get expiry reminders (30/15/1 days), and ensure regulatory compliance across industries.",
                            },
                            {
                                icon: Bell,
                                title: "Real-Time Notifications",
                                description:
                                    "Push, SMS, and email alerts for shifts, emergencies, contract renewals, invoices, and suspicious login attempts.",
                            },
                            {
                                icon: Star,
                                title: "Client Dashboard",
                                description:
                                    "Clients can view invoices, pay online via Stripe, check staff certifications, and track live shift status.",
                            },
                            {
                                icon: Quote,
                                title: "Super Admin Control",
                                description:
                                    "Manage managers, override payments, enforce max work hours, whitelist bank IPs, and audit the entire workforce.",
                            },
                            {
                                icon: CheckCircle,
                                title: "Worker-Friendly Tools",
                                description:
                                    "Workers manage their availability, accept/reject shifts, view timesheets, upload documents, and access site instructions.",
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

            {/* Custom Plan Section */}
            <section id="custom-plan" className="px-6 pt-30 pb-20 lg:px-8">
                <div className="mx-auto max-w-4xl text-center space-y-12">
                    <Card className="relative border-0 shadow-lg ring-2 ring-primary">
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                            Custom Solution
                        </Badge>
                        <CardHeader>
                            <CardTitle className="heading-secondary text-3xl">
                                Enterprise Plan
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[
                                "All Basic features",
                                "Dedicated app option",
                                "Custom onboarding",
                                "Premium support",
                                "Tailored to your needs",
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 justify-center">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full bg-primary hover:bg-primary hover:cursor-pointer transition-all duration-300"
                                size="lg"
                                onClick={() =>
                                    (window.location.href =
                                        "mailto:contact@synkflow.cloud?subject=Book%20a%20Demo&body=Hey,%0A%0AI%27m%20interested%20in%20learning%20more%20about%20StaffSynk.%20Please%20get%20in%20touch.%0A%0AThanks,")
                                }>
                                Book a Demo
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            {/* Closing CTA Section */}
            <section className="px-6 py-10 lg:px-8">
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
                        className="text-lg px-12 py-6 bg-transparent hover:bg-primary/5 transition-all duration-300"
                        onClick={() =>
                            (window.location.href =
                                "mailto:contact@synkflow.cloud")
                        }>
                        Book a Demo
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
                                        href="#custom-plan"
                                        className="hover:text-background transition-colors">
                                        Custom Plan
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
                                        href="mailto:contact@synkflow.cloud"
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
