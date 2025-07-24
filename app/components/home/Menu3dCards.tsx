"use client";
import { useCallback } from "react";

interface Menu {
    id: number;
    title: string;
    pdf: string;

}

const menus: Menu[] = [
    {
        id: 1,
        title: "Kannur",
        pdf: "/menu/omas-kannur.pdf",

    },
    {
        id: 2,
        title: "Panoor",
        pdf: "/menu/omas-panoor.pdf",

    },
    {
        id: 3,
        title: "Mambram",
        pdf: "/menu/omas-mambram.pdf",

    },
    {
        id: 4,
        title: "6th Mile",
        pdf: "/menu/omas-6th-mile.pdf",

    },
];

const MenuButtons: React.FC = () => {
    const handleMenuClick = useCallback((pdfPath: string, menuTitle: string) => {
        try {
            window.open(pdfPath, "_blank");
        } catch (error) {
            console.error(`Failed to open ${menuTitle} menu:`, error);
            alert(`Sorry, unable to open ${menuTitle} menu. Please try again later.`);
        }
    }, []);

    return (
        <div className="">
            <div className="max-w-6xl mx-auto mt-3">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {menus.map((menu) => (
                        <div key={menu.id} className="group">
                            <button
                                onClick={() => handleMenuClick(menu.pdf, menu.title)}
                                className="w-full  border-2 border-amber-200 hover:border-amber-400 rounded-2xl p-8 shadow-lg hover:shadow-amber-200 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-amber-200"
                            >
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-6 group-hover:text-amber-600 transition-colors duration-300 tracking-tight">
                                    {menu.title}
                                </h3>

                                <p className="text-sm
                                    bg-amber-500 text-white p-2 rounded-3xl shadow-md
                                ">View Menu</p>

                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MenuButtons;
