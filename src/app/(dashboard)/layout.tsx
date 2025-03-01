import Sidebar from "../../components/Sidebar";
import RightHeader from "@/components/RightHeader";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-row">
      <div className="w-[14%] h-full p-4 bg-white border-r border-gray-200 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto flex-1">
        <RightHeader />
        {children}
      </div>
    </div>
  );
}