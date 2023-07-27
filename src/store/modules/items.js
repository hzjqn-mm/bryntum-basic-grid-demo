import DataGenerator from '../../../src/lib/generateData.js'

export function getState (name, object) {
  return {
    ...object,
    ...JSON.parse(localStorage.getItem(name) || '{}')
  }
}

export function setState (name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

const moduleName = 'layout'

export const state = getState(
  moduleName,
  {
    gridModel: {
      data: DataGenerator.generateTreeData(2, 5),
      selectionMode : {
          row          : true,
          checkboxOnly : true
      },
      treeFeature       : true,
      loadMask          : 'Loading tree data...',
     
      columns : [
        {
          type                 : 'tree',
          field                : 'name',
          text                 : 'Name <small>(Vue Component)</small>',
          htmlEncodeHeaderText : false,
          flex                 : 2,
          vue                  : true,
          renderer({ record: { name } }) {
              return {
                  is : 'BoldName',
                  name
              };
          }
      },
      {
          field                : 'food',
          text                 : 'Food <small>(Vue Component)</small>',
          htmlEncodeHeaderText : false,
          flex                 : 1,
          vue                  : true,
          renderer({ record: { food: text } }) {
              return {
                  is : 'ItalicName',
                  text
              };
          }
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
  },
  }
);

export const mutations = {
  ADD_FIELD_COLUMN(state, column) {
    if(state.gridModel.columns)
    state.gridModel.columns.push(column);
    console.log(state.gridModel.columns);
  }
}

export const actions = {
  addFieldColumn({ commit }, column) {
    commit('ADD_FIELD_COLUMN', column);
  },
}
