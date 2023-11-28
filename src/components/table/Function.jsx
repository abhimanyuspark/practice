import { toast } from "react-toastify";

export const Edit = (id) => {
  // alert(`Function Edit: ${id}`);
  toast.success(`Function Edit: ${id}`);
};

export const Delete = (id) => {
  // alert(`Function Delete: ${id}`);
  toast.warn(`Function Delete: ${id}`);
};

export const View = (id) => {
  // alert(`Function View: ${id}`);
  toast.info(`Function View: ${id}`);
};
