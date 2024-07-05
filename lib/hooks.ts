import { useEffect } from "react";
import { getcookie } from "./actions";
import { handleverify } from "/redux/features/authActions";
import { useAppDispatch } from "/redux/hooks";


export function useVerify () {

const dispatch = useAppDispatch();
  const verify = async () => {
    try {
      const token = await getcookie("access");
      if (token !== null) {
        dispatch(handleverify(token));
      }
    } catch (err) {
      console.error(err);
    }
  };

return verify


}