import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Badge({ children }: Props): ReactNode {
  return (
    <span className="badge rounded-sm border border-gray-400 bg-amber-50 px-2 py-1 text-xs">
      {children}
    </span>
  );
}
