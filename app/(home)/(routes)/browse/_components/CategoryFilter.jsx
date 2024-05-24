import React, { useState, useRef, useEffect } from 'react';

function CategoryFilter({ selectedCategory }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const filterOptions = [
        { id: 1, name: 'All', value: 'all' },
        { id: 2, name: 'Biyoinformatik', value: 'biyoinformatik' },
        { id: 3, name: 'Wordpress', value: 'wordpress' },
        { id: 4, name: 'BioCom', value: 'biocom' },
    ];

    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
    }, []);

    const handleCategoryClick = (item, index) => {
        setActiveIndex(index);
        selectedCategory(item.value);
    };

    return (
        <div className="flex overflow-x-auto py-2" ref={containerRef}>
            <div className="flex" style={{ width: containerWidth }}>
                {filterOptions.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryClick(item, index)}
                        className={`border p-2 px-4 text-sm rounded-md hover:border-purple-800 font-semibold hover:bg-gray-50 ${
                            activeIndex === index ? 'border-purple-800 bg-purple-50 text-purple-800' : null
                        }`}
                        style={{ minWidth: '100px', marginRight: '10px' }}
                    >
                        <h2 className="whitespace-nowrap">{item.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;
