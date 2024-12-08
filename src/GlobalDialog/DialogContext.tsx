import React, { Dispatch, ReactNode, SetStateAction } from "react";

export type GlobalDialogContent = {
  componentType?: "dialog" | "alert";
  title: string;
  desc: string | ReactNode;
  type: "success" | "destructive" | "info" | "custom";
  customIcon?: ReactNode;
  actionType?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "Tertiary"
    | "link"
    | null
    | undefined;
  actionText?: string;
  onConfirm?: () => void;
  confirmBtnText?: string | any;
  children?: any;
};

export const DialogContext = React.createContext<{
  isOpen: boolean;
  content: GlobalDialogContent | null;
  onClose: () => void;
  onCancel: () => void;
  show: (content: GlobalDialogContent) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  content: null,
  onClose: () => {},
  show: () => {},
  onCancel: () => {},
  setIsOpen: () => {},
});
