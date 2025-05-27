import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-center min-h-screen w-full">{children}</div>;
}
