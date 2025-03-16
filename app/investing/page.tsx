"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Calculator,
  ChevronDown,
  DollarSign,
  HelpCircle,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InvestingPage() {
  const [riskTolerance, setRiskTolerance] = useState(3)

  const investmentTypes = [
    {
      name: "Stocks",
      description: "Ownership in a company with potential for growth and dividends",
      riskLevel: "Medium to High",
      returnPotential: "High",
      liquidityLevel: "High",
    },
    {
      name: "Bonds",
      description: "Loans to companies or governments with regular interest payments",
      riskLevel: "Low to Medium",
      returnPotential: "Low to Medium",
      liquidityLevel: "Medium to High",
    },
    {
      name: "Mutual Funds",
      description: "Professionally managed investment pools across multiple securities",
      riskLevel: "Varies",
      returnPotential: "Varies",
      liquidityLevel: "High",
    },
    {
      name: "ETFs",
      description: "Baskets of securities that trade like individual stocks",
      riskLevel: "Varies",
      returnPotential: "Varies",
      liquidityLevel: "High",
    },
    {
      name: "Real Estate",
      description: "Property investments for rental income or appreciation",
      riskLevel: "Medium",
      returnPotential: "Medium to High",
      liquidityLevel: "Low",
    },
  ]

  const portfolioAllocations = {
    conservative: {
      stocks: 20,
      bonds: 60,
      cash: 20,
      description:
        "Focused on preserving capital with minimal risk. Suitable for short-term goals or those near retirement.",
    },
    moderate: {
      stocks: 50,
      bonds: 40,
      cash: 10,
      description: "Balanced approach with moderate growth and risk. Good for medium-term goals (5-10 years).",
    },
    aggressive: {
      stocks: 80,
      bonds: 15,
      cash: 5,
      description:
        "Maximizing growth with higher risk tolerance. Best for long-term goals (10+ years) and younger investors.",
    },
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Investment Basics</h1>
          <p className="text-muted-foreground">Learn how to grow your wealth through smart investment strategies</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/education/investing">
              <HelpCircle className="mr-2 h-4 w-4" />
              Investment Guide
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basics" className="mt-6">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="basics">Investment Types</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
          <TabsTrigger value="portfolios">Sample Portfolios</TabsTrigger>
          <TabsTrigger value="calculator">Investment Calculator</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Types of Investments</CardTitle>
              <CardDescription>Understanding different investment vehicles and their characteristics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {investmentTypes.map((investment, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{investment.name}</h3>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground mt-1">{investment.description}</p>
                    <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                      <div>
                        <div className="font-medium">Risk Level</div>
                        <div>{investment.riskLevel}</div>
                      </div>
                      <div>
                        <div className="font-medium">Return Potential</div>
                        <div>{investment.returnPotential}</div>
                      </div>
                      <div>
                        <div className="font-medium">Liquidity</div>
                        <div>{investment.liquidityLevel}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/education/investing/types">
                  Learn More About Investment Types <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Key steps to begin your investment journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Set Clear Financial Goals</h4>
                      <p className="text-sm text-muted-foreground">
                        Define what you're investing for and your time horizon
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Build an Emergency Fund First</h4>
                      <p className="text-sm text-muted-foreground">
                        Have 3-6 months of expenses saved before investing
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Understand Your Risk Tolerance</h4>
                      <p className="text-sm text-muted-foreground">Assess how much volatility you can handle</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Choose the Right Account Type</h4>
                      <p className="text-sm text-muted-foreground">
                        Retirement accounts (401k, IRA) or taxable brokerage accounts
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      5
                    </div>
                    <div>
                      <h4 className="font-medium">Start Small and Consistent</h4>
                      <p className="text-sm text-muted-foreground">
                        Begin with regular contributions, even if small amounts
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Investment Principles</CardTitle>
                <CardDescription>Fundamental concepts for successful investing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium flex items-center">
                      <TrendingUp className="mr-2 h-4 w-4 text-primary" />
                      Diversification
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Spread investments across different asset classes to reduce risk
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center">
                      <LineChart className="mr-2 h-4 w-4 text-primary" />
                      Long-Term Perspective
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on long-term growth rather than short-term market fluctuations
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4 text-primary" />
                      Dollar-Cost Averaging
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Invest regularly regardless of market conditions to average out costs
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      Asset Allocation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Distribute investments based on your goals, time horizon, and risk tolerance
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium flex items-center">
                      <DollarSign className="mr-2 h-4 w-4 text-primary" />
                      Compound Interest
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Reinvest earnings to generate more returns over time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Risk Tolerance Assessment</CardTitle>
              <CardDescription>
                Determine your investment risk tolerance to guide your investment strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>What is your investment time horizon?</Label>
                  <RadioGroup defaultValue="5-10">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0-2" id="time-0-2" />
                      <Label htmlFor="time-0-2">0-2 years (Short-term)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3-5" id="time-3-5" />
                      <Label htmlFor="time-3-5">3-5 years (Medium-term)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5-10" id="time-5-10" />
                      <Label htmlFor="time-5-10">5-10 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10+" id="time-10+" />
                      <Label htmlFor="time-10+">10+ years (Long-term)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>How would you react if your investments lost 20% in value?</Label>
                  <RadioGroup defaultValue="concerned">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sell" id="reaction-sell" />
                      <Label htmlFor="reaction-sell">Sell immediately to prevent further losses</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="concerned" id="reaction-concerned" />
                      <Label htmlFor="reaction-concerned">Be concerned but wait to see if investments recover</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="opportunity" id="reaction-opportunity" />
                      <Label htmlFor="reaction-opportunity">See it as an opportunity to buy more at lower prices</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>What is your primary investment goal?</Label>
                  <RadioGroup defaultValue="growth">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="preserve" id="goal-preserve" />
                      <Label htmlFor="goal-preserve">Preserve capital with minimal risk</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="income" id="goal-income" />
                      <Label htmlFor="goal-income">Generate regular income</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="growth" id="goal-growth" />
                      <Label htmlFor="goal-growth">Achieve long-term growth</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="aggressive" id="goal-aggressive" />
                      <Label htmlFor="goal-aggressive">Maximize growth with higher risk</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Your Risk Tolerance Level</Label>
                    <span className="font-medium">
                      {riskTolerance === 1
                        ? "Very Conservative"
                        : riskTolerance === 2
                          ? "Conservative"
                          : riskTolerance === 3
                            ? "Moderate"
                            : riskTolerance === 4
                              ? "Aggressive"
                              : "Very Aggressive"}
                    </span>
                  </div>
                  <Slider
                    defaultValue={[3]}
                    max={5}
                    min={1}
                    step={1}
                    onValueChange={(value) => setRiskTolerance(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Lower Risk</span>
                    <span>Higher Risk</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Personalized Investment Recommendations</Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Conservative</CardTitle>
                <CardDescription>Lower risk, stable returns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Conservative Portfolio Chart</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Potential Return:</span>
                      <span>3-5%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Risk Level:</span>
                      <span>Low</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Time Horizon:</span>
                      <span>1-3 years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Moderate</CardTitle>
                <CardDescription>Balanced risk and return</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Moderate Portfolio Chart</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Potential Return:</span>
                      <span>5-8%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Risk Level:</span>
                      <span>Medium</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Time Horizon:</span>
                      <span>3-7 years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Aggressive</CardTitle>
                <CardDescription>Higher risk, growth focused</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Aggressive Portfolio Chart</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Potential Return:</span>
                      <span>8-12%+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Risk Level:</span>
                      <span>High</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Time Horizon:</span>
                      <span>7+ years</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="portfolios" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(portfolioAllocations).map(([type, data]) => (
              <Card key={type} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="capitalize">{type} Portfolio</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Portfolio Allocation Chart</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Stocks</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted overflow-hidden rounded-full">
                          <div className="h-full bg-primary" style={{ width: `${data.stocks}%` }}></div>
                        </div>
                        <span className="text-sm">{data.stocks}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bonds</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted overflow-hidden rounded-full">
                          <div className="h-full bg-primary" style={{ width: `${data.bonds}%` }}></div>
                        </div>
                        <span className="text-sm">{data.bonds}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cash</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted overflow-hidden rounded-full">
                          <div className="h-full bg-primary" style={{ width: `${data.cash}%` }}></div>
                        </div>
                        <span className="text-sm">{data.cash}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Sample {type.charAt(0).toUpperCase() + type.slice(1)} Portfolio
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Comparison</CardTitle>
              <CardDescription>Compare the historical performance of different portfolio allocations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Portfolio Performance Comparison Chart</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                * Historical performance is not indicative of future results
              </div>
              <Button variant="outline">Customize Time Period</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="calculator" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Investment Growth Calculator</CardTitle>
              <CardDescription>Estimate how your investments might grow over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="initial-investment">Initial Investment</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input id="initial-investment" type="number" placeholder="0.00" className="pl-7" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly-contribution">Monthly Contribution</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5">$</span>
                      <Input id="monthly-contribution" type="number" placeholder="0.00" className="pl-7" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time-period">Investment Period (Years)</Label>
                    <Input id="time-period" type="number" placeholder="10" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expected-return">Expected Annual Return (%)</Label>
                    <Input id="expected-return" type="number" placeholder="7" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investment-type">Investment Type</Label>
                    <Select defaultValue="balanced">
                      <SelectTrigger id="investment-type">
                        <SelectValue placeholder="Select investment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservative">Conservative</SelectItem>
                        <SelectItem value="balanced">Balanced</SelectItem>
                        <SelectItem value="growth">Growth</SelectItem>
                        <SelectItem value="aggressive">Aggressive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Growth
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Investment Growth Chart</p>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Investment Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Initial Investment</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Contributions</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Investment Growth</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Final Value</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                * This calculator provides estimates only and is not financial advice
              </div>
              <Button variant="outline">Save Calculation</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retirement Calculator</CardTitle>
              <CardDescription>Plan for your retirement by estimating your future needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Retirement Calculator (Coming Soon)</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/education/retirement">
                  Learn About Retirement Planning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-muted rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold">Ready to start investing?</h2>
            <p className="text-muted-foreground">
              Our financial advisors can help you create a personalized investment strategy based on your goals, risk
              tolerance, and time horizon.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Investment Consultation"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

