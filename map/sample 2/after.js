// this'll be more easy to maintain & we can add more items with ease

const generateData = () => {
    const rawData = [
        {
            categoryId: 286,
            categoryName: 'Appliances',
            iconClass: 'fas fa-blender'
        },
        {
            categoryId: 287,
            categoryName: 'Furniture',
            iconClass: 'fas fa-couch'
        },
        {
            categoryId: 288,
            categoryName: 'Architecture',
            iconClass: 'fa fa-university'
        }
    ];
    return rawData.map(item => {
        return {
            showAll: true,
            isSelected: false,
            categoryId: item.categoryId,
            categoryName: item.categoryName,
            objects: [],
            iconClass: item.iconClass,
            groups: [
                {
                    name: 'Root',
                    categoryId: item.categoryId,
                    objects: [],
                    _toggle: true,
                    isExpanded: false,
                    isSelected: false,
                    isFilteredByTag: true,
                    isFilteredBySearch: true
                }
            ]
        }
    });
}