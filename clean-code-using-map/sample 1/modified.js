$rootScope.generatePivotPointData = () => {
    const dataset = {
        Customize: ['customize'],
        Centers: ['center_center', 'top_center', 'bottom_center', 'front_center', 'back_center', 'left_center', 'right_center'],
        Corners: ['top_corner_1', 'top_corner_2', 'top_corner_3', 'top_corner_4', 'bottom_corner_1', 'bottom_corner_2', 'bottom_corner_3', 'bottom_corner_4'],
        Sides: ['top_front_center', 'top_back_center', 'top_left_center', 'top_right_center', 'bottom_front_center', 'bottom_back_center', 'bottom_left_center', 'bottom_right_center', 'front_left_center', 'front_right_center', 'back_left_center', 'back_right_center']
    };
    return Object.keys(dataset).map(categoryName => {
        const item = {
            category: categoryName,
            isExpanded: true,
            presets: []
        };
        item.presets = dataset[categoryName].map(preset => {
            return {
                imgSrc: `../WebGLContent/images/pivot_point_templates/${preset}.png`,
                value: preset.split('_').join('-'),
                label: preset.split('_').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')
            }
        });
        return item;
    });
}