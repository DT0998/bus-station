import { Metadata } from "next";
import "../assets/styles/globals.css";
import DashboardLayout from "../layouts/dashboard";
import StyledComponentsRegistry from "../config/StyledComponentsRegistry";
import { CounterProvider } from "../context/count";

export const metadata: Metadata = {
  title: "Bus station",
  description: "Bus station",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <DashboardLayout>
            <CounterProvider>{children}</CounterProvider>
          </DashboardLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
