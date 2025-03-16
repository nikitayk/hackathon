import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Play, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EducationPage() {
  // Mock data for educational content
  const articles = [
    {
      title: "Budgeting 101: Getting Started",
      description: "Learn the basics of creating and maintaining a budget that works for you.",
      category: "Budgeting",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Understanding Credit Scores",
      description: "What makes up your credit score and how to improve it over time.",
      category: "Credit",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Emergency Funds: Why You Need One",
      description: "The importance of having an emergency fund and how to build one.",
      category: "Saving",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Investing for Beginners",
      description: "A simple guide to start your investment journey with confidence.",
      category: "Investing",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Debt Payoff Strategies",
      description: "Compare different methods to eliminate debt and choose what works for you.",
      category: "Debt",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Retirement Planning Essentials",
      description: "Start planning for retirement no matter your age with these key steps.",
      category: "Retirement",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const videos = [
    {
      title: "How to Create Your First Budget",
      description: "A step-by-step guide to setting up a budget that works for your lifestyle.",
      category: "Budgeting",
      duration: "12:34",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Debt Snowball vs. Avalanche Method",
      description: "Compare these popular debt payoff strategies to see which is right for you.",
      category: "Debt",
      duration: "15:21",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Investing Basics: Stocks, Bonds, and Funds",
      description: "Understand the fundamental investment vehicles available to you.",
      category: "Investing",
      duration: "18:45",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Building an Emergency Fund",
      description: "Learn how to start and grow your financial safety net.",
      category: "Saving",
      duration: "10:15",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const courses = [
    {
      title: "Financial Foundations",
      description: "A comprehensive course covering budgeting, saving, and basic investing.",
      lessons: 12,
      duration: "4 weeks",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Debt Freedom",
      description: "Strategies and tactics to eliminate debt and build wealth.",
      lessons: 8,
      duration: "3 weeks",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Investing Masterclass",
      description: "From beginner to confident investor with practical steps and strategies.",
      lessons: 15,
      duration: "6 weeks",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Education</h1>
          <p className="text-muted-foreground">Expand your financial knowledge with our comprehensive resources</p>
        </div>
        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search resources..." className="w-full pl-8" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="articles" className="mt-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="articles">
            <FileText className="mr-2 h-4 w-4" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="videos">
            <Play className="mr-2 h-4 w-4" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="courses">
            <BookOpen className="mr-2 h-4 w-4" />
            Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-[160px] object-cover"
                />
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-1">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="#">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={video.image || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-primary/90 p-3 text-primary-foreground">
                      <Play className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{video.category}</span>
                  </div>
                  <CardTitle className="line-clamp-1">{video.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="#">
                      Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="outline">View All Videos</Button>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-[160px] object-cover"
                />
                <CardHeader>
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="text-muted-foreground">{course.duration}</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="#">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold">Not sure where to start?</h2>
            <p className="text-muted-foreground">
              Take our financial assessment quiz to get personalized recommendations based on your current financial
              situation and goals.
            </p>
            <Button size="lg" asChild>
              <Link href="#">
                Take Financial Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3">
            <img src="/placeholder.svg?height=200&width=300" alt="Financial Assessment" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

