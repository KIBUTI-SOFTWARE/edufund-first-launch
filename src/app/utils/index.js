import { toast } from "sonner"

export const testimonials = [
  {
    name: "Aloysious",
    message: "Receiving financial support has allowed me to continue my studies without the constant worry of tuition fees. This scholarship has truly changed my life.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aGVhZHNob3R8ZW58MHwxfHx8MTY5MTIxOTI0Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    company: "Scholarship Org",
    link: "#",
    twitter: "#"
  },
  {
    name: "Jane Doe",
    message: "The scholarship I received helped me pursue my dream degree in engineering. I am now in my final year and can't thank the donors enough for their support.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlJTIwcGljdHVyZXN8ZW58MHx8fHwxNjkxMjIwMjAw&ixlib=rb-4.0.3&q=80&w=1080",
    company: "Edu Support",
    link: "#",
    twitter: "#"
  },
  {
    name: "John Smith",
    message: "Without the scholarship, I would not have been able to complete my degree. It has been a lifesaver and opened up so many opportunities for me.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxwcm9maWxlJTIwcGljdHVyZXN8ZW58MHx8fHwxNjkxMjIwMjAw&ixlib=rb-4.0.3&q=80&w=1080",
    company: "Supportive Org",
    link: "#",
    twitter: "#"
  },
  // Add more testimonials as needed
];
export const faqs = [
  {
    id: 1,
    question: "What is the duration for the fundraiser?",
    answer: "The duration is for 2 weeks from the 31st till the 15th."
  },
  {
    id: 2,
    question: "When will applications for funding be open?",
    answer: "Applications will be open 2 weeks from the fundraiser launch date, starting from 16th June 2024."
  },
  {
    id: 3,
    question: "When would applicants be contacted?",
    answer: "Applicants will be contacted 7 days after they apply."
  },
  {
    id: 4,
    question: "When will funding disbursement commence?",
    answer: "Funding disbursement will commence once applications are received, followed by verification of documents and student status."
  },
  {
    id: 5,
    question: "How much will be awarded for applicants?",
    answer: "A minimum of £500 to £1000 will be awarded to applicants."
  },
  {
    id: 6,
    question: "Have any other questions?",
    answer: "Contact us with this email: partnership@edufunds.co"
  }
];

export const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];
export const alerter = (message) => {
  toast(message, {
    description: new Date().toDateString(),
    action: {
      label: "continue",
      onClick: () => console.log("continue"),
    },
    // dismissible: "true",
    style: { borderWidth: "2px", borderColor: "green" },
    important: "true"
  });
};