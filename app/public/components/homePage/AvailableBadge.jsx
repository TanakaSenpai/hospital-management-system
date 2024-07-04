import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function BadgeSecondary() {
  return <Badge className="bg-secondary flex gap-1 self-start mt-4"><Image src="/Images/available.png" alt="available" width={10} height={10} />Available</Badge>;
}
