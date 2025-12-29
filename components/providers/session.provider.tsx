"use client";

import { ChildProps } from "@/types";
import { FC } from "react";
import { SessionProvider as Session } from "next-auth/react";

const SessionProvider: FC<ChildProps> = ({ children }) => {
  return <Session>{children}</Session>;
};

export default SessionProvider;
