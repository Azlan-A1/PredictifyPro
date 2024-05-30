import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
    const session = await getServerSession(authOptions);  

    if (session?.user) {
      return (
      <h2 className = "text-2xl">
        Admin page - welcome back {session?.user.username}
      </h2>
      );
    }

    return <h2 className = "text-2xl">Please login to see the admin page</h2>;
    
};

export default page;