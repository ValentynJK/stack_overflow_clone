import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LoginSignup = () => {
  return (
    <SignedOut>
      <div className='flex flex-col gap-3'>
        <div>
          <Link href='/sign-in'>
            <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
              <Image
                src='/assets/icons/account.svg'
                width={20}
                height={20}
                alt='sign-up'
                className='lg:hidden'
              />
              <span className='primary-text-gradient max-lg:hidden'>
                Log in
              </span>
            </Button>
          </Link>
        </div>

        <div>
          <Link href='/sign-up'>
            <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full  rounded-lg px-4 py-3 shadow-none'>
              <Image
                src='/assets/icons/sign-up.svg'
                width={20}
                height={20}
                alt='sign-up'
                className='lg:hidden'
              />
              <span className='max-lg:hidden'>Sign up</span>
            </Button>
          </Link>
        </div>
      </div>
    </SignedOut>
  );
};

export default LoginSignup;
