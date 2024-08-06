const PaginateMenu = ({ changePage, active, maxvalue }) => {
  function generatePages(maxvalue) {
    const pages = [];
    for (let i = 0; i <= maxvalue; i += 9) {
      pages.push({ page: i });
    }
    return pages;
  }
  const generatePagesArr = generatePages(maxvalue);
  return (
    <div className="flex gap-3 mt-5 text-white">
      <button
        className="w-10 h-10 rounded flex justify-center items-center bg-slate-300 cursor-pointer disabled:bg-[#262626] disabled:text-slate-500"
        onClick={() => changePage(active - 9)}
        disabled={active === 0}
      >
        PREV
      </button>
      {generatePagesArr.map((obj, i) => (
        <button
          key={i}
          className={`${
            obj.page === active && "bg-green-400"
          } w-10 h-10 rounded flex justify-center items-center bg-slate-300 cursor-pointer text-xl`}
          onClick={() => changePage(obj.page)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="w-10 h-10 rounded flex justify-center items-center bg-slate-300 cursor-pointer disabled:bg-[#262626] disabled:text-slate-500"
        onClick={() => changePage(active + 9)}
        disabled={active === generatePagesArr[generatePagesArr.length - 1].page}
      >
        NEXT
      </button>
    </div>
  );
};

export default PaginateMenu;
