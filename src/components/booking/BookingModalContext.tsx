"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { BookingModal } from "./BookingModal";

interface BookingModalContextValue {
  isOpen: boolean;
  defaultService: string;
  openBookingModal: (defaultService?: string) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | null>(
  null
);

export const BookingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState("");

  const openBookingModal = useCallback((service?: string) => {
    setDefaultService(service ?? "");
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, defaultService, openBookingModal, closeBookingModal }),
    [isOpen, defaultService, openBookingModal, closeBookingModal]
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      {isOpen && <BookingModal />}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);

  if (!context) {
    throw new Error(
      "useBookingModal must be used within a BookingModalProvider"
    );
  }

  return context;
};
