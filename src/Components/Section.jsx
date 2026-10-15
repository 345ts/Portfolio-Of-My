// Shared two-column layout from the wireframe:
//   left  = (space for the Home panel) + the section title
//   right = the section content
const Section = ({ id, title, eyebrow, side, children }) => (
  <section id={id} className="sec">
    <div className="sec-side">
      <div className="sec-title">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-[1px] bg-[#333333]"></div>
          <span className="text-[10px] tracking-[0.5em] text-[#707070] uppercase font-black">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-4xl xl:text-5xl font-black text-[#333333] tracking-tighter">
          {title}
          <span className="text-[#707070]">.</span>
        </h2>
        {side && <div className="mt-6">{side}</div>}
      </div>
    </div>
    <div className="sec-body">{children}</div>
  </section>
);

export default Section;