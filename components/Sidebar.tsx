'use client'
import { useSession, signOut} from "next-auth/react"
import Newchat from "./Newchat"
import {useCollection} from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"
import ChatRow from "./ChatRow"
import ModelSelection from "./ModelSelection"

const Sidebar = () => {
  const  {data: session} =  useSession()

  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, 'users', session.user?.email!, 'chats'),
      orderBy("createdAt", "asc")
      )
  )
  return (
    <aside>
      <div className="p-2 flex flex-col h-screen">
          <div className="flex-1">
                <div>
                  <Newchat/>
                </div>
                <div className="hiddden sm:inline">
                  <ModelSelection/>
                </div>
                <div className="flex flex-col space-y-2 my-2">
                  {loading && (
                    <div className="animate-pulse text-center text-white my-2">
                      <p>Loading Chats...</p>
                    </div>
                  )}

                  {chats?.docs.map((chat) => (
                    <ChatRow key={chat.id} id={chat.id} />
                  ))}
                </div>
          </div>
      </div>
    </aside>
   
  )
}

export default Sidebar