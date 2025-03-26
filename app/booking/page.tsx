"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, CalendarIcon, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingPage() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [step, setStep] = useState(1)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (step === 1) {
      setStep(2)
      window.scrollTo(0, 0)
    } else {
      toast({
        title: "Ride booked successfully!",
        description: "Your ride has been scheduled. Check your email for confirmation.",
      })
    }
  }

  return (
    <div className="container max-w-4xl py-10 px-4 md:px-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Book Your Ride</h1>
        <p className="text-muted-foreground">Schedule your daily commute or book a one-time ride</p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center justify-center space-x-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            1
          </div>
          <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>Location</span>
        </div>
        <div className="h-px w-12 bg-muted"></div>
        <div className="flex items-center justify-center space-x-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            2
          </div>
          <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>Plan & Payment</span>
        </div>
      </div>

      {step === 1 ? (
        <Card>
          <CardHeader>
            <CardTitle>Ride Details</CardTitle>
            <CardDescription>Enter your pickup and drop-off locations</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="pickup" placeholder="Enter pickup address" className="pl-9" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dropoff">Drop-off Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="dropoff" placeholder="Enter destination address" className="pl-9" required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Ride Type</Label>
                <RadioGroup defaultValue="scheduled" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="scheduled" id="scheduled" />
                    <Label htmlFor="scheduled" className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <div>
                        <div>Scheduled Ride</div>
                        <div className="text-sm text-muted-foreground">Book for a future date & time</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="now" id="now" />
                    <Label htmlFor="now" className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <div>
                        <div>Ride Now</div>
                        <div className="text-sm text-muted-foreground">Book a ride for right now</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7:00">7:00 AM</SelectItem>
                      <SelectItem value="7:30">7:30 AM</SelectItem>
                      <SelectItem value="8:00">8:00 AM</SelectItem>
                      <SelectItem value="8:30">8:30 AM</SelectItem>
                      <SelectItem value="9:00">9:00 AM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="17:30">5:30 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="18:30">6:30 PM</SelectItem>
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Instructions (Optional)</Label>
                <Input id="notes" placeholder="Any specific instructions for the driver" />
              </div>

              <Button type="submit" className="w-full">
                Continue to Plan Selection
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Select Your Plan</CardTitle>
            <CardDescription>Choose a subscription plan that fits your needs</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs defaultValue="daily">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
                <div className="mt-6 space-y-4">
                  <TabsContent value="daily" className="space-y-4">
                    <RadioGroup defaultValue="single">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem value="single" id="single-ride" className="absolute right-4 top-4" />
                          <div className="font-semibold">Single Ride</div>
                          <div className="text-sm text-muted-foreground">One-time ride (no subscription)</div>
                          <div className="mt-2 font-semibold">$12.99</div>
                        </div>
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem
                            value="daily-standard"
                            id="daily-standard"
                            className="absolute right-4 top-4"
                          />
                          <div className="font-semibold">Daily Standard</div>
                          <div className="text-sm text-muted-foreground">1 ride per day (morning or evening)</div>
                          <div className="mt-2 font-semibold">$9.99/day</div>
                        </div>
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem value="daily-plus" id="daily-plus" className="absolute right-4 top-4" />
                          <div className="flex items-center">
                            <div className="font-semibold">Daily Plus</div>
                            <div className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                              Popular
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">2 rides per day (morning and evening)</div>
                          <div className="mt-2 font-semibold">$16.99/day</div>
                        </div>
                      </div>
                    </RadioGroup>
                  </TabsContent>
                  <TabsContent value="weekly" className="space-y-4">
                    <RadioGroup defaultValue="weekly-standard">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem
                            value="weekly-standard"
                            id="weekly-standard"
                            className="absolute right-4 top-4"
                          />
                          <div className="font-semibold">Weekly Standard</div>
                          <div className="text-sm text-muted-foreground">5 rides per week (weekdays, one-way)</div>
                          <div className="mt-2 font-semibold">$49.99/week</div>
                        </div>
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem value="weekly-plus" id="weekly-plus" className="absolute right-4 top-4" />
                          <div className="flex items-center">
                            <div className="font-semibold">Weekly Plus</div>
                            <div className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                              Best Value
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">10 rides per week (weekdays, round trip)</div>
                          <div className="mt-2 font-semibold">$89.99/week</div>
                        </div>
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem
                            value="weekly-unlimited"
                            id="weekly-unlimited"
                            className="absolute right-4 top-4"
                          />
                          <div className="font-semibold">Weekly Unlimited</div>
                          <div className="text-sm text-muted-foreground">Unlimited rides for 7 days</div>
                          <div className="mt-2 font-semibold">$109.99/week</div>
                        </div>
                      </div>
                    </RadioGroup>
                  </TabsContent>
                  <TabsContent value="monthly" className="space-y-4">
                    <RadioGroup defaultValue="monthly-standard">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem
                            value="monthly-standard"
                            id="monthly-standard"
                            className="absolute right-4 top-4"
                          />
                          <div className="font-semibold">Monthly Standard</div>
                          <div className="text-sm text-muted-foreground">20 rides per month (weekdays, one-way)</div>
                          <div className="mt-2 font-semibold">$179.99/month</div>
                        </div>
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem value="monthly-plus" id="monthly-plus" className="absolute right-4 top-4" />
                          <div className="flex items-center">
                            <div className="font-semibold">Monthly Plus</div>
                            <div className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                              Most Popular
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">40 rides per month (weekdays, round trip)</div>
                          <div className="mt-2 font-semibold">$329.99/month</div>
                        </div>
                        <div className="relative rounded-lg border p-4 hover:border-primary">
                          <RadioGroupItem
                            value="monthly-unlimited"
                            id="monthly-unlimited"
                            className="absolute right-4 top-4"
                          />
                          <div className="font-semibold">Monthly Unlimited</div>
                          <div className="text-sm text-muted-foreground">Unlimited rides for 30 days</div>
                          <div className="mt-2 font-semibold">$399.99/month</div>
                        </div>
                      </div>
                    </RadioGroup>
                  </TabsContent>
                </div>
              </Tabs>

              <div className="space-y-4">
                <div className="text-lg font-semibold">Payment Method</div>
                <RadioGroup defaultValue="card" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative rounded-lg border p-4 flex flex-col items-center text-center hover:border-primary">
                    <RadioGroupItem value="card" id="card" className="absolute right-2 top-2" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    <div className="font-medium">Card</div>
                  </div>
                  <div className="relative rounded-lg border p-4 flex flex-col items-center text-center hover:border-primary">
                    <RadioGroupItem value="upi" id="upi" className="absolute right-2 top-2" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="6" x2="6" y1="9" y2="9" />
                      <line x1="10" x2="10" y1="9" y2="9" />
                      <line x1="14" x2="14" y1="9" y2="9" />
                      <line x1="18" x2="18" y1="9" y2="9" />
                      <line x1="6" x2="6" y1="13" y2="13" />
                      <line x1="18" x2="18" y1="13" y2="13" />
                      <line x1="10" x2="14" y1="13" y2="13" />
                    </svg>
                    <div className="font-medium">UPI</div>
                  </div>
                  <div className="relative rounded-lg border p-4 flex flex-col items-center text-center hover:border-primary">
                    <RadioGroupItem value="wallet" id="wallet" className="absolute right-2 top-2" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2"
                    >
                      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                    <div className="font-medium">Wallet</div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <div className="flex justify-between">
                  <div className="text-muted-foreground">Plan Cost</div>
                  <div>$89.99</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-muted-foreground">Service Fee</div>
                  <div>$5.00</div>
                </div>
                <div className="flex justify-between font-semibold">
                  <div>Total</div>
                  <div>$94.99</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" className="flex-1">
                  Confirm & Pay
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

