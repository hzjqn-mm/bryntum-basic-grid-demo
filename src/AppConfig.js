import DataGenerator from './lib/generateData'

/**
 * Application configuration
 */

const useGridConfig = (component, overrideConfig) => {
  console.log(overrideConfig)

  const data = DataGenerator.generateTreeData(2, 5);

  return {
    data,
    tbar : [
      {
        type     : 'button',
        ref      : 'addButton',
        text     : 'Add Item',
        icon     : 'b-fa-plus',
        //tooltip  : 'Add a new item to the table',
        onAction :  component.addColumn
      },
    ],
    // data          : DataGenerator.generateTreeData(500, 100),
    selectionMode : {
        row          : true,
        checkboxOnly : true
    },
    cellEditFeature   : true,
    filterBarFeature  : true,
    rowReorderFeature : true,
    stripeFeature     : true,
    treeFeature       : true,
    loadMask          : 'Loading tree data...',
    onSelectionChange({ source, selected, deselected }) {
        if (selected.length === 1 && !selected[0].isLeaf) {
            selected[0].children.forEach(record =>
                source.selectRow({
                    record,
                    addToSelection : true,
                    scrollIntoView : false
                })
            );
        }
        if (deselected.length === 1 && !deselected[0].isLeaf) {
            source.deselectRows(deselected[0].children);
        }
    },
    columns : [
        {
            type                 : 'tree',
            field                : 'name',
            text                 : 'Name <small>(Vue Component)</small>',
            htmlEncodeHeaderText : false,
            flex                 : 2,
            
        },
        {
            field                : 'food',
            text                 : 'Food <small>(Vue Component)</small>',
            htmlEncodeHeaderText : false,
            flex                 : 1,
            
        },
        {
            field : 'city',
            text  : 'City',
            flex  : 1
        },
        {
            field : 'team',
            text  : 'Team',
            flex  : 1
        },
        {
            field : 'color',
            text  : 'Color',
            flex  : 1
        },
        {
            field : 'rating',
            text  : 'Rating',
            align : 'center',
            width : 80
        }
    ]
  }
};


export { useGridConfig };
