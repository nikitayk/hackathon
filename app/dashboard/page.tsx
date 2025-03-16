"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  HelpCircle,
  PiggyBank,
  Plus,
  Settings,
  TrendingDown,
  TrendingUp,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the dashboard
  const budgetCategories = [
    { name: "Housing", allocated: 1200, spent: 1150, percentage: 96 },
    { name: "Food", allocated: 500, spent: 420, percentage: 84 },
    { name: "Transportation", allocated: 300, spent: 275, percentage: 92 },
    { name: "Entertainment", allocated: 200, spent: 180, percentage: 90 },
    { name: "Utilities", allocated: 250, spent: 230, percentage: 92 },
  ]

  const savingsGoals = [
    { name: "Emergency Fund", target: 10000, current: 5600, percentage: 56 },
    { name: "Vacation", target: 3000, current: 1200, percentage: 40 },
    { name: "New Car", target: 15000, current: 3750, percentage: 25 },
  ]

  const upcomingBills = [
    { name: "Rent", amount: 1200, dueDate: "2023-04-01" },
    { name: "Electricity", amount: 85, dueDate: "2023-04-05" },
    { name: "Internet", amount: 65, dueDate: "2023-04-10" },
    { name: "Phone", amount: 45, dueDate: "2023-04-15" },
  ]

  const recentTransactions = [
    { name: "Grocery Store", amount: -78.52, date: "2023-03-28", category: "Food" },
    { name: "Gas Station", amount: -45.0, date: "2023-03-27", category: "Transportation" },
    { name: "Salary Deposit", amount: 2500.0, date: "2023-03-25", category: "Income" },
    { name: "Restaurant", amount: -32.4, date: "2023-03-24", category: "Food" },
    { name: "Online Shopping", amount: -65.99, date: "2023-03-22", category: "Shopping" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,580.00</div>
                  <p className="text-xs text-muted-foreground">+$1,245.00 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,550.00</div>
                  <p className="text-xs text-muted-foreground">+$50.00 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                  <TrendingDown className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,200.00</div>
                  <p className="text-xs text-muted-foreground">-$120.00 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Financial Health Score</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78/100</div>
                  <p className="text-xs text-muted-foreground">+5 points from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Monthly Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Income vs. Expenses Chart</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Bills</CardTitle>
                  <CardDescription>Your scheduled payments for the next 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingBills.map((bill) => (
                      <div key={bill.name} className="flex items-center">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <div className="font-medium">{bill.name}</div>
                        </div>
                        <div className="ml-auto font-medium">${bill.amount.toFixed(2)}</div>
                        <div className="ml-4 text-xs text-muted-foreground">
                          {new Date(bill.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" /> View All Bills
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Budget Overview</CardTitle>
                  <CardDescription>Your spending across categories this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {budgetCategories.slice(0, 3).map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{category.name}</div>
                          <div className="text-sm text-muted-foreground">
                            ${category.spent} / ${category.allocated}
                          </div>
                        </div>
                        <Progress value={category.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("budget")}>
                    View All Categories
                  </Button>
                </CardFooter>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest financial activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.slice(0, 4).map((transaction) => (
                      <div key={transaction.name} className="flex items-center">
                        <div className="flex items-center gap-2">
                          {transaction.amount > 0 ? (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                          )}
                          <div className="font-medium">{transaction.name}</div>
                        </div>
                        <div
                          className={`ml-auto font-medium ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`}
                        >
                          {transaction.amount > 0 ? "+" : ""}
                          {transaction.amount.toFixed(2)}
                        </div>
                        <div className="ml-4 text-xs text-muted-foreground">{transaction.category}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("transactions")}>
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="budget" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Monthly Budget</CardTitle>
                  <CardDescription>Your budget allocation and spending for this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {budgetCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{category.name}</div>
                          <div className="text-sm text-muted-foreground">
                            ${category.spent} / ${category.allocated}
                          </div>
                        </div>
                        <Progress value={category.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Budget Category
                  </Button>
                </CardFooter>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Budget Distribution</CardTitle>
                  <CardDescription>How your budget is allocated across categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Budget Pie Chart</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Budget History</CardTitle>
                <CardDescription>Track your budget performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Monthly Budget History Chart</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Export Data
                </Button>
                <Button variant="outline">
                  <HelpCircle className="mr-2 h-4 w-4" /> Budget Tips
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="savings" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Savings Goals</CardTitle>
                  <CardDescription>Track progress towards your financial goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {savingsGoals.map((goal) => (
                      <div key={goal.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{goal.name}</div>
                          <div className="text-sm text-muted-foreground">
                            ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                          </div>
                        </div>
                        <Progress value={goal.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Savings Goal
                  </Button>
                </CardFooter>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Savings Calculator</CardTitle>
                  <CardDescription>Plan your future savings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Savings Growth Calculator</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/education">
                      Learn About Saving Strategies <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Savings History</CardTitle>
                <CardDescription>Your savings growth over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Savings Growth Chart</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Export Data
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/investing">
                    <PiggyBank className="mr-2 h-4 w-4" /> Investment Options
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your financial activity for the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.name} className="flex items-center p-2 hover:bg-muted/50 rounded-md">
                      <div className="flex items-center gap-2">
                        {transaction.amount > 0 ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                        <div>
                          <div className="font-medium">{transaction.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(transaction.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto text-right">
                        <div className={`font-medium ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`}>
                          {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                        </div>
                        <div className="text-xs text-muted-foreground">{transaction.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Load More Transactions
                </Button>
              </CardFooter>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Spending by Category</CardTitle>
                  <CardDescription>How your spending is distributed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Spending Categories Chart</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Income vs. Expenses</CardTitle>
                  <CardDescription>Your cash flow over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Cash Flow Chart</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

