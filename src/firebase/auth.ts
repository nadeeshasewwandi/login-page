import { auth } from "./config";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

async function signInWithGoogle(): Promise<string | null> {
  try {
    const result = await signInWithPopup(auth, provider);

    const credential =
      GoogleAuthProvider.credentialFromResult(result);

    return credential?.accessToken || null;
  } catch (error) {
    console.error("Google sign-in failed:", error);
    return null;
  }
}

export { signInWithGoogle };