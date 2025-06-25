function Content() {

    const segments = [
        { type: "text", content: "In 2050, material wealth will not be " },
        { type: "text", content: "impressive. Your VO" },
        { type: "sub", content: "2" },      
        { type: "text", content: "Max, " },
        { type: "img", src: "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671a443699cfb0f4ec724439_Screenshot%202024-09-12%20at%2018.26.59%20(1).webp", alt: "tree icon" },
        { type: "text", content: " speed of aging, HRV " },
        { type: "img", src: "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b4e6f73152ac6a0fbb444_Screenshot%202024-09-12%20at%2018.26.59-2.webp", alt: "HRV icon" },
        { type: "text", content: " and body fat percentage " },
        { type: "img", src: "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b4e7fc91b3fa9f76f342b_Screenshot%202024-09-12%20at%2018.26.59.webp", alt: "body‐fat icon" },
        { type: "text", content: " will be." },
    ];

    return (
        <div className="w-full flex justify-center items-center p-4 mt-20">
            <div>
                <h1 className="text-[1.7vw] leading-[2.3vw] font-[switzer-regular] flex flex-col items-center justify-center">
                    <span className=" w-130 text-black">
                        {segments.slice(0, 1).map((seg, i) => {
                            switch (seg.type) {
                                case "text":
                                    return <span key={i}>{seg.content}</span>;
                                case "sub":
                                    return <sub key={i} className="align-baseline">{seg.content}</sub>;
                                case "img":
                                    return (
                                        <img
                                            key={i}
                                            src={seg.src}
                                            alt={seg.alt}
                                            className="inline-block w-13 h-8 rounded-xl mx-1 align-middle object-cover"
                                        />
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </span>

                    <span className=" w-150 text-gray-400">
                        {segments.slice(1).map((seg, i) => {
                            const key = i + 1;
                            switch (seg.type) {
                                case "text":
                                    return <span key={key}>{seg.content}</span>;
                                case "sub":
                                    return <sub key={key} className="align-baseline">{seg.content}</sub>;
                                case "img":
                                    return (
                                        <img
                                            key={key}
                                            src={seg.src}
                                            alt={seg.alt}
                                            className="inline-block w-13 h-8 rounded-xl mx-1 align-middle object-cover"
                                        />
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </span>
                </h1>
            </div>
        </div>

    )
}

export default Content