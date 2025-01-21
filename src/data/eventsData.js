// src/data/blogsData.js
export const events = [
  {
    id: 1,
    title: "Join the Revolution: International Global Summit 2025",
    image: require('../img/upcoming-events/event1.jpg'), // Replace with the actual event image
    date: "8 & 9 February, 2025",
    topic: "Transformational Leadership",
    summary: `Step into a transformative journey at the International Global Summit on 8th & 9th February 2025. This game-changing event, hosted by renowned global experts, is designed to unlock your potential and pave the way for success.`,
    glimpses: [
      "Exclusive insights from industry leaders",
      "Bonuses worth ₹80,000 absolutely FREE",
      "6-Months personalized handholding and guidance",
      "Community & VC support for funding opportunities",
      "Graduation ceremony in Mumbai 3 months later",
    ],
    content: [
      {
        type: "text",
        data: `Join the International Global Summit 2025 on 8th & 9th February, a transformative event tailored for entrepreneurs, startup founders, corporate professionals, and leadership enthusiasts. Unlock tools, connections, and knowledge to elevate your journey.`,
      },
      {
        type: "text",
        data: "Why Attend?",
      },
      {
        type: "list",
        data: [
          "Exclusive insights from renowned global experts",
          "Bonuses worth ₹80,000 at no additional cost",
          "6-month personalized guidance to implement your learning",
          "Access to a thriving community and VC support for funding",
          "Graduation ceremony in Mumbai, celebrating your achievements",
        ],
      },
      {
        type: "image",
        data: require('../img/upcoming-events/leader.jpg'), // Replace with the actual image
        caption: "Unlock your potential at the International Global Summit 2025.",
      },
      {
        type: "text",
        data: "Registration Details",
      },
      {
        type: "text",
        data: `Seats are limited, so secure your spot today! Invest ₹19,999/- for unparalleled benefits. Register now and take the first step toward transformation.`,
      },
      {
        type: "link",
        data: "https://forms.gle/eBUq2Rrs2Kmdsczd9", // Registration link
        caption: "Register now",
      },
      {
        type: "image",
        data: require('../img/upcoming-events/graduation.jpg'), // Replace with the actual image
        caption: "Celebrate your achievements at the graduation ceremony in Mumbai.",
      },
      {
        type: "text",
        data: "Conclusion",
      },
      {
        type: "text",
        data: `Don't miss out on this once-in-a-lifetime opportunity to learn, grow, and connect. Whether you're a student, entrepreneur, or corporate professional, this summit is your gateway to transformation. Join us and take the first step toward success.`,
      },
    ],
  },
];
    