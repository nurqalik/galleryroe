import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const TopNav = () => {
  return (
    <nav className="ww-full items-center justify-between flex p-4 border-b text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}