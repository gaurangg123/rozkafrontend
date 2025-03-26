"use client"

import { useState } from "react"
import { CreditCard, LogOut, MapPin, Star, Check, ChevronRight } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container max-w-4xl py-10 px-4 md:px-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="rides">Rides</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment" className="hidden md:inline-flex">
            Payment
          </TabsTrigger>
          <TabsTrigger value="settings" className="hidden md:inline-flex">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader className="relative pb-0">
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-4"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit"}
              </Button>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                {isEditing ? (
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" className="max-w-[250px]" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="john@example.com" className="max-w-[250px]" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 text-center sm:text-left">
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-muted-foreground">john@example.com</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">4.8</span>
                      <span className="text-muted-foreground">(32 rides)</span>
                    </div>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>

                {isEditing ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" defaultValue="01/15/1990" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="home">Home Address</Label>
                      <Input id="home" defaultValue="123 Main St, Apt 4B" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="work">Work Address</Label>
                      <Input id="work" defaultValue="456 Office Blvd" />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Phone Number</div>
                      <div>+1 (555) 123-4567</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Date of Birth</div>
                      <div>01/15/1990</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Home Address</div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        123 Main St, Apt 4B
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Work Address</div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        456 Office Blvd
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Emergency Contact</h3>
                {isEditing ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergency-name">Name</Label>
                      <Input id="emergency-name" defaultValue="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency-relation">Relationship</Label>
                      <Input id="emergency-relation" defaultValue="Spouse" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency-phone">Phone Number</Label>
                      <Input id="emergency-phone" defaultValue="+1 (555) 987-6543" />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Name</div>
                      <div>Jane Doe</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Relationship</div>
                      <div>Spouse</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Phone Number</div>
                      <div>+1 (555) 987-6543</div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>{isEditing && <Button className="w-full">Save Changes</Button>}</CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="rides" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ride History</CardTitle>
              <CardDescription>View your past rides and upcoming bookings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Upcoming Rides</div>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">Tomorrow, 9:00 AM</div>
                          <Badge variant="outline" className="text-xs">
                            Scheduled
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">Home → Office</div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">Tomorrow, 6:00 PM</div>
                          <Badge variant="outline" className="text-xs">
                            Scheduled
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">Office → Home</div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Past Rides</div>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="font-semibold">Yesterday, 9:00 AM</div>
                        <div className="text-sm text-muted-foreground">Home → Office</div>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="font-semibold">Yesterday, 6:00 PM</div>
                        <div className="text-sm text-muted-foreground">Office → Home</div>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <Star className="h-3 w-3 text-muted mr-1" />
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Rides
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="subscription" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Subscription</CardTitle>
              <CardDescription>Manage your subscription plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/30">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-lg">Weekly Plus</div>
                    <div className="text-sm text-muted-foreground">10 rides per week (weekdays, round trip)</div>
                    <div className="mt-2">
                      <Badge className="bg-green-600 hover:bg-green-700">Active</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">$89.99</div>
                    <div className="text-sm text-muted-foreground">per week</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Rides used this week</span>
                    <span className="font-medium">6 / 10</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="text-sm text-muted-foreground">Renews on May 2, 2024</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium">Subscription Benefits</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    Priority booking during peak hours
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    Dedicated customer support
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    Cancellation without fee up to 30 minutes before
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    Weekly rewards and cashback
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Change Plan</Button>
              <Button variant="outline" className="w-full">
                Pause Subscription
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium">Saved Payment Methods</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between border rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-8 w-8 text-primary" />
                      <div>
                        <div className="font-medium">•••• •••• •••• 4242</div>
                        <div className="text-xs text-muted-foreground">Expires 09/2026</div>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                  <div className="flex items-center justify-between border rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
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
                      <div>
                        <div className="font-medium">UPI ID: user@okbank</div>
                        <div className="text-xs text-muted-foreground">Last used on Apr 26, 2024</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Set Default
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add Payment Method</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your past payments and invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <div className="font-medium">Weekly Plus Subscription</div>
                    <div className="text-sm text-muted-foreground">Apr 25, 2024</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$89.99</div>
                    <div className="text-xs text-green-600">Paid</div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <div className="font-medium">Weekly Plus Subscription</div>
                    <div className="text-sm text-muted-foreground">Apr 18, 2024</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$89.99</div>
                    <div className="text-xs text-green-600">Paid</div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <div>
                    <div className="font-medium">Weekly Plus Subscription</div>
                    <div className="text-sm text-muted-foreground">Apr 11, 2024</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">$89.99</div>
                    <div className="text-xs text-green-600">Paid</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Transactions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Ride Updates</div>
                    <div className="text-sm text-muted-foreground">Receive updates about your ride status</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">Promotional Emails</div>
                    <div className="text-sm text-muted-foreground">Receive emails about promotions and offers</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">SMS Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive text messages for important updates</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-medium">App Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive push notifications on your device</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Manage your account security and data privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-between">
                Change Password
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Two-Factor Authentication
                <Badge variant="outline" className="ml-2">
                  Off
                </Badge>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Privacy Settings
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Download My Data
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

