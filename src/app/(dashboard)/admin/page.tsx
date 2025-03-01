import Card from "@/components/Card";
export default function Home() {
  return (
    <div className="w-full">
      <div className="flex gap-5 m-3 ">
        <Card type="admin"  />
        <Card type="student"/>
        <Card type="teacher"/>
        <Card type="parent" />
      </div>
    </div>
  );
}
