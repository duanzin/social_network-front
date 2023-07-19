export default function Loading() {
    return (
      <article className="flex flex-row bg-white w-full px-4 py-2.5 gap-x-2.5">
        <div className="rounded-full w-12 h-12 bg-slate-300 animate-pulse"></div>
        <div className="flex flex-col w-full gap-y-2">
          <div className="bg-slate-300 h-4 w-14 rounded-lg animate-pulse"></div>
          <div className="bg-slate-300 h-4 w-full rounded-lg animate-pulse"></div>
        </div>
      </article>
    );
  }