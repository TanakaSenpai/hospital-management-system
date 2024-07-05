"use server"
import { db } from "@/app/config/firebase"
import { addDoc, collection, doc } from "firebase/firestore"
import { toast } from "sonner"

const addAppointment = async (formData, uid) => {
    const appointmentsRef = collection(db, "appointments")
    const userRef = doc(db, "users", uid)
    const docRef = await addDoc(appointmentsRef, {
      reason: formData.get("reason"),
      appointmentDate: formData.get("appointmentDate"),
      user: userRef
    });
  console.log(docRef)
    toast.success("Success")
 
  
}

export { addAppointment };
