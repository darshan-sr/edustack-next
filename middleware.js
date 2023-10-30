import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NextResponse } from "next/server";
import { auth } from "./app/firebase/firebase";
import { useUserAuth } from "./app/firebase/userAuthContext";

export function middleware(request) {
  // const {user}  = useUserAuth()
  // if (request.nextUrl.pathname.startsWith('/faculty/home')) {
  //           if (user) {
  //             const uid = user.uid;
  //             console.log(uid)
  //           } else {
  //             console.log('no user')
  //           }
  // }
  //   if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  //   }
}
