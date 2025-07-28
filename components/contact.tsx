"use client";

import { CalendarIcon, Check, MoveRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, isSameDay } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import { useToast } from "@/hooks/use-toast";

const cgaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const worksans = Work_Sans({ subsets: ["latin"] });

// Define the appointment type
type Appointment = {
  date: Date;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
};

// To store user input
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

export const ContactForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedAppointments, setBookedAppointments] = useState<Appointment[]>([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  const allTimeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];
  const { toast } = useToast();

  // Fetch booked appointments on component mount
  useEffect(() => {
    fetchBookedAppointments();
  }, []);

  // Update available time slots when date changes
  useEffect(() => {
    if (date) {
      updateAvailableTimeSlots(date);
    }
  }, [date, bookedAppointments]);

  // Fetch booked appointments from API
  const fetchBookedAppointments = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/appointments');
      const data = await response.json();
      setBookedAppointments(data.appointments);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
      // For demo purposes, use mock data
      setBookedAppointments([
        {
          date: new Date(),
          timeSlot: "09:00 AM",
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@example.com"
        }
      ]);
    }
  };

  // Update available time slots based on selected date
  const updateAvailableTimeSlots = (selectedDate: Date) => {
    // Find appointments for selected date
    const appointmentsOnSelectedDate = bookedAppointments.filter(appointment => 
      isSameDay(new Date(appointment.date), selectedDate)
    );
    
    // Get booked time slots for selected date
    const bookedTimeSlotsOnSelectedDate = appointmentsOnSelectedDate.map(
      appointment => appointment.timeSlot
    );
    
    // Filter out booked time slots
    const available = allTimeSlots.filter(
      slot => !bookedTimeSlotsOnSelectedDate.includes(slot)
    );
    
    setAvailableTimeSlots(available);
    
    // Reset time slot if the selected one is no longer available
    if (timeSlot && !available.includes(timeSlot)) {
      setTimeSlot("");
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields to book your consultation.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare appointment data
      const appointmentData: Appointment = {
        date: date,
        timeSlot,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      };
      
      // Send to API
      const response = await fetch('/api/book-appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        // Update local state with new appointment
        setBookedAppointments(prev => [...prev, appointmentData]);
        
        // Reset form
        setDate(new Date());
        setTimeSlot("");
        setFormData({
          firstName: "",
          lastName: "",
          email: ""
        });
        
        toast({
          title: "Consultation booked!",
          description: `Your consultation is scheduled for ${format(date, 'PPP')} at ${timeSlot}.`,
        });
      } else {
        throw new Error(result.message || "Failed to book appointment");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking failed",
        description: "There was an error booking your consultation. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 lg:py-40 bg-[#fcfaee]">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 -mt-20 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2
                className={`${cgaramond.className} text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-medium text-slate-950`}
              >
                Let&apos;s discuss your project
              </h2>
              <p
                className={`${worksans.className} text-md leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left`}
              >
                Schedule a meeting with our expert team to explore how we can
                elevate your online presence and drive your business forward.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Tailored solutions",
                  description:
                    "We create custom web designs that align with your brand and goals.",
                },
                {
                  title: "Expert guidance",
                  description:
                    "Our experienced team will guide you through every step of the process.",
                },
                {
                  title: "Results-driven approach",
                  description:
                    "We focus on creating websites that drive conversions and growth.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-4 items-start text-left"
                >
                  <Check className="w-5 h-5 mt-1 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p className={`${worksans.className} font-medium`}>
                      {item.title}
                    </p>
                    <p
                      className={`${worksans.className} text-muted-foreground text-sm`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="justify-center flex items-center">
            <form onSubmit={handleSubmit} className="rounded-xl shadow-lg max-w-md w-full flex flex-col bg-[#fcfaee] p-8 gap-6">
              <h3
                className={`${cgaramond.className} text-2xl font-semibold text-slate-950`}
              >
                Book a consultation
              </h3>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="date" className={worksans.className}>
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                      type="button"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="time" className={worksans.className}>
                  Time
                </Label>
                <Select onValueChange={setTimeSlot} value={timeSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time slot">
                      {timeSlot ? (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {timeSlot}
                        </div>
                      ) : (
                        "Select a time slot"
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((slot) => (
                        <SelectItem
                          key={slot}
                          value={slot}
                          className="cursor-pointer"
                        >
                          {slot}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="none" disabled>
                        No available slots for this date
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
              {[
                { id: "firstName", label: "First Name", type: "text" },
                { id: "lastName", label: "Last Name", type: "text" },
                { id: "email", label: "Email", type: "email" }
              ].map((field) => (
                <div key={field.id} className="grid w-full items-center gap-1.5">
                  <Label htmlFor={field.id} className={`${worksans.className}`}>
                    {field.label}
                  </Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    value={formData[field.id as keyof FormData]}
                    onChange={handleInputChange}
                    className={`${worksans.className} border-0 border-b rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                    required
                  />
                </div>
              ))}
              <Button 
                type="submit"
                className={`${worksans.className} gap-2 w-full bg-slate-950 text-white`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book the consultation"} 
                <MoveRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};