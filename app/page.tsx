import { Metadata } from "next";
import { Home } from "./components/Home";

export default function HomePage() {
  return (
    <Home/>
  );
}

export const metadata: Metadata = {
  title: "Home",
};

