<div align="center">

  <img src="./public/logo-dark.png" alt="logo" width="90" height="auto">

  <h1>The Wild Oasis by Guo Yichen</h1>

  <h3>
    <a href="https://sunnyray-the-wild-oasis.netlify.app/">
      <strong>Check out my live demo here</strong>
      <strong>Login using user: test@test.com pwd: testtest </strong>
    </a>
  </h3>

  <hr>

</div>

<!-- Badges -->
<div align="center">

![Status](https://img.shields.io/badge/Status-Completed-success?style=flat)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/yichen-guo-63756829a/)

</div>

<p align="center">
Welcome to **The Wild Oasis**! A hotel management web app, enabling hotel staff to efficiently oversee cabins, bookings, and guest information. Built on Supabase for backend support, this app applies advanced React techniques such as Higher-Order Components (HOCs) and React Query.
</p>

## Live Site

Explore the live admin app here: [The Wild Oasis - Admin](https://sunnyray-the-wild-oasis.netlify.app/dashboard)

## Core Features

- **User Authentication:** Ensures secure access for hotel employees only.
- **Profile Management:** Employees can manage profiles, including avatar uploads and password updates.
- **Dashboard:** An overview of recent booking stats, check-ins, and sales.
- **Cabin Management:** Easily create, update, or delete cabin records.
- **Booking Management:** Allows employees to check guests in/out and update booking statuses.
- **Real-Time Updates:** Supabase integration provides live updates for cabins and bookings.
- **Visual Statistics:** Interactive charts display data on sales, occupancy, and other key metrics.
- **Dark Mode:** Offers a fully functional dark mode for a personalized experience.

## Tech Stack

- **React** for building the frontend.
- **Supabase** for backend database support, including real-time data features.
- **React Query** for efficient data fetching and caching.
- **React Router** for smooth app navigation.
- **React Hook Form** to streamline form management.
- **Recharts** for data visualization (charts and stats).
- **Styled Components** for UI styling, supporting dark mode.
- **Vite** as the development environment and build tool.

## Project Insights

Working on this project provided extensive experience with advanced React concepts, including:

- **User Authentication & Role-Based Authorization:** Secure role management with Supabase for hotel employees.
- **Real-Time Features:** Integrated Supabase’s real-time capabilities for dynamic data changes.
- **Efficient Data Handling:** Applied React Query for optimized state management and data flow.
- **Advanced UI Patterns:** Utilized design patterns like Compound Components and HOCs for better code scalability and maintainability.
- **Responsive Design:** Styled Components ensured a responsive, adaptable UI across various devices.
- **Dark Mode Integration:** Added dark mode for an enhanced user experience.
- **Data Representation:** Employed Recharts to provide insightful, graphical representations of hotel metrics.

## Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/SunnyRaymond/the-wild-oasis.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Set up Supabase and include necessary environment variables in a `.env` file, referring to `.env.example` as needed.
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) to access the app.

## Acknowledgments

This project was created following [Jonas Schmedtmann's Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course) on Udemy. Many thanks to Jonas for his expert instruction and guidance throughout the course.
