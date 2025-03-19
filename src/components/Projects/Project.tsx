export default function Project({ id }: { id: number }) {
  return (
    <div className="rounded-xl bg-slate-400 w-[300px] h-[200px] overflow-hidden">
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="Project 1" className="w-full h-full object-cover" />
    </div>
  );
}