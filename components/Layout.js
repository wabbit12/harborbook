import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HarborBook — Bookings & Payments for Service Businesses</title>
        <meta
          name="description"
          content="HarborBook helps salons, clinics, and independent pros take bookings, send reminders, and get paid—without back-and-forth DMs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

