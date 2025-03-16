"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Calendar, MessageSquare, Search, ThumbsUp, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for discussions
  const discussions = [
    {
      id: 1,
      title: "How to start investing with $500?",
      author: "JaneDoe",
      date: "2023-03-28",
      replies: 24,
      likes: 18,
      category: "Investing",
      excerpt:
        "I have $500 saved up and want to start investing. What are some good options for beginners with a small amount to invest?",
    },
    {
      id: 2,
      title: "Best budgeting apps in 2023?",
      author: "FinanceGuru",
      date: "2023-03-25",
      replies: 32,
      likes: 45,
      category: "Budgeting",
      excerpt:
        "I'm looking for a good budgeting app that syncs with multiple accounts and has good visualization features. Any recommendations?",
    },
    {
      id: 3,
      title: "Strategies for paying off student loans faster",
      author: "GradStudent",
      date: "2023-03-22",
      replies: 19,
      likes: 27,
      category: "Debt",
      excerpt:
        "I'm trying to pay off my student loans more quickly. Has anyone had success with refinancing or other strategies?",
    },
    {
      id: 4,
      title: "Emergency fund: How much is enough?",
      author: "SafetySaver",
      date: "2023-03-20",
      replies: 41,
      likes: 36,
      category: "Saving",
      excerpt:
        "I've heard different recommendations for emergency funds from 3 months to 1 year of expenses. What's realistic in today's economy?",
    },
    {
      id: 5,
      title: "First time home buyer questions",
      author: "FutureHomeowner",
      date: "2023-03-18",
      replies: 28,
      likes: 22,
      category: "Housing",
      excerpt:
        "I'm planning to buy my first home in the next year. What are some things I should know or prepare for that aren't obvious?",
    },
  ]

  // Mock data for upcoming events
  const events = [
    {
      id: 1,
      title: "Investing 101 Webinar",
      date: "2023-04-15",
      time: "7:00 PM EST",
      host: "Sarah Johnson, CFP",
      description: "Learn the basics of investing, including stocks, bonds, and mutual funds.",
    },
    {
      id: 2,
      title: "Debt Freedom Q&A Session",
      date: "2023-04-20",
      time: "6:30 PM EST",
      host: "Michael Chen, Financial Coach",
      description: "Live Q&A session about strategies to eliminate debt and achieve financial freedom.",
    },
    {
      id: 3,
      title: "Retirement Planning Workshop",
      date: "2023-04-25",
      time: "12:00 PM EST",
      host: "Robert Williams, Retirement Specialist",
      description: "Interactive workshop on planning for retirement at any age.",
    },
  ]

  // Mock data for expert advice
  const expertAdvice = [
    {
      id: 1,
      question: "Should I pay off debt or invest?",
      expert: "Dr. Emily Carter, Financial Planner",
      answer:
        "It depends on the interest rate of your debt. Generally, if your debt has a higher interest rate than what you could reasonably expect to earn from investments (after taxes), prioritize paying off the debt first. However, always contribute enough to get any employer match in retirement accounts.",
    },
    {
      id: 2,
      question: "How do I build credit as a young adult?",
      expert: "Marcus Johnson, Credit Specialist",
      answer:
        "Start with a secured credit card or become an authorized user on a parent's card. Make small purchases and pay the balance in full each month. Over time, this builds a positive payment history. Also, keep accounts open to build credit history length.",
    },
    {
      id: 3,
      question: "What's the best way to save for a child's education?",
      expert: "Lisa Wong, Education Finance Advisor",
      answer:
        "529 plans offer tax advantages specifically for education expenses. Start early to maximize compound growth. Consider a mix of savings vehicles including 529 plans, Coverdell ESAs, and UTMA/UGMA accounts depending on your specific needs and goals.",
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Community Forum</h1>
          <p className="text-muted-foreground">Connect with others on their financial journey</p>
        </div>
        <div className="w-full md:w-auto flex items-center gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search discussions..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            New Discussion
          </Button>
        </div>
      </div>

      <Tabs defaultValue="discussions" className="mt-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          <TabsTrigger value="expert">Expert Advice</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="mt-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              All Topics
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Budgeting
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Investing
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Debt
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Saving
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Retirement
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Housing
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Credit
            </Button>
          </div>

          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
                        {discussion.category}
                      </span>
                      <CardTitle className="text-xl">
                        <Link href={`/community/discussion/${discussion.id}`} className="hover:underline">
                          {discussion.title}
                        </Link>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{discussion.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{discussion.author}</span>
                    </div>
                    <div>
                      {new Date(discussion.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{discussion.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.likes} likes</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">Load More Discussions</Button>
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <Card key={event.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} •{" "}
                        {event.time}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">{event.title}</CardTitle>
                  <CardDescription>Hosted by {event.host}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="#">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button>Register</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Host Your Own Event</CardTitle>
              <CardDescription>Share your financial knowledge with the community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Are you a financial professional or enthusiast with expertise to share? Host a webinar, workshop, or Q&A
                session for our community members.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/community/host-event">
                  Apply to Host <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="expert" className="mt-6 space-y-6">
          <div className="space-y-6">
            {expertAdvice.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>{item.question}</CardTitle>
                  <CardDescription>Answered by {item.expert}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">Helpful (42)</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Share <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ask an Expert</CardTitle>
              <CardDescription>Submit your financial questions to our panel of experts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Type your financial question here..." className="w-full" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Our experts typically respond within 2-3 business days. Popular questions may be featured in our
                  community forum.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Question</Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Meet Our Experts</CardTitle>
                <CardDescription>Financial professionals who volunteer their expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-medium">Dr. Emily Carter, CFP</div>
                      <div className="text-sm text-muted-foreground">Financial Planning Specialist</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-medium">Marcus Johnson</div>
                      <div className="text-sm text-muted-foreground">Credit & Debt Specialist</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <div className="font-medium">Lisa Wong, MBA</div>
                      <div className="text-sm text-muted-foreground">Education Finance Advisor</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/community/experts">
                    View All Experts <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Become an Expert</CardTitle>
                <CardDescription>Share your financial expertise with our community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Are you a financial professional with credentials and experience? Join our panel of experts to help
                  community members with their financial questions.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Answer community questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Host webinars and workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Contribute to educational content</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/community/apply-expert">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold">Community Guidelines</h2>
            <p className="text-muted-foreground">
              Our community thrives on respectful, helpful interactions. Please review our community guidelines to
              ensure a positive experience for all members.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/community/guidelines">
                View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3">
            <img src="/placeholder.svg?height=200&width=300" alt="Community" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

