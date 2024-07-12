import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getUserBalance( ): Promise<{ 
    balance?: number
     error?: string
}> {
    const { userId } = auth()

    if (!userId) {
        return {error: 'User not found'}
    }

   try {
    const transaction = db.transaction.findMany({
        where: {userId}
    })

    const balance = (await transaction).reduce((sum,transaction) => sum + transaction.amount, 0 )
    return {balance}
   } catch (error) {
    return {error : ' database error'}
   }
}

export default getUserBalance