import Link from "next/link"
import { ArrowRight, BarChart3, BookOpen, DollarSign, PiggyBank, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Take Control of Your Financial Future
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Our platform provides the tools, education, and community support you need to improve your money
                management skills and achieve financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/education">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:block">
              <img
                src="/placeholder.svg?height=550&width=550"
                alt="Financial Dashboard Preview"
                className="mx-auto rounded-lg shadow-xl"
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to manage your finances effectively
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <DollarSign className="h-6 w-6 text-primary" />
                <CardTitle>Budgeting Tools</CardTitle>
                <CardDescription>Create and manage your budget with our intuitive tools</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Track your income and expenses, set spending limits, and receive alerts when you're approaching your
                  budget limits.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/budgeting">
                    Explore Budgeting <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-6 w-6 text-primary" />
                <CardTitle>Investment Basics</CardTitle>
                <CardDescription>Learn how to grow your wealth through smart investments</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Understand different investment options, assess your risk tolerance, and explore sample portfolios
                  tailored to your goals.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/investing">
                    Start Investing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>Financial Education</CardTitle>
                <CardDescription>Expand your knowledge with our comprehensive resources</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Access articles, videos, and interactive quizzes covering budgeting, saving, investing, credit scores,
                  and more.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/education">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <BarChart3 className="h-6 w-6 text-primary" />
                <CardTitle>Debt Management</CardTitle>
                <CardDescription>Take control of your debt and improve your financial health</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Calculate loan repayments, explore debt payoff strategies, and get tips to improve your credit score.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/debt">
                    Manage Debt <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Connect with others on their financial journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Ask questions, share experiences, and learn from others in our supportive community of financial
                  learners.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/community">
                    Join Community <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <PiggyBank className="h-6 w-6 text-primary" />
                <CardTitle>Personalized Dashboard</CardTitle>
                <CardDescription>Track your financial progress in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Monitor your budget, savings goals, debt repayment, and investment portfolio with our customizable
                  dashboard.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/dashboard">
                    View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our platform has helped others achieve their financial goals
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Sarah M.</CardTitle>
                <CardDescription>Debt-free in 18 months</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "Using the debt payoff strategies and budgeting tools, I was able to eliminate $25,000 in credit card
                  debt in just 18 months. The community support kept me motivated throughout my journey."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>James T.</CardTitle>
                <CardDescription>First-time investor</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "The investment education section gave me the confidence to start investing for retirement. I now have
                  a diversified portfolio and am on track to meet my long-term financial goals."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Maria L.</CardTitle>
                <CardDescription>Homeowner at 28</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "By following the savings strategies and using the goal tracker, I saved enough for a down payment on
                  my first home in just 3 years. I never thought homeownership would be possible so soon!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Finances?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of others who have taken control of their financial future
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/dashboard">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

