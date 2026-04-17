import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { User } from "../models/user.model.js";
import { deleteStreamUser, upsertStreamUser,addUserTouPublicChannel } from "./stream.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id:"slack-clone" });
const syncUser =inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user.created"},
    async({event})=>{
        await connectDB()

        const {
            id,
            email_addresses = [],
            primary_email_address_id,
            first_name,
            last_name,
            image_url
        } = event.data;

        const primaryEmail =
            email_addresses.find(
                (email) => email.id === primary_email_address_id
            )?.email_address ?? email_addresses[0]?.email_address;

        if (!primaryEmail) {
            throw new Error(`No email address found for Clerk user ${id}`);
        }

        const newUser={
            clerkId :id,
            email:primaryEmail,
            name:[first_name, last_name].filter(Boolean).join(" ") || primaryEmail,
            image:image_url
        }
        await User.create(newUser)

        await upsertStreamUser({
            id :newUser.clerkId.toString(),
            name:newUser.name,
            image:newUser.image
        })

        await addUserTouPublicChannel(newUser.clerkId.toString())

    }
        ) 

const deleteUserFromDb = inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:"clerk/user.deleted"},
    async({event})=>{
        await connectDB()
        const {id} =event.data
        await User.deleteOne({clerkId:id})

        await deleteStreamUser(id.toString())

        
    }
)

    


// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser,deleteUserFromDb];
