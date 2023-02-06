import { doc, setDoc } from "firebase/firestore";

import { firestoreCollections, getCollectionRef } from "config";
import { FormDataModel } from "../models/formData.models";

export const createFromData = (data: FormDataModel) => {
  const formDataRef = getCollectionRef<FormDataModel>(firestoreCollections.formData);
  const formDataDocument = doc(formDataRef);

  return setDoc(formDataDocument, data);
};
