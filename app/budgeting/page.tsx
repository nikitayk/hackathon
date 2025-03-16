"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calculator, Download, HelpCircle, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BudgetingPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Housing", allocated: 1200, spent: 1150 },
    { id: 2, name: "Food", allocated: 500, spent: 420 },
    { id: 3, name: "Transportation", allocated: 300, spent: 275 },
    { id: 4, name: "Entertainment", allocated: 200, spent: 180 },
    { id: 5, name: "Utilities", allocated: 250, spent: 230 },
    { id: 6, name: "Healthcare", allocated: 150, spent: 75 },
    { id: 7, name: "Savings", allocated: 400, spent: 400 },
    { id: 8, name: "Miscellaneous", allocated: 100, spent: 85 },
  ])

  const totalAllocated = categories.reduce((sum, category) => sum + category.allocated, 0)
  const totalSpent = categories.reduce((sum, category) => sum + category.spent, 0)
  const totalRemaining = totalAllocated - totalSpent

  return (
    <div className="container py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Budgeting Tools</h1>
          <p className="text-muted-foreground">Create and manage your budget to take control of your finances</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/education/budgeting">
              <HelpCircle className="mr-2 h-4 w-4" />
              Budgeting Tips
            </Link>
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="monthly" className="mt-6">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="monthly">Monthly Budget</TabsTrigger>
          <TabsTrigger value="calculator">Budget Calculator</TabsTrigger>
          <TabsTrigger value="history">Budget History</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Budget</CardTitle>
                <CardDescription>Your monthly budget allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${totalAllocated.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Spent</CardTitle>
                <CardDescription>Your spending this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${totalSpent.toLocaleString()}</div>
                <Progress value={(totalSpent / totalAllocated) * 100} className="h-2 mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Remaining</CardTitle>
                <CardDescription>Budget left for this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${totalRemaining.toLocaleString()}</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Budget Categories</CardTitle>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Category
                </Button>
              </div>
              <CardDescription>Manage your budget allocations across different spending categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.id} className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3 font-medium">{category.name}</div>
                    <div className="col-span-3 text-sm">
                      <span className="font-medium">${category.spent}</span>
                      <span className="text-muted-foreground"> / ${category.allocated}</span>
                    </div>
                    <div className="col-span-5">
                      <Progress value={(category.spent / category.allocated) * 100} className="h-2" />
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
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
            <Card>
              <CardHeader>
                <CardTitle>Spending Trends</CardTitle>
                <CardDescription>Your spending patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Spending Trend Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calculator" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Budget Calculator</CardTitle>
              <CardDescription>
                Calculate how much you should allocate to each category based on your income
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="monthly-income">Monthly Income (After Tax)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input id="monthly-income" type="number" placeholder="0.00" className="pl-7" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget-method">Budgeting Method</Label>
                    <Select defaultValue="50-30-20">
                      <SelectTrigger id="budget-method">
                        <SelectValue placeholder="Select a budgeting method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-30-20">50/30/20 Rule</SelectItem>
                        <SelectItem value="zero-based">Zero-Based Budget</SelectItem>
                        <SelectItem value="envelope">Envelope System</SelectItem>
                        <SelectItem value="custom">Custom Allocation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Budget
                  </Button>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Recommended Allocations</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Housing (25-35%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Food (10-15%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transportation (10-15%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Utilities (5-10%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Healthcare (5-10%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Savings (10-20%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Entertainment (5-10%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Debt Repayment (10-20%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Miscellaneous (5-10%)</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/education/budgeting">Learn About Budgeting Methods</Link>
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Save Calculations
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Budget History</CardTitle>
              <CardDescription>Track your budget performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Monthly Budget History Chart</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Budget vs. Actual</CardTitle>
                <CardDescription>Compare your planned budget with actual spending</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["January", "February", "March"].map((month) => (
                    <div key={month} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{month} 2023</div>
                        <div className="text-sm text-muted-foreground">$2,850 / $3,100</div>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Months
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Savings Rate</CardTitle>
                <CardDescription>Track your monthly savings rate over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Savings Rate Chart</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/education/saving">
                    Improve Your Savings Rate <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="text-2xl font-bold">Need help with your budget?</h2>
            <p className="text-muted-foreground">
              Our financial coaches can help you create a personalized budget plan that aligns with your goals and
              lifestyle.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3">
            <img src="/placeholder.svg?height=200&width=300" alt="Financial Coaching" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

