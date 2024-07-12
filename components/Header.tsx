import { checkUser } from "@/lib/checkUser";
import { SignInButton,SignedOut,SignedIn,UserButton   } from "@clerk/nextjs";
// Okyes#777
const Header = async () => {
    const user = await checkUser()

    return ( <nav className="navbar">
        <div className="navbar-container">
            <h2>Expense Tracker</h2>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        </div>
    </nav>  );
}
 
export default Header; <nav className="navbar">
<div className="navbar-container">
    <h2>Expense Tracker</h2>
    <div>

    </div>
</div></nav>