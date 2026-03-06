import type { CalendarEvent } from '@/components/calendar/CalendarView';
import type { Client } from '@/app/clients/page';
import type { Campaign } from '@/app/campaigns/page';

export const revenueData = [
  { month: "Jan", revenue: 4500 },
  { month: "Feb", revenue: 4200 },
  { month: "Mar", revenue: 5200 },
  { month: "Apr", revenue: 3800 },
  { month: "May", revenue: 6100 },
  { month: "Jun", revenue: 5800 },
  { month: "Jul", revenue: 6500 },
  { month: "Aug", revenue: 6700 },
  { month: "Sep", revenue: 7200 },
  { month: "Oct", revenue: 6800 },
  { month: "Nov", revenue: 8100 },
  { month: "Dec", revenue: 9500 },
];

export const recentCampaigns = [
  { name: 'Summer Fest 2024', client: 'Groove Records', revenue: 2500 },
  { name: 'Tech Weekly Podcast', client: 'Innovate Corp', revenue: 1800 },
  { name: 'Morning Brew Show', client: 'The Coffee House', revenue: 1200 },
  { name: 'Late Night Jazz', client: 'City Bistro', revenue: 850 },
  { name: 'Indie Spotlight', client: 'Local Talents', revenue: 500 },
];

export const calendarEvents: CalendarEvent[] = [
  { date: '2024-07-08', time: '09:00', title: 'Morning Rock Show', type: 'broadcast' },
  { date: '2024-07-08', time: '11:00', title: 'Interview: The Local Band', type: 'guest' },
  { date: '2024-07-10', time: '14:00', title: 'Team Meeting', type: 'appointment' },
  { date: '2024-07-15', time: '10:00', title: 'Pop Power Hour', type: 'broadcast' },
  { date: '2024-07-15', time: '16:00', title: 'Client Call: Innovate Corp', type: 'appointment' },
  { date: '2024-07-22', time: '18:00', title: 'Evening Jazz Session', type: 'broadcast' },
  { date: '2024-07-25', time: '13:00', title: 'Guest DJ: Sparkle', type: 'guest' },
];

export const clients: Client[] = [
  { id: '1', name: 'Groove Records', email: 'contact@grooverecords.com', phone: '555-0101', interactionHistory: '3 Campaigns, 5 Mentions', linkedCampaigns: 'Summer Fest 2024' },
  { id: '2', name: 'Innovate Corp', email: 'hello@innovatecorp.com', phone: '555-0102', interactionHistory: '2 Campaigns, 1 Podcast Sponsorship', linkedCampaigns: 'Tech Weekly Podcast' },
  { id: '3', name: 'The Coffee House', email: 'manager@coffeehouse.com', phone: '555-0103', interactionHistory: '4 Campaigns (recurring)', linkedCampaigns: 'Morning Brew Show' },
  { id: '4', name: 'City Bistro', email: 'events@citybistro.com', phone: '555-0104', interactionHistory: '1 Campaign', linkedCampaigns: 'Late Night Jazz' },
  { id: '5', name: 'Local Talents Agency', email: 'booking@localtalents.com', phone: '555-0105', interactionHistory: 'Ongoing Partnership', linkedCampaigns: 'Indie Spotlight' },
];

export const campaigns: Campaign[] = [
  { id: '1', name: 'Summer Fest 2024', client: 'Groove Records', startDate: '2024-06-01', endDate: '2024-08-31', status: 'Active' },
  { id: '2', name: 'Tech Weekly Podcast', client: 'Innovate Corp', startDate: '2024-07-01', endDate: '2024-09-30', status: 'Active' },
  { id: '3', name: 'Spring Sale', client: 'Fashion Forward', startDate: '2024-03-15', endDate: '2024-04-15', status: 'Completed' },
  { id: '4', name: 'New Album Release', client: 'Starlight Music', startDate: '2024-08-01', endDate: '2024-08-15', status: 'Upcoming' },
  { id: '5', name: 'Holiday Special', client: 'The Gift Shop', startDate: '2023-12-01', endDate: '2023-12-25', status: 'Completed' },
  { id: '6', name: 'Morning Brew Show', client: 'The Coffee House', startDate: '2024-01-01', endDate: '2024-12-31', status: 'Active' },
];
