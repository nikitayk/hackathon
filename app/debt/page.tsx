"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calculator, ChevronDown, Download, HelpCircle, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DebtPage() {
  const [debts, setDebts] = useState([
    { id: 1, name: "Credit Card 1", balance: 5000, interestRate: 18.99, minimumPayment: 150 },
    { id: 2, name: "Student Loan", balance: 15000, interestRate: 5.5, minimumPayment: 200 },
    { id: 3, name: "Car Loan", balance: 12000, interestRate: 4.25, minimumPayment: 350 },
    { id: 4, name: "Credit Card 2", balance: 2500, interestRate: 22.99, minimumPayment: 75 },
  ])

  const totalDebt = debts.reduce((sum, debt) => sum + debt.balance, 0)

  // Sort debts by interest rate (highest first) for avalanche method
  const avalancheDebts = [...debts].sort((a, b) => b.interestRate - a.interestRate)

  // Sort debts by balance (lowest first) for snowball method
  const snowballDebts = [...debts].sort((a, b) => a.balance - b.balance)

  return (
    <div className="container py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Debt Management</h1>
          <p className="text-muted-foreground">Take control of your debt and improve your financial health</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/education/debt">
              <HelpCircle className="mr-2 h-4 w-4" />
              Debt Resources
            </Link>
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="overview">Debt Overview</TabsTrigger>
          <TabsTrigger value="payoff">Payoff Strategies</TabsTrigger>
          <TabsTrigger value="calculator">Loan Calculator</TabsTrigger>
          <TabsTrigger value="credit">Credit Score</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Debt</CardTitle>
                <CardDescription>Your current debt balance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${totalDebt.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Monthly Payments</CardTitle>
                <CardDescription>Total minimum payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  ${debts.reduce((sum, debt) => sum + debt.minimumPayment, 0).toLocaleString()}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Average Interest Rate</CardTitle>
                <CardDescription>Weighted by balance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {(debts.reduce((sum, debt) => sum + debt.balance * debt.interestRate, 0) / totalDebt).toFixed(2)}%
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Your Debts</CardTitle>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Debt
                </Button>
              </div>
              <CardDescription>Manage your current debts and track your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {debts.map((debt) => (
                  <div key={debt.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{debt.name}</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Balance</div>
                        <div className="font-medium">${debt.balance.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Interest Rate</div>
                        <div className="font-medium">{debt.interestRate}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Minimum Payment</div>
                        <div className="font-medium">${debt.minimumPayment}/month</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Debt Breakdown</CardTitle>
                <CardDescription>Distribution of your current debt</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Debt Distribution Chart</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Debt Payoff Timeline</CardTitle>
                <CardDescription>Estimated time to pay off all debts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Debt Payoff Timeline Chart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payoff" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Debt Payoff Strategies</CardTitle>
              <CardDescription>Compare different methods to eliminate your debt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>How much can you pay toward debt each month?</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5">$</span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="pl-7"
                      defaultValue={debts.reduce((sum, debt) => sum + debt.minimumPayment, 0)}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Minimum required: ${debts.reduce((sum, debt) => sum + debt.minimumPayment, 0).toLocaleString()}
                    /month
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Select your preferred payoff strategy</Label>
                  <RadioGroup defaultValue="avalanche">
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="avalanche" id="avalanche" className="mt-1" />
                      <div>
                        <Label htmlFor="avalanche" className="font-medium">
                          Debt Avalanche
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Pay minimum on all debts, then put extra money toward the highest interest rate debt first.
                          This saves the most money in interest.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="snowball" id="snowball" className="mt-1" />
                      <div>
                        <Label htmlFor="snowball" className="font-medium">
                          Debt Snowball
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Pay minimum on all debts, then put extra money toward the smallest balance first. This
                          provides psychological wins as debts are paid off faster.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="custom" id="custom" className="mt-1" />
                      <div>
                        <Label htmlFor="custom" className="font-medium">
                          Custom Strategy
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Create your own prioritization of which debts to pay off first.
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Calculate Payoff Plan</Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Debt Avalanche Method</CardTitle>
                <CardDescription>Highest interest rate first (saves the most money)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Total Payoff Time:</span>
                    <span>3 years, 2 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Interest Paid:</span>
                    <span>$4,320</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Amount Paid:</span>
                    <span>$38,820</span>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Payment Order:</h4>
                    <ol className="space-y-2">
                      {avalancheDebts.map((debt, index) => (
                        <li key={debt.id} className="flex justify-between">
                          <div>
                            <span className="font-medium">
                              {index + 1}. {debt.name}
                            </span>
                            <span className="text-sm text-muted-foreground ml-2">(Interest: {debt.interestRate}%)</span>
                          </div>
                          <span>${debt.balance.toLocaleString()}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Debt Snowball Method</CardTitle>
                <CardDescription>Smallest balance first (provides quick wins)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Total Payoff Time:</span>
                    <span>3 years, 4 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Interest Paid:</span>
                    <span>$4,850</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Amount Paid:</span>
                    <span>$39,350</span>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Payment Order:</h4>
                    <ol className="space-y-2">
                      {snowballDebts.map((debt, index) => (
                        <li key={debt.id} className="flex justify-between">
                          <div>
                            <span className="font-medium">
                              {index + 1}. {debt.name}
                            </span>
                            <span className="text-sm text-muted-foreground ml-2">
                              (Balance: ${debt.balance.toLocaleString()})
                            </span>
                          </div>
                          <span>{debt.interestRate}%</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Payoff Comparison</CardTitle>
              <CardDescription>
                Compare how your debt balance decreases over time with different strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Debt Payoff Comparison Chart</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calculator" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Loan Calculator</CardTitle>
              <CardDescription>Calculate payments for a new or existing loan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="loan-amount">Loan Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input id="loan-amount" type="number" placeholder="0.00" className="pl-7" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                    <Input id="interest-rate" type="number" placeholder="0.0" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loan-term">Loan Term</Label>
                    <div className="flex gap-2">
                      <Input id="loan-term" type="number" placeholder="0" />
                      <Select defaultValue="years">
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="months">Months</SelectItem>
                          <SelectItem value="years">Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="payment-frequency">Payment Frequency</Label>
                    <Select defaultValue="monthly">
                      <SelectTrigger id="payment-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Loan
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Loan Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Payment:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Principal:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Interest:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Total Cost:</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-[250px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Principal vs. Interest Chart</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Extra Payment Calculator</CardTitle>
              <CardDescription>See how making extra payments can help you pay off your loan faster</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="space-y-2 mb-4">
                    <Label>Extra Monthly Payment</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input type="number" placeholder="0.00" className="pl-7" />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Savings Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Time Saved:</span>
                        <span>0 years, 0 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest Saved:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>New Payoff Date:</span>
                        <span>N/A</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[250px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Payoff Comparison Chart</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="credit" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Credit Score Factors</CardTitle>
                <CardDescription>Understanding what impacts your credit score</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="font-medium">Payment History (35%)</div>
                      <div className="text-sm text-muted-foreground">Good</div>
                    </div>
                    <Progress value={80} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      Your history of paying bills on time is the most important factor in your credit score.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="font-medium">Credit Utilization (30%)</div>
                      <div className="text-sm text-muted-foreground">Fair</div>
                    </div>
                    <Progress value={60} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      The percentage of your available credit that you're using. Aim to keep this below 30%.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="font-medium">Length of Credit History (15%)</div>
                      <div className="text-sm text-muted-foreground">Good</div>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      How long you've had credit accounts open. Longer history generally improves your score.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="font-medium">Credit Mix (10%)</div>
                      <div className="text-sm text-muted-foreground">Very Good</div>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      The variety of credit accounts you have (credit cards, loans, mortgages, etc.).
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="font-medium">New Credit (10%)</div>
                      <div className="text-sm text-muted-foreground">Excellent</div>
                    </div>
                    <Progress value={90} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      How many new accounts you've opened recently and recent credit inquiries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Improve Your Credit Score</CardTitle>
                <CardDescription>Actionable steps to boost your credit rating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Pay Bills on Time</h4>
                      <p className="text-sm text-muted-foreground">
                        Set up automatic payments or reminders to ensure you never miss a due date.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Reduce Credit Card Balances</h4>
                      <p className="text-sm text-muted-foreground">
                        Aim to keep your credit utilization ratio below 30% of your available credit.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Don't Close Old Credit Cards</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep old accounts open to maintain a longer credit history, even if you don't use them often.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Limit New Credit Applications</h4>
                      <p className="text-sm text-muted-foreground">
                        Only apply for new credit when necessary to minimize hard inquiries on your report.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      5
                    </div>
                    <div>
                      <h4 className="font-medium">Check Your Credit Report Regularly</h4>
                      <p className="text-sm text-muted-foreground">
                        Review your credit report for errors and dispute any inaccuracies you find.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/education/credit">
                    Learn More About Credit Scores <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Credit Score Simulator</CardTitle>
              <CardDescription>See how different actions might affect your credit score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Your Current Credit Score</Label>
                    <Input type="number" placeholder="Enter your score (300-850)" />
                  </div>

                  <div className="space-y-2">
                    <Label>Select an Action to Simulate</Label>
                    <Select defaultValue="pay-down">
                      <SelectTrigger>
                        <SelectValue placeholder="Select an action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pay-down">Pay down credit card balance</SelectItem>
                        <SelectItem value="miss-payment">Miss a payment</SelectItem>
                        <SelectItem value="new-credit">Apply for new credit</SelectItem>
                        <SelectItem value="close-account">Close an old account</SelectItem>
                        <SelectItem value="increase-limit">Increase credit limit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Action Details</Label>
                    <Input type="number" placeholder="Enter amount or details" />
                  </div>

                  <Button className="w-full">
                    <Calculator className="mr-2 h-4 w-4" />
                    Simulate Impact
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="h-[250px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Credit Score Impact Chart</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Simulation Results</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Current Score:</span>
                        <span>--</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Estimated New Score:</span>
                        <span>--</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Potential Impact:</span>
                        <span>--</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Recovery Time:</span>
                        <span>--</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                * This simulator provides estimates only and is not financial advice
              </div>
              <Button variant="outline">Reset Simulator</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold">Need help with debt consolidation?</h2>
            <p className="text-muted-foreground">
              Our financial advisors can help you explore debt consolidation options that may lower your interest rates
              and simplify your payments.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3">
            <img src="/placeholder.svg?height=200&width=300" alt="Debt Consolidation" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

