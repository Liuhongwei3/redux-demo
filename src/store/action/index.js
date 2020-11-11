const ChangeInputAction = (e) => ({
  type: 'change_input_value',
  value: e.target.value
});

const GetInitListAction = () => ({
  type: 'get_init_list'
})

const InitListAction = value => ({
  type: 'init_list',
  value
});

const AddItemAction = () => ({
  type: 'add_item',
})

const DeleteItemAction = (index => ({
  type: 'delete_item',
  value: index
}))

export {ChangeInputAction, GetInitListAction, InitListAction, AddItemAction, DeleteItemAction}