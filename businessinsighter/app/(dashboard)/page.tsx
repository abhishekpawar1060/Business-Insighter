import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p>This is an authenticated route</p>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
