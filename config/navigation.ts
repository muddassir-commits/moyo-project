export const PILLARS = [
  { name: "Domestic Help & Home Care", href: "/domestic-help-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1763633259311_home-01.png" },
  { name: "Home Cleaning", href: "/home-cleaning-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765871722104_cleaning.png" },
  { name: "Home Repairs", href: "/home-repair-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1763633978371_Repair.png" },
  { name: "Beauty & Grooming", href: "/beauty-services-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1763632844293_BEAUTY--3.png" },
  { name: "Laundry & Fabric Care", href: "/laundry-services-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765783033889_Fabric-Care.png" },
  { name: "Home Nursing & Elder Care", href: "/home-nursing-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765783107618_healthcare.png" },
  { name: "Fitness & Wellness", href: "/fitness-trainer-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765783045534_Fitness.png" },
  { name: "Home Tutors", href: "/home-tutor-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765782781479_education.png" },
  { name: "Events & Entertainment", href: "/event-services-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765783014024_entertainment.png" },
  { name: "Packers, Movers & Drivers", href: "/packers-movers-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765783148385_Transport.png" },
  { name: "Pandit & Religious", href: "/pandit-services-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765782909778_Religious.png-2.png" },
  { name: "Construction & Interiors", href: "/construction-services-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1763634811201_Construct.png" },
  { name: "Office & Business Support", href: "/office-staff-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765782854909_Office%20Support.png" },
  { name: "Industrial & Security Staffing", href: "/industrial-staffing-noida", image: "https://moyo-database.s3.ap-south-1.amazonaws.com/categories/1765782833650_security-services.png" },
];

export const MAIN_NAV = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", children: PILLARS },
  { 
    name: "My Account", 
    href: "/dashboard", 
    children: [
      { name: "My Bookings", href: "/dashboard" },
      { name: "MOYO Wallet", href: "/wallet" },
      { name: "MOYO Plus", href: "/plus" },
      { name: "Refer & Earn", href: "/referral" },
    ] 
  },
  { 
    name: "For Partners", 
    href: "/provider-dashboard", 
    children: [
      { name: "Partner Dashboard", href: "/provider-dashboard" },
      { name: "Complete KYC", href: "/provider-dashboard/kyc" },
    ] 
  },
  { name: "About", href: "/about" },
];

export const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacypolicy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Code of Conduct", href: "/code-of-conduct" },
  { name: "Cancellation & Refund", href: "/cancellation-refund" },
];

export const CONTACT = {
  name: "MOYO International Pvt. Ltd.",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "hello@moyointernational.com",
  street: "Sector 62, Noida Expressway",
  city: "Noida",
  state: "Uttar Pradesh",
  pin: "201309",
};
