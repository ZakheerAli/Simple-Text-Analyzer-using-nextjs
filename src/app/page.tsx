import Content from "./components/content"
export default function Home() {
  return (
    <div className="bg-slate-800">
        <div className="bg-blue-500 h-full px-14 py-4 w-full">
          <h1 className="text-white text-2xl font-extrabold ">TEXT ANALYZER</h1>
        </div>
        <Content/>
    </div>

  )
}