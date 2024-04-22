import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"; 
import { SimpleUploadButton } from "./simple-upload-btn";

export const TopNav = () => {
  // const { user } = useUser();
  // console.log(user?.id)
  return (
    <nav className="ww-full flex items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4 items-center  ">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          /> */}
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
