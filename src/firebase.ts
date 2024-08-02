import * as admin from "firebase-admin";
import serviceAccount from "../config/my-project-9982d-firebase-adminsdk-2nxdu-8fb432a8eb.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const firestore = admin.firestore();
export { firestore };

 