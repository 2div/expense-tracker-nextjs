
import AddTranscation from "@/components/AddTranscation";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

const HomePage = async () => {
  const user = await currentUser()

  if (!user) {
    return <Guest />
  }

  return ( 
    <main>
      <h2>Welcome ${user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTranscation />
      <TransactionList />

    </main>
   );
}
 
export default HomePage;